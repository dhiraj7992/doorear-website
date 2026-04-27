import { NextRequest, NextResponse } from 'next/server'
import { getSiteUrl } from '@/components/marketing/site-config'

const DEFAULT_RECIPIENT = 'doorear.info@gmail.com'

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request payload.' },
      { status: 400 }
    )
  }

  try {
    const recipient = process.env.CONTACT_FORM_RECIPIENT ?? DEFAULT_RECIPIENT
    const siteUrl = getSiteUrl()

    const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        origin: siteUrl,
        referer: `${siteUrl}/contact`,
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    })

    const result = await response.json().catch(() => ({}))
    if (!response.ok || result.success === 'false' || result.success === false) {
      return NextResponse.json(
        {
          success: false,
          message:
            result.message ??
            'Contact form submission failed. Please try again in a moment.',
        },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Submission received.',
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
