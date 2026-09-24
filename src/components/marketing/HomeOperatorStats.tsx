'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Building2, MapPin, ShieldCheck, Landmark } from 'lucide-react'
import { SectionShell } from '@/components/marketing/primitives'

const items = [
  {
    icon: MapPin,
    k: 'PIN discipline',
    v: 'Validate serviceable locations before you commit capacity—fewer rescans and margin leaks.',
  },
  {
    icon: Building2,
    k: 'Multi-branch native',
    v: 'Branches, coverage, and profiles stay in sync across hubs and franchise points.',
  },
  {
    icon: ShieldCheck,
    k: 'Tenant-safe RBAC',
    v: 'Roles tuned for who books vs who sees billing—built for mixed hub teams.',
  },
  {
    icon: Landmark,
    k: 'GST-aware accounts',
    v: 'Company and billing contexts aligned to the compliance workflows finance expects.',
  },
] as const

export default function HomeOperatorStats() {
  const reduceMotion = useReducedMotion()

  return (
    <SectionShell tone='card' bordered spacing='compact' className='py-10 md:py-14'>
      <div className='marketing-container'>
        <p className='doorear-section-eyebrow aigocy-section-eyebrow mb-8 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--app-muted)]'>
          Operator outcomes
        </p>
        <dl className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5'>
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
                      delay: reduceMotion ? 0 : 0.05 * i,
                      duration: 0.45,
                    },
                  },
                }}>
                <div className='doorear-stat-card aigocy-stat-card group flex min-h-full flex-col p-5'>
                  <dt className='flex items-start gap-3'>
                    <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--app-primary)]/20 to-[var(--app-accent)]/10 text-[var(--app-primary)] ring-1 ring-[var(--app-primary)]/15'>
                      <StatIcon className='h-5 w-5' aria-hidden />
                    </span>
                    <span className='pt-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--app-foreground)]'>
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
