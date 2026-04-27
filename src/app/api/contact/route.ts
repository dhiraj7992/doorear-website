import { NextRequest, NextResponse } from 'next/server'
import { getSiteUrl } from '@/components/marketing/site-config'

const DEFAULT_RECIPIENT = 'doorear.info@gmail.com'

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    try {
      const text = await req.text()
      body = JSON.parse(text)
    } catch {
      return NextResponse.json(
        { success: false, message: 'Invalid request payload.' },
        { status: 400 }
      )
    }
  }

  try {
    const recipient = process.env.CONTACT_FORM_RECIPIENT ?? DEFAULT_RECIPIENT
    const siteUrl = getSiteUrl()
    const userAgent =
      req.headers.get('user-agent') ??
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36'
    const acceptLanguage = req.headers.get('accept-language') ?? 'en-US,en;q=0.9'

    const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        origin: siteUrl,
        referer: `${siteUrl}/contact`,
        'user-agent': userAgent,
        'accept-language': acceptLanguage,
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
