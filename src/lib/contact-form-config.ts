/** Inbox that should receive lead emails (CC when using FormSubmit relay). */
export const DEFAULT_CONTACT_FORM_RECIPIENT = 'yy.dhiraj@gmail.com'

/**
 * FormSubmit.co endpoint — must be an activated inbox.
 * doorear.info@gmail.com is activated; yy.dhiraj@gmail.com needs one-time activation.
 */
export const DEFAULT_FORM_SUBMIT_INBOX = 'doorear.info@gmail.com'

/** FormSubmit only accepts submissions tied to the activated apex origin. */
export const FORM_SUBMIT_ORIGIN = 'https://doorear.com'

export const FORM_SUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${encodeURIComponent(DEFAULT_FORM_SUBMIT_INBOX)}`

export function getContactFormRecipient(): string {
  const fromEnv = process.env.CONTACT_FORM_RECIPIENT?.trim()
  return fromEnv && fromEnv.includes('@') ? fromEnv : DEFAULT_CONTACT_FORM_RECIPIENT
}

export function getFormSubmitInbox(): string {
  const fromEnv = process.env.CONTACT_FORM_FORMSUBMIT_INBOX?.trim()
  const inbox =
    fromEnv && fromEnv.includes('@') ? fromEnv : DEFAULT_FORM_SUBMIT_INBOX
  // Not activated on FormSubmit — always relay through the activated inbox.
  if (inbox.toLowerCase() === DEFAULT_CONTACT_FORM_RECIPIENT.toLowerCase()) {
    return DEFAULT_FORM_SUBMIT_INBOX
  }
  return inbox
}

export function getFormSubmitOrigin(): string {
  return FORM_SUBMIT_ORIGIN
}

export function isFormSubmitOk(data: unknown): boolean {
  if (!data || typeof data !== 'object') return false
  const success = (data as { success?: unknown }).success
  return success === true || success === 'true'
}

export type ContactFormPayload = {
  firstname?: string
  lastname?: string
  Name?: string
  LastName?: string
  email?: string
  Email?: string
  phnumber?: string
  PhoneNo?: string
  Message?: string
  message?: string
  source?: string
  UTMSource?: string
  UTMMedium?: string
  UTMCampaign?: string
  UTMTerm?: string
  UTMContent?: string
  Referrer?: string
  LandingPage?: string
}

export function normalizeContactPayload(raw: ContactFormPayload) {
  const firstName = (raw.firstname ?? raw.Name ?? '').trim()
  const lastName = (raw.lastname ?? raw.LastName ?? '').trim()
  const email = (raw.email ?? raw.Email ?? '').trim()
  const phone = (raw.phnumber ?? raw.PhoneNo ?? '').trim()
  const message = (raw.Message ?? raw.message ?? '').trim()

  return {
    firstName,
    lastName,
    fullName: [firstName, lastName].filter(Boolean).join(' '),
    email,
    phone,
    message,
    utm: {
      source: raw.UTMSource?.trim() ?? '',
      medium: raw.UTMMedium?.trim() ?? '',
      campaign: raw.UTMCampaign?.trim() ?? '',
      term: raw.UTMTerm?.trim() ?? '',
      content: raw.UTMContent?.trim() ?? '',
      referrer: raw.Referrer?.trim() ?? '',
      landingPage: raw.LandingPage?.trim() ?? '',
    },
  }
}

export function buildFormSubmitBody(
  raw: ContactFormPayload,
  options?: { source?: string }
) {
  const data = normalizeContactPayload(raw)
  const source = options?.source ?? 'doorear.com contact form'
  const inbox = getFormSubmitInbox()
  const notify = getContactFormRecipient()
  const cc =
    notify.toLowerCase() !== inbox.toLowerCase() ? notify : undefined

  return {
    _subject: `Doorear lead: ${data.fullName || data.email || 'New inquiry'}`,
    _template: 'table',
    _captcha: 'false',
    ...(cc ? { _cc: cc } : {}),
    ...(data.email ? { _replyto: data.email } : {}),
    Name: data.firstName,
    'Last name': data.lastName,
    Email: data.email,
    Phone: data.phone,
    Message: data.message,
    Source: source,
    'UTM Source': data.utm.source || '—',
    'UTM Medium': data.utm.medium || '—',
    'UTM Campaign': data.utm.campaign || '—',
    'UTM Term': data.utm.term || '—',
    'UTM Content': data.utm.content || '—',
    Referrer: data.utm.referrer || '—',
    'Landing page': data.utm.landingPage || '—',
  }
}
