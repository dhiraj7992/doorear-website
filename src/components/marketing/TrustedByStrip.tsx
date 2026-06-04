'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ScrollReveal, SectionShell } from './primitives'

type LogoWordmark = {
  label: string
}

const logos: LogoWordmark[] = [
  { label: 'Courier Ops' },
  { label: '3PL Network' },
  { label: 'Dispatch Desk' },
  { label: 'Hub Supervisor' },
  { label: 'Branch Admin' },
  { label: 'Finance Controller' },
  { label: 'Customer Service' },
  { label: 'Linehaul Team' },
  { label: 'Delivery Runs' },
  { label: 'MIS & Analytics' },
]

function LogoPill({ label }: { label: string }) {
  return (
    <span className='inline-flex items-center whitespace-nowrap rounded-full border border-[var(--app-border)] bg-white/80 px-4 py-2 text-[11px] font-semibold tracking-wide text-[var(--app-foreground)]/80 shadow-sm backdrop-blur-sm transition duration-300 hover:border-[var(--app-primary)]/25 hover:shadow-md'>
      {label}
    </span>
  )
}

export default function TrustedByStrip() {
  const reduceMotion = useReducedMotion()
  const row = [...logos, ...logos]

  return (
    <SectionShell
      tone='surface'
      bordered
      spacing='compact'
      aria-label='Social proof'>
      <div className='marketing-container'>
        <ScrollReveal>
          <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
            <div className='max-w-xl'>
              <p className='text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--app-muted)]'>
                Trusted by operator teams
              </p>
              <p className='mt-2 text-base leading-relaxed text-[var(--app-muted)] md:text-lg'>
                Built for the people who keep shipments moving—across booking desks, hubs, last-mile runs, and
                finance.
              </p>
            </div>
            <div className='flex items-center gap-3 rounded-full border border-[var(--app-border)] bg-[var(--app-card)]/80 px-4 py-2 shadow-sm backdrop-blur-sm'>
              <span className='h-2 w-2 rounded-full bg-emerald-500/80' aria-hidden />
              <span className='text-xs font-semibold text-[var(--app-foreground)]/80'>
                Designed for Indian courier &amp; 3PL workflows
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className='premium-glass-panel relative mt-8 overflow-hidden rounded-2xl border border-[var(--app-border)] px-4 py-6 shadow-sm md:py-7'>
          <div
            className='pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[var(--app-card)] to-transparent'
            aria-hidden
          />
          <div
            className='pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[var(--app-card)] to-transparent'
            aria-hidden
          />

          {reduceMotion ? (
            <div className='flex flex-wrap justify-center gap-3'>
              {logos.map((l) => (
                <LogoPill key={l.label} label={l.label} />
              ))}
            </div>
          ) : (
            <motion.div
              className='doorear-marquee flex w-max gap-3'
              initial={{ x: 0 }}
              animate={{ x: '-50%' }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            >
              {row.map((l, i) => (
                <LogoPill key={`${l.label}-${i}`} label={l.label} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </SectionShell>
  )
}
