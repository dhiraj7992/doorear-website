import nodemailer from 'nodemailer'
import {
  buildFormSubmitBody,
  getContactFormRecipient,
  getFormSubmitInbox,
  normalizeContactPayload,
  type ContactFormPayload,
} from '@/lib/contact-form-config'

export type ContactEmailResult =
  | { ok: true }
  | { ok: false; message: string; code?: string; status?: number }

export function isValidContactEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

function formatPlainTextBody(
  raw: ContactFormPayload,
  source: string
): { subject: string; text: string; replyTo: string } {
  const data = normalizeContactPayload(raw)
  const subject = `Doorear lead: ${data.fullName || data.email || 'New inquiry'}`
  const lines = [
    `Name: ${data.fullName || '—'}`,
    `Email: ${data.email || '—'}`,
    `Phone: ${data.phone || '—'}`,
    `Source: ${source}`,
    '',
    'Message:',
    data.message || '—',
    '',
    'UTM / attribution:',
    `  Source: ${data.utm.source || '—'}`,
    `  Medium: ${data.utm.medium || '—'}`,
    `  Campaign: ${data.utm.campaign || '—'}`,
    `  Term: ${data.utm.term || '—'}`,
    `  Content: ${data.utm.content || '—'}`,
    `  Referrer: ${data.utm.referrer || '—'}`,
    `  Landing page: ${data.utm.landingPage || '—'}`,
  ]
  return { subject, text: lines.join('\n'), replyTo: data.email }
}

function smtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim()
  )
}

async function sendViaSmtp(
  raw: ContactFormPayload,
  source: string
): Promise<ContactEmailResult> {
  const recipient = getContactFormRecipient()
  const { subject, text, replyTo } = formatPlainTextBody(raw, source)
  const host = process.env.SMTP_HOST!.trim()
  const port = Number(process.env.SMTP_PORT ?? '587')
  const user = process.env.SMTP_USER!.trim()
  const pass = process.env.SMTP_PASS!.trim()
  const from =
    process.env.SMTP_FROM?.trim() || `Doorear Website <${user}>`

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  try {
    await transporter.sendMail({
      from,
      to: recipient,
      replyTo: replyTo || undefined,
      subject,
      text,
    })
    return { ok: true }
  } catch (err) {
    const detail = err instanceof Error ? err.message : 'SMTP send failed'
    return {
      ok: false,
      code: 'SMTP_ERROR',
      message: `Could not send email (${detail}). Check SMTP settings on the server.`,
      status: 502,
    }
  }
}

async function sendViaWeb3Forms(
  raw: ContactFormPayload,
  source: string
): Promise<ContactEmailResult> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim()
  if (!accessKey) {
    return { ok: false, message: 'Web3Forms not configured.', code: 'SKIP' }
  }

  const data = normalizeContactPayload(raw)
  const { subject } = formatPlainTextBody(raw, source)

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: 'Doorear Website',
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      source,
      utm_source: data.utm.source,
      utm_medium: data.utm.medium,
      utm_campaign: data.utm.campaign,
      referrer: data.utm.referrer,
      landing_page: data.utm.landingPage,
    }),
    cache: 'no-store',
  })

  const result = (await response.json().catch(() => ({}))) as {
    success?: boolean
    message?: string
  }

  if (response.ok && result.success) return { ok: true }

  return {
    ok: false,
    code: 'WEB3FORMS_ERROR',
    message:
      result.message ??
      'Web3Forms could not deliver your message. Try again shortly.',
    status: 502,
  }
}

function isFormSubmitSuccess(result: unknown): boolean {
  if (!result || typeof result !== 'object') return false
  const success = (result as { success?: unknown }).success
  return success === true || success === 'true'
}

function formSubmitActivationMessage(message: string): boolean {
  return /activation|activate form/i.test(message)
}

async function sendViaFormSubmit(
  raw: ContactFormPayload,
  source: string,
  siteUrl: string
): Promise<ContactEmailResult> {
  const inbox = getFormSubmitInbox()
  const notify = getContactFormRecipient()
  const body = buildFormSubmitBody(raw, { source })

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(inbox)}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: siteUrl,
        Referer: `${siteUrl}/contact`,
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    }
  )

  const result: unknown = await response.json().catch(() => ({}))
  if (response.ok && isFormSubmitSuccess(result)) return { ok: true }

  const message =
    typeof result === 'object' &&
    result &&
    'message' in result &&
    typeof (result as { message: string }).message === 'string'
      ? (result as { message: string }).message
      : 'Could not send your message. Please try again or email us directly.'

  if (formSubmitActivationMessage(message)) {
    return {
      ok: false,
      code: 'FORMSUBMIT_ACTIVATION_REQUIRED',
      message: `Form delivery is not active yet. Open ${inbox} and click the "Activate Form" link from FormSubmit (check spam). Leads are CC'd to ${notify} once active.`,
      status: 503,
    }
  }

  return {
    ok: false,
    code: 'FORMSUBMIT_ERROR',
    message,
    status: 502,
  }
}

/** FormSubmit.co (Option A); optional SMTP / Web3Forms when env vars are set. */
export async function sendContactEmail(
  raw: ContactFormPayload,
  options: { source: string; siteUrl: string }
): Promise<ContactEmailResult> {
  const formSubmit = await sendViaFormSubmit(raw, options.source, options.siteUrl)
  if (formSubmit.ok) return formSubmit

  if (smtpConfigured()) {
    const smtp = await sendViaSmtp(raw, options.source)
    if (smtp.ok) return smtp
  }

  if (process.env.WEB3FORMS_ACCESS_KEY?.trim()) {
    const web3 = await sendViaWeb3Forms(raw, options.source)
    if (web3.ok) return web3
  }

  return formSubmit
}
