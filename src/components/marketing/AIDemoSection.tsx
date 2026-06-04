'use client'

import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { AlertTriangle, Bot, CheckCircle2, Radar, Route, Sparkles } from 'lucide-react'
import { LinkButton } from '@/components/ui'
import SectionHeading from './SectionHeading'
import { PremiumCard, ScrollReveal, SectionShell } from './primitives'
import { APP_SIGNUP_URL } from './site-config'

type DemoStep = {
  key: string
  title: string
  subtitle: string
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  bullets: string[]
  panel: {
    heading: string
    lines: Array<{ k: string; v: string; tone?: 'ok' | 'warn' | 'muted' }>
  }
}

const baseSteps: DemoStep[] = [
  {
    key: 'risk',
    title: 'Spot SLA risk early',
    subtitle: 'Before it becomes escalation',
    icon: Radar,
    bullets: [
      'Flags lanes drifting from SLA',
      'Highlights branches with recurring delays',
      'Keeps standups focused on top blockers',
    ],
    panel: {
      heading: 'AI risk signals',
      lines: [
        { k: 'Lane', v: 'DEL → BOM', tone: 'warn' },
        { k: 'Risk', v: 'High (OFD drift)', tone: 'warn' },
        { k: 'Likely cause', v: 'Hub inward lag at BOM', tone: 'muted' },
        { k: 'Suggested action', v: 'Prioritize inward + replan delivery run', tone: 'ok' },
      ],
    },
  },
  {
    key: 'exceptions',
    title: 'Triage exceptions faster',
    subtitle: 'Context, owner, next best action',
    icon: Bot,
    bullets: [
      'Summarizes what changed across stages',
      'Shows the most likely owner team',
      'Suggests a clean resolution path',
    ],
    panel: {
      heading: 'Exception copilot',
      lines: [
        { k: 'Shipment', v: 'AWB-DOO-12872', tone: 'muted' },
        { k: 'Status', v: 'Inward pending at hub', tone: 'warn' },
        { k: 'Owner', v: 'BOM Hub Supervisor', tone: 'ok' },
        { k: 'Next action', v: 'Scan inward + attach manifest note', tone: 'ok' },
      ],
    },
  },
  {
    key: 'clarity',
    title: 'Keep operations explainable',
    subtitle: 'AI you can trust in ops',
    icon: Sparkles,
    bullets: [
      'Structured booking + serviceable PIN validation',
      'Stage-aware network artifacts (bags, manifests, runs)',
      'Role-scoped visibility for mixed teams',
    ],
    panel: {
      heading: 'Why AI works here',
      lines: [
        { k: 'Foundation', v: 'One system of record', tone: 'ok' },
        { k: 'Evidence', v: 'Stage events + audit trail', tone: 'ok' },
        { k: 'Control', v: 'Human-in-the-loop', tone: 'muted' },
        { k: 'Outcome', v: 'Faster decisions, less noise', tone: 'ok' },
      ],
    },
  },
]

function toneClass(tone?: 'ok' | 'warn' | 'muted') {
  switch (tone) {
    case 'ok':
      return 'text-emerald-700'
    case 'warn':
      return 'text-amber-700'
    default:
      return 'text-[var(--app-muted)]'
  }
}

