'use client'

import { Clock, Mail, MessageSquare } from 'lucide-react'
import MarketingContactForm from '@/components/marketing/MarketingContactForm'
import { IconBadge, PremiumCard, ScrollReveal, SectionShell } from '@/components/marketing/primitives'

const bullets = [
  {
    icon: Mail,
    title: 'What to include',
    text: 'Branch count, average daily shipments, current tools, and whether you need procurement or deep finance modules in phase one.',
  },
  {
    icon: Clock,
    title: 'Response time',
    text: 'We prioritize operational detail: timelines for pilot hubs, training expectations, and how your finance team handles subscription approvals.',
  },
  {
    icon: MessageSquare,
    title: 'Conversation style',
    text: 'No scripted fluff—we walk real workflows (booking → hub → delivery → MIS) and align expectations on integrations that are actually live.',
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
              Send a message
            </h2>
            <p className='mt-2 text-center text-sm text-[var(--app-muted)]'>
              All fields help us route you to the right specialist.
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
