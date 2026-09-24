'use client'

import { Bot, BrainCircuit, CircleAlert, Radar, Sparkles } from 'lucide-react'
import { LinkButton } from '@/components/ui'
import { IconBadge, ScrollReveal } from './primitives'
import SectionHeading from './SectionHeading'
import { APP_SIGNUP_URL } from '@/components/marketing/site-config'

const aiCards = [
  {
    icon: Bot,
    title: 'Exception copilot for ops teams',
    body: 'Triage “why is this stuck?” faster with structured shipment stages, hub handoffs, and role-scoped visibility—so exceptions have context, not guesswork.',
    bullets: [
      'Stage-aware context for every shipment',
      'Fast owner handoffs across branches',
      'Cleaner audit trail for root-cause review',
    ],
  },
  {
    icon: Radar,
    title: 'SLA risk signals on your MIS',
    body: 'Surface lane delays, OFD drift, and branch throughput patterns so supervisors act before escalations—not after the spreadsheet export.',
    bullets: [
      'Focus on top blockers, not full exports',
      'Same metrics across ops & leadership',
      'Assistive intelligence, human-in-the-loop',
    ],
  },
]

export default function AISection() {
  return (
    <section
      className='doorear-dark-band aigocy-dark-band relative overflow-hidden border-y border-white/10 py-16 md:py-22'
      aria-label='AI-ready logistics operations'>
      <div
        className='pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--app-primary)]/60 to-transparent'
        aria-hidden
      />
      <div
        className='doorear-orb aigocy-orb pointer-events-none absolute -left-20 top-1/4 h-72 w-72 bg-[var(--app-primary)]/25'
        aria-hidden
      />
      <div
        className='doorear-orb aigocy-orb pointer-events-none absolute -right-16 bottom-10 h-56 w-56 bg-[var(--app-accent)]/20'
        aria-hidden
        style={{ animationDelay: '-4s' }}
      />
      <div className='marketing-container relative z-10'>
        <SectionHeading
          aigocy
          eyebrow='Assistive dispatcher intelligence'
          title='AI that respects how courier ops actually run'
          description='Assistive intelligence for exceptions and SLA risk—grounded in bookings, hub execution, and MIS. Not a sci-fi chatbot bolted onto spreadsheets.'
        />

        <div className='mt-12 grid gap-6 lg:grid-cols-2 lg:gap-7'>
          {aiCards.map((card, i) => {
            const Icon = card.icon
            return (
              <ScrollReveal key={card.title} delay={0.06 * i}>
                <article className='doorear-dark-card aigocy-dark-card group relative overflow-hidden rounded-2xl p-6 transition duration-300 lg:p-7'>
                  <div
                    aria-hidden
                    className='pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full bg-[var(--app-primary)]/20 blur-3xl'
                  />
                  <div className='flex items-start gap-3'>
                    <IconBadge icon={Icon} size='lg' className='bg-white/10 ring-white/15' />
                    <div>
                      <h3 className='text-lg font-semibold text-white'>{card.title}</h3>
                      <p className='mt-2 text-sm leading-relaxed text-white/70'>{card.body}</p>
                    </div>
                  </div>
                  <ul className='mt-5 space-y-2 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/85'>
                    {card.bullets.map((b) => (
                      <li key={b} className='flex gap-2'>
                        <span
                          className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--app-primary)]'
                          aria-hidden
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal className='mt-10 flex flex-wrap items-center justify-center gap-4' delay={0.08}>
          <LinkButton href='/contact' variant='primary' size='sectionWide' className='group'>
            <CircleAlert className='h-4 w-4' aria-hidden />
            Book an AI ops walkthrough
          </LinkButton>
          <LinkButton
            href={APP_SIGNUP_URL}
            variant='secondary'
            size='sectionWide'
            secondaryTone='muted'
            className='border-white/20 bg-white/10 text-white hover:bg-white/15 hover:text-white'>
            <Sparkles className='h-4 w-4' aria-hidden />
            Get Started
          </LinkButton>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className='doorear-dark-card aigocy-dark-card mx-auto mt-8 max-w-3xl rounded-2xl p-5 md:p-6'>
            <p className='flex flex-wrap items-center justify-center gap-x-3 gap-y-2'>
              <span className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white'>
                <BrainCircuit className='h-4 w-4 text-teal-300' aria-hidden />
                AI-ready by design
              </span>
              <span className='text-xs leading-relaxed text-white/70'>
                The AI layer is only as good as the data model underneath. Doorear starts with
                operator-grade structure.
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
