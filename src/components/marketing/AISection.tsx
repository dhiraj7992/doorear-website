'use client'

import { Bot, BrainCircuit, CircleAlert, Radar, Route, Sparkles } from 'lucide-react'
import { LinkButton } from '@/components/ui'
import { IconBadge, ScrollReveal } from './primitives'
import SectionHeading from './SectionHeading'
import { APP_SIGNUP_URL } from '@/components/marketing/site-config'

const aiCards = [
  {
    icon: Bot,
    title: 'Exception copilot for ops teams',
    body: 'Triage “why is this stuck?” faster with an AI-ready workspace: structured shipment stages, hub handoffs, and role-scoped visibility—so exceptions have context, not guesswork.',
    bullets: ['Stage-aware context for every shipment', 'Fast owner handoffs across branches', 'Cleaner audit trail for root-cause review'],
  },
  {
    icon: Radar,
    title: 'SLA risk signals (built on your MIS)',
    body: 'Surface what matters in standups: lane delays, OFD drift, and branch throughput patterns—so supervisors act on risk signals before they become escalations.',
    bullets: ['Focus on top blockers, not full exports', 'Same metrics across ops & leadership', 'Operational rhythm without spreadsheet churn'],
  },
  {
    icon: BrainCircuit,
    title: 'AI-ready data foundation',
    body: 'Doorear keeps bookings, manifests, inward legs, and delivery runs in a consistent system of record. That structure is what makes AI outputs dependable in operations.',
    bullets: ['Structured bookings + coverage validation', 'Consistent network execution artifacts', 'Permissioned access for mixed teams'],
  },
  {
    icon: Route,
    title: 'Smarter decisions, not noisy automation',
    body: 'We focus on assistive intelligence—suggestions and prioritization—so operators stay in control while the system reduces manual scanning for answers.',
    bullets: ['Human-in-the-loop by design', 'Clear “why” for recommended actions', 'Designed for real courier workflows'],
  },
]

export default function AISection() {
  return (
    <section
      className='aigocy-dark-band relative overflow-hidden border-y border-white/10 py-20 md:py-28'
      aria-label='AI-ready logistics operations'>
      <div
        className='pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#6493ea]/60 to-transparent'
        aria-hidden
      />
      <div
        className='aigocy-orb pointer-events-none absolute -left-20 top-1/4 h-72 w-72 bg-[var(--app-primary)]/25'
        aria-hidden
      />
      <div className='marketing-container relative z-10'>
        <SectionHeading
          aigocy
          eyebrow='AI-first operations foundation'
          title='AI that respects how courier ops actually run'
          description='“AI in logistics” only works when your data model matches reality. Doorear brings bookings, hub execution, and MIS into one disciplined workspace—then layers assistive intelligence on top.'
        />

        <div className='mt-14 grid gap-6 lg:grid-cols-2 lg:gap-7'>
          {aiCards.map((card, i) => {
            const Icon = card.icon
            return (
              <ScrollReveal key={card.title} delay={0.06 * i}>
                <article className='aigocy-dark-card group relative overflow-hidden rounded-2xl p-6 transition duration-300 lg:p-7'>
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
                          className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#6493ea]'
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

        <ScrollReveal className='mt-12 flex flex-wrap items-center justify-center gap-4' delay={0.08}>
          <LinkButton href={APP_SIGNUP_URL} variant='primary' size='sectionWide' className='group'>
            <Sparkles className='h-4 w-4' aria-hidden />
            Get Started
          </LinkButton>
          <LinkButton
            href='/contact'
            variant='secondary'
            size='sectionWide'
            secondaryTone='muted'
            className='border-white/20 bg-white/10 text-white hover:bg-white/15 hover:text-white'>
            <CircleAlert className='h-4 w-4' aria-hidden />
            Ask about AI roadmap
          </LinkButton>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className='aigocy-dark-card mx-auto mt-10 max-w-3xl rounded-2xl p-5 md:p-6'>
            <p className='flex flex-wrap items-center justify-center gap-x-3 gap-y-2'>
              <span className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white'>
                <Bot className='h-4 w-4 text-[#6493ea]' aria-hidden />
                AI-ready by design
              </span>
              <span className='text-xs leading-relaxed text-white/70'>
                No black-box claims: the “AI layer” is only as good as the data model underneath. Doorear starts
                with operator-grade structure.
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
