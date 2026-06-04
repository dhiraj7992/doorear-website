import { NextRequest, NextResponse } from 'next/server'
import type { ContactFormPayload } from '@/lib/contact-form-config'
import {
  isValidContactEmail,
  sendContactEmail,
} from '@/lib/send-contact-email'
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

  const email = (raw.email ?? raw.Email ?? '').trim()
  const message = (raw.Message ?? raw.message ?? '').trim()

  if (!isValidContactEmail(email)) {
    return NextResponse.json(
      {
        success: false,
        message: 'Enter a valid email address (e.g. name@company.com).',
      },
      { status: 400 }
    )
  }

  if (!message) {
    return NextResponse.json(
      { success: false, message: 'Please include a message.' },
      { status: 400 }
    )
  }

  const formSource =
    typeof raw.source === 'string' && raw.source.trim()
      ? raw.source.trim()
      : 'doorear.com contact form'

  try {
    const result = await sendContactEmail(raw, { source: formSource })

    if (!result.ok) {
      return NextResponse.json(
        {
          success: false,
          message: result.message,
          code: result.code,
        },
        { status: result.status ?? 502 }
      )
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
