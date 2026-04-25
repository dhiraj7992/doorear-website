import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import ThankYouTracker from '@/components/marketing/ThankYouTracker'
import { SITE_NAME } from '@/components/marketing/site-config'

export const metadata: Metadata = {
  title: 'Thank you',
  description:
    'Thank you for contacting Doorear. Our team will reach out with next steps for your courier and logistics rollout.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <section className='border-b border-[var(--app-border)] bg-[var(--app-surface)] py-20 md:py-24'>
      <ThankYouTracker />
      <div className='marketing-container max-w-2xl'>
        <div className='rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-8 text-center shadow-sm md:p-10'>
          <CheckCircle2
            className='mx-auto h-12 w-12 text-[var(--chart-emerald)]'
            aria-hidden
          />
          <h1 className='mt-5 text-3xl font-bold tracking-tight text-[var(--app-foreground)]'>
            Thank you. We received your message.
          </h1>
          <p className='mt-3 text-base leading-relaxed text-[var(--app-muted)]'>
            A {SITE_NAME} specialist will contact you shortly with rollout-focused
            next steps for your network.
          </p>
          <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
            <Link
              href='/pricing'
              className='rounded-lg bg-[var(--app-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95'>
              Review pricing
            </Link>
            <Link
              href='/features'
              className='rounded-lg border border-[var(--app-border)] px-4 py-2 text-sm font-semibold text-[var(--app-foreground)] transition hover:bg-[var(--app-surface)]'>
              Explore features
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
