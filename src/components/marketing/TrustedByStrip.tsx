'use client'

import { motion, useReducedMotion } from 'framer-motion'

type LogoWordmark = {
  label: string
  tone?: 'muted' | 'primary' | 'amber'
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
    <span className='inline-flex items-center whitespace-nowrap rounded-full border border-[var(--app-border)] bg-white/70 px-4 py-2 text-[11px] font-semibold tracking-wide text-[var(--app-foreground)]/80 shadow-sm backdrop-blur-sm'>
      {label}
    </span>
  )
}

export default function TrustedByStrip() {
  const reduceMotion = useReducedMotion()
  const row = [...logos, ...logos]

  return (
    <section
      aria-label='Social proof'
      className='border-b border-[var(--app-border)] bg-[var(--app-surface)] py-10 md:py-12'
    >
      <div className='marketing-container'>
        <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
          <div className='max-w-xl'>
            <p className='text-[10px] font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
              Trusted by operator teams
            </p>
            <p className='mt-2 text-base leading-relaxed text-[var(--app-muted)]'>
              Built for the people who keep shipments moving—across booking desks, hubs, last-mile runs, and
              finance.
            </p>
          </div>
          <div className='flex items-center gap-3'>
            <span className='h-2 w-2 rounded-full bg-emerald-500/80' aria-hidden />
            <span className='text-xs font-semibold text-[var(--app-foreground)]/80'>
              Designed for Indian courier &amp; 3PL workflows
            </span>
          </div>
        </div>

        <div className='relative mt-8 overflow-hidden rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] px-4 py-5 shadow-sm'>
          <div
            className='pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--app-card)] to-transparent'
            aria-hidden
          />
          <div
            className='pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--app-card)] to-transparent'
            aria-hidden
          />

          {reduceMotion ? (
            <div className='flex flex-wrap gap-3'>
              {logos.map((l) => (
                <LogoPill key={l.label} label={l.label} />
              ))}
            </div>
          ) : (
            <motion.div
              className='doorear-marquee flex w-max gap-3'
              initial={{ x: 0 }}
              animate={{ x: '-50%' }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            >
              {row.map((l, i) => (
                <LogoPill key={`${l.label}-${i}`} label={l.label} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

