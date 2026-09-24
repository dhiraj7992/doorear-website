'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ScrollReveal, SectionShell } from './primitives'

const roles = [
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

function RolePill({ label }: { label: string }) {
  return (
    <span className='inline-flex items-center whitespace-nowrap rounded-full border border-[var(--app-border)] bg-white/90 px-4 py-2.5 text-[11px] font-semibold tracking-wide text-[var(--app-foreground)]/85 shadow-sm backdrop-blur-sm transition duration-300 hover:border-[var(--app-primary)]/35 hover:shadow-md hover:shadow-teal-700/10'>
      {label}
    </span>
  )
}

export default function TrustedByStrip() {
  const reduceMotion = useReducedMotion()
  const row = [...roles, ...roles]

  return (
    <SectionShell
      tone='surface'
      bordered
      spacing='compact'
      aria-label='Social proof'>
      <div className='marketing-container'>
        <ScrollReveal>
          <div className='flex flex-col gap-5 md:flex-row md:items-end md:justify-between'>
            <div className='max-w-2xl'>
              <p className='doorear-section-eyebrow aigocy-section-eyebrow text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--app-muted)]'>
                Trusted by operator teams
              </p>
              <p className='mt-3 text-base leading-relaxed text-[var(--app-muted)] md:text-lg'>
                Built for booking desks, hubs, linehaul, last-mile, and MIS—used by
                operator teams running multi-branch courier &amp; 3PL networks.
              </p>
            </div>
            <div className='flex items-center gap-3 self-start rounded-full border border-[var(--app-primary)]/20 bg-[var(--app-primary)]/5 px-4 py-2 md:self-auto'>
              <span className='doorear-pulse-dot aigocy-pulse-dot h-2 w-2 rounded-full bg-[var(--app-primary)]' aria-hidden />
              <span className='text-xs font-semibold text-[var(--app-foreground)]/85'>
                Anonymous team roles—not tenant brands
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className='premium-glass-panel relative mt-8 overflow-hidden rounded-2xl border border-[var(--app-border)] px-4 py-6 shadow-sm md:py-7'>
          <div
            className='pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent'
            aria-hidden
          />
          <div
            className='pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent'
            aria-hidden
          />

          {reduceMotion ? (
            <div className='flex flex-wrap justify-center gap-3'>
              {roles.map((l) => (
                <RolePill key={l.label} label={l.label} />
              ))}
            </div>
          ) : (
            <motion.div
              className='doorear-marquee flex w-max gap-3'
              initial={{ x: 0 }}
              animate={{ x: '-50%' }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}>
              {row.map((l, i) => (
                <RolePill key={`${l.label}-${i}`} label={l.label} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </SectionShell>
  )
}
