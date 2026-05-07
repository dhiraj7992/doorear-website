'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Bot, BrainCircuit, CircleAlert, Radar, Route, Sparkles } from 'lucide-react'
import { LinkButton } from '@/components/ui'
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
  const reduceMotion = useReducedMotion()

  return (
    <section
      className='relative overflow-hidden border-y border-[var(--app-border)] bg-[var(--app-surface)] py-16 md:py-20'
      aria-label='AI-ready logistics operations'
    >
      <div className='marketing-container relative z-10'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='text-[10px] font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
            AI-first operations foundation
          </p>
          <h2 className='mt-2 text-3xl font-bold tracking-tight text-[var(--app-foreground)] md:text-4xl'>
            AI that respects how courier ops actually run
          </h2>
          <p className='mt-4 text-base leading-relaxed text-[var(--app-muted)]'>
            “AI in logistics” only works when your data model matches reality. Doorear brings bookings, hub
            execution, and MIS into one disciplined workspace—then layers assistive intelligence on top.
          </p>
        </div>

        <div className='mt-12 grid gap-6 lg:grid-cols-2'>
          {aiCards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.article
                key={card.title}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: reduceMotion ? 0 : 0.06 * i, duration: 0.45 }}
                whileHover={reduceMotion ? undefined : { y: -3, transition: { duration: 0.18 } }}
                className='group relative overflow-hidden rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-6 shadow-sm ring-1 ring-black/[0.03] transition-[border-color,box-shadow] duration-300 hover:border-[var(--app-primary)]/25 hover:shadow-lg hover:shadow-[var(--app-primary)]/10'
              >
                <div
                  aria-hidden
                  className='pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full bg-[var(--app-primary)]/10 blur-3xl transition-opacity duration-300 group-hover:opacity-80'
                />
                <div className='flex items-start gap-3'>
                  <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--app-primary)]/18 to-transparent text-[var(--app-primary)] ring-1 ring-[var(--app-primary)]/12'>
                    <Icon className='h-5 w-5' aria-hidden />
                  </span>
                  <div>
                    <h3 className='text-lg font-semibold text-[var(--app-foreground)]'>{card.title}</h3>
                    <p className='mt-2 text-sm leading-relaxed text-[var(--app-muted)]'>{card.body}</p>
                  </div>
                </div>
                <ul className='mt-5 space-y-2 border-t border-[var(--app-border)] pt-4 text-xs leading-relaxed text-[var(--app-foreground)]/90'>
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
              </motion.article>
            )
          })}
        </div>

        <div className='mt-12 flex flex-wrap items-center justify-center gap-4'>
          <LinkButton href={APP_SIGNUP_URL} variant='primary' size='sectionWide' className='group'>
            <Sparkles className='h-4 w-4' aria-hidden />
            Get Started
          </LinkButton>
          <LinkButton href='/contact' variant='secondary' size='sectionWide' secondaryTone='surface'>
            <CircleAlert className='h-4 w-4' aria-hidden />
            Ask about AI roadmap
          </LinkButton>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className='mx-auto mt-10 max-w-3xl rounded-2xl border border-[var(--app-border)] bg-gradient-to-r from-[var(--app-card)] via-[var(--app-card)] to-[var(--app-primary)]/5 p-5 text-sm text-[var(--app-muted)]'
        >
          <p className='flex flex-wrap items-center justify-center gap-x-3 gap-y-2'>
            <span className='inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-white/70 px-3 py-1 text-xs font-semibold text-[var(--app-foreground)]'>
              <Bot className='h-4 w-4 text-[var(--app-primary)]' aria-hidden />
              AI-ready by design
            </span>
            <span className='text-xs leading-relaxed'>
              No black-box claims: the “AI layer” is only as good as the data model underneath. Doorear starts
              with operator-grade structure.
            </span>
          </p>
        </motion.div>
      </div>

      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--app-primary)]/30 to-transparent' />
    </section>
  )
}

