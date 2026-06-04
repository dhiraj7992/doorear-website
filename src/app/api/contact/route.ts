import { NextRequest, NextResponse } from 'next/server'
import {
  buildFormSubmitBody,
  getContactFormRecipient,
  type ContactFormPayload,
} from '@/lib/contact-form-config'
import { getSiteUrl } from '@/components/marketing/site-config'

function isFormSubmitSuccess(result: unknown): boolean {
  if (!result || typeof result !== 'object') return false
  const success = (result as { success?: unknown }).success
  return success === true || success === 'true'
}

export async function POST(req: NextRequest) {
  let raw: ContactFormPayload
  try {
    raw = (await req.json()) as ContactFormPayload
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request payload.' },
      { status: 400 }
    )
  }

  const formSource =
    typeof raw.source === 'string' && raw.source.trim()
      ? raw.source.trim()
      : 'doorear.com contact form'

  const normalized = buildFormSubmitBody(raw, { source: formSource })

  if (!normalized.Email?.includes('@')) {
    return NextResponse.json(
      { success: false, message: 'A valid email address is required.' },
      { status: 400 }
    )
  }

  if (!normalized.Message?.trim()) {
    return NextResponse.json(
      { success: false, message: 'Please include a message.' },
      { status: 400 }
    )
  }

  try {
    const recipient = getContactFormRecipient()
    const siteUrl = getSiteUrl()
    const userAgent =
      req.headers.get('user-agent') ??
      'Mozilla/5.0 (compatible; DoorearContact/1.0)'

    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: siteUrl,
        Referer: `${siteUrl}/contact`,
        'User-Agent': userAgent,
      },
      body: JSON.stringify(normalized),
      cache: 'no-store',
    })

    const result: unknown = await response.json().catch(() => ({}))

    if (!response.ok || !isFormSubmitSuccess(result)) {
      const message =
        typeof result === 'object' &&
        result &&
        'message' in result &&
        typeof (result as { message: unknown }).message === 'string'
          ? (result as { message: string }).message
          : 'Could not send your message. Please try again or email us directly.'

      return NextResponse.json({ success: false, message }, { status: 502 })
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you — we received your message and will respond shortly.',
    })
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'Could not submit contact request. Please try again shortly.',
      },
      { status: 502 }
    )
  }
}
