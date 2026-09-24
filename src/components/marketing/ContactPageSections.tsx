'use client'

import { Clock, Mail, MessageSquare } from 'lucide-react'
import MarketingContactForm from '@/components/marketing/MarketingContactForm'
import { IconBadge, PremiumCard, ScrollReveal, SectionShell } from '@/components/marketing/primitives'

const bullets = [
  {
    icon: Mail,
    title: 'What enterprise buyers send',
    text: 'Branch / hub count, average daily shipments, franchise vs owned mix, current tools, and whether procurement or deep finance modules matter in phase one.',
  },
  {
    icon: Clock,
    title: 'How we run the demo',
    text: 'We prioritize operational detail: pilot hub set, training expectations, MIS standup rhythm, and how finance approves subscriptions (including offline billing where needed).',
  },
  {
    icon: MessageSquare,
    title: 'Honest conversation',
    text: 'No scripted fluff—we walk booking → hub → delivery → MIS on real workflows and only discuss integrations that are actually live for your deployment.',
  },
]

export default function ContactPageSections() {
  return (
    <SectionShell tone='surface' bordered spacing='default'>
      <div className='marketing-container'>
        <div className='grid gap-6 lg:grid-cols-3'>
          {bullets.map((b, i) => {
            const Icon = b.icon
            return (
              <PremiumCard key={b.title} glass reveal revealDelay={0.05 * i} className='p-7'>
                <IconBadge icon={Icon} />
                <h2 className='mt-5 text-sm font-semibold text-[var(--app-foreground)]'>
                  {b.title}
                </h2>
                <p className='mt-3 text-sm leading-relaxed text-[var(--app-muted)]'>
                  {b.text}
                </p>
              </PremiumCard>
            )
          })}
        </div>

        <ScrollReveal className='mx-auto mt-14 max-w-2xl' delay={0.08}>
          <div
            id='contact-form'
            className='premium-glass-panel scroll-mt-28 rounded-3xl border border-[var(--app-border)] p-8 shadow-lg shadow-slate-900/5 md:p-10'>
            <h2 className='text-center text-xl font-bold text-[var(--app-foreground)] md:text-2xl'>
              Request your network walkthrough
            </h2>
            <p className='mt-2 text-center text-sm text-[var(--app-muted)]'>
              Tell us about your corridors and hubs—we route you to the right specialist.
            </p>
            <div className='mt-8'>
              <MarketingContactForm />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionShell>
  )
}
