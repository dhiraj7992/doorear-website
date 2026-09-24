'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Building2,
  Gauge,
  Landmark,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { SectionShell } from '@/components/marketing/primitives'

const items = [
  {
    icon: Gauge,
    k: 'CEP momentum',
    v: 'Scale lanes and SLAs as e‑commerce and B2B freight digitize—branch-aware software, not ad hoc trackers.',
  },
  {
    icon: MapPin,
    k: 'PIN discipline',
    v: 'Validate serviceable locations before you commit capacity—fewer rescans and margin leaks on bad routes.',
  },
  {
    icon: ShieldCheck,
    k: 'Tenant-safe',
    v: 'Isolation and roles tuned for who books vs who sees billing—built for mixed hub teams.',
  },
  {
    icon: Sparkles,
    k: 'Usage clarity',
    v: 'Shipment allowances and seat limits with top-ups—see Pricing for numbers from the product.',
  },
  {
    icon: Building2,
    k: 'Multi-branch native',
    v: 'Branches, coverage, and profiles stay in sync—less reconciliation across locations.',
  },
  {
    icon: Landmark,
    k: 'GST-aware',
    v: 'Company and billing contexts aligned to compliance workflows your finance team expects.',
  },
] as const

export default function HomeOperatorStats() {
  const reduceMotion = useReducedMotion()

  return (
    <SectionShell tone='surface' bordered spacing='compact' className='py-10 md:py-12'>
      <div className='marketing-container'>
        <p className='aigocy-section-eyebrow mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--app-muted)]'>
          Built for Indian courier &amp; 3PL operators
        </p>
        <dl className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
          {items.map((item, i) => {
            const StatIcon = item.icon
            return (
              <motion.div
                key={item.k}
                custom={i}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, margin: '-40px' }}
                variants={{
                  hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: reduceMotion ? 0 : 0.04 * i,
                      duration: 0.45,
                    },
                  },
                }}>
                <div className='aigocy-stat-card group flex min-h-full flex-col p-5 lg:p-6'>
                  <dt className='flex items-start gap-3'>
                    <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--app-primary)]/20 to-[var(--app-primary)]/5 text-[var(--app-primary)] ring-1 ring-[var(--app-primary)]/15'>
                      <StatIcon className='h-5 w-5' aria-hidden />
                    </span>
                    <span className='pt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--app-foreground)]'>
                      {item.k}
                    </span>
                  </dt>
                  <dd className='mt-3 text-sm leading-relaxed text-[var(--app-muted)]'>
                    {item.v}
                  </dd>
                </div>
              </motion.div>
            )
          })}
        </dl>
      </div>
    </SectionShell>
  )
}
