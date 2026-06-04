import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import ThankYouTracker from '@/components/marketing/ThankYouTracker'
import { LinkButton } from '@/components/ui'
import { ScrollReveal, SectionShell } from '@/components/marketing/primitives'
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
    <SectionShell tone='surface' bordered spacing='loose'>
      <ThankYouTracker />
      <div className='marketing-container max-w-2xl'>
        <ScrollReveal>
          <div className='premium-glass-panel rounded-3xl border border-[var(--app-border)] p-8 text-center shadow-lg shadow-slate-900/5 md:p-12'>
            <CheckCircle2
              className='mx-auto h-14 w-14 text-[var(--chart-emerald)]'
              aria-hidden
            />
            <h1 className='mt-6 text-3xl font-bold tracking-tight text-[var(--app-foreground)] md:text-4xl'>
              Thank you. We received your message.
            </h1>
            <p className='mt-4 text-base leading-relaxed text-[var(--app-muted)]'>
              A {SITE_NAME} specialist will contact you shortly with rollout-focused
              next steps for your network.
            </p>
            <div className='mt-10 flex flex-wrap items-center justify-center gap-4'>
              <LinkButton href='/pricing' variant='primary' size='section'>
                Review pricing
              </LinkButton>
              <Link
                href='/features'
                className='rounded-xl border border-[var(--app-border)] bg-white/80 px-5 py-3 text-sm font-semibold text-[var(--app-foreground)] transition hover:border-[var(--app-primary)]/30 hover:bg-[var(--app-surface)]'>
                Explore features
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionShell>
  )
}