export default function AIDemoSection() {
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(baseSteps[0].key)

  const steps = useMemo(() => baseSteps, [])
  const activeStep = steps.find((s) => s.key === active) ?? steps[0]

  return (
    <SectionShell spacing='loose' aria-label='AI mini demo'>
      <div className='marketing-container'>
        <SectionHeading
          aigocy
          eyebrow='AI in 30 seconds'
          title='What “AI-assisted operations” looks like in practice'
          description='No hype—just a workflow that helps supervisors and dispatchers prioritize the right actions faster.'
        />

        <div className='mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-10'>
          <div className='space-y-3'>
            {steps.map((s, i) => {
              const Icon = s.icon
              const isActive = s.key === active
              return (
                <ScrollReveal key={s.key} delay={0.05 * i}>
                  <motion.button
                    type='button'
                    onClick={() => setActive(s.key)}
                    whileHover={reduceMotion ? undefined : { y: -2, transition: { duration: 0.15 } }}
                  className={`w-full rounded-2xl border bg-[var(--app-card)] p-5 text-left shadow-md ring-1 ring-black/[0.03] transition duration-300 ${
                    isActive
                      ? 'border-[var(--app-primary)]/40 shadow-xl shadow-[var(--app-primary)]/15 ring-[var(--app-primary)]/20'
                      : 'border-[var(--app-border)] hover:-translate-y-0.5 hover:border-[var(--app-primary)]/30 hover:shadow-lg'
                  }`}
                  >
                    <div className='flex items-start gap-3'>
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 transition ${
                          isActive
                            ? 'bg-[var(--app-primary)]/14 text-[var(--app-primary)] ring-[var(--app-primary)]/15'
                            : 'bg-[var(--app-primary)]/10 text-[var(--app-primary)] ring-[var(--app-primary)]/10'
                        }`}
                      >
                        <Icon className='h-5 w-5' aria-hidden />
                      </span>
                      <div className='min-w-0'>
                        <p className='text-sm font-semibold text-[var(--app-foreground)]'>{s.title}</p>
                        <p className='mt-1 text-xs text-[var(--app-muted)]'>{s.subtitle}</p>
                        <ul className='mt-4 space-y-2 text-xs text-[var(--app-foreground)]/85'>
                          {s.bullets.map((b) => (
                            <li key={b} className='flex gap-2'>
                              <span
                                className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--app-primary)]'
                                aria-hidden
                              />
                              <span className='leading-relaxed'>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.button>
                </ScrollReveal>
              )
            })}
          </div>

          <PremiumCard as='div' glass hoverLift={false} className='p-6 lg:p-8'>
            <motion.div
              key={activeStep.key}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div
                className='pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[var(--app-primary)]/10 blur-3xl'
                aria-hidden
              />
              <div
                className='pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl'
                aria-hidden
              />

              <div className='relative flex items-center justify-between gap-3'>
                <p className='text-xs font-semibold uppercase tracking-[0.14em] text-[var(--app-muted)]'>
                  Live-style preview
                </p>
                <div className='flex items-center gap-2 text-[10px] font-semibold text-[var(--app-muted)]'>
                  <Route className='h-3.5 w-3.5 text-[var(--app-primary)]' aria-hidden />
                  stage-aware
                </div>
              </div>

              <div className='premium-glass-panel relative mt-5 rounded-2xl border border-[var(--app-border)] p-5 md:p-6'>
                <div className='flex items-start justify-between gap-3'>
                  <div>
                    <p className='text-sm font-bold text-[var(--app-foreground)]'>{activeStep.panel.heading}</p>
                    <p className='mt-1 text-xs text-[var(--app-muted)]'>
                      Assistive intelligence, grounded in shipment stages and MIS.
                    </p>
                  </div>
                  <span className='inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-white/80 px-3 py-1 text-[10px] font-semibold text-[var(--app-muted)]'>
                    <AlertTriangle className='h-3.5 w-3.5 text-amber-600' aria-hidden />
                    signal
                  </span>
                </div>

                <dl className='mt-5 grid gap-3 sm:grid-cols-2'>
                  {activeStep.panel.lines.map((line) => (
                    <div
                      key={line.k}
                      className='rounded-xl border border-[var(--app-border)] bg-white/90 px-4 py-3 shadow-sm transition hover:border-[var(--app-primary)]/20'
                    >
                      <dt className='text-[10px] font-bold uppercase tracking-wider text-[var(--app-muted)]'>
                        {line.k}
                      </dt>
                      <dd className={`mt-1 text-sm font-semibold ${toneClass(line.tone)}`}>{line.v}</dd>
                    </div>
                  ))}
                </dl>

                <div className='mt-5 flex flex-wrap items-center gap-3'>
                  <span className='inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800'>
                    <CheckCircle2 className='h-4 w-4' aria-hidden />
                    Recommended actions stay explainable
                  </span>
                  <span className='inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700'>
                    <Bot className='h-4 w-4 text-[var(--app-primary)]' aria-hidden />
                    Human-in-the-loop by design
                  </span>
                </div>
              </div>

              <div className='relative mt-6 flex flex-wrap items-center gap-4'>
                <LinkButton href={APP_SIGNUP_URL} variant='primary' size='sectionWide' className='group'>
                  Get Started
                </LinkButton>
                <LinkButton href='/contact' variant='secondary' size='sectionWide' secondaryTone='surface'>
                  Talk to us
                </LinkButton>
              </div>
            </motion.div>
          </PremiumCard>
        </div>
      </div>
    </SectionShell>
  )
}
