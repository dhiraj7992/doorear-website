'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  BadgeCheck,
  Bot,
  Building2,
  CreditCard,
  GitBranch,
  KeyRound,
  Layers,
  LineChart,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'

export type ProductMotionVariant =
  | 'ops'
  | 'pricing'
  | 'companySetup'
  | 'profileAccount'
  | 'userAccess'

const variantCopy: Record<
  ProductMotionVariant,
  {
    eyebrow: string
    title: string
    chips: Array<{ icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>; label: string }>
    tiles: Array<{ k: string; v: string; tone?: 'ok' | 'warn' | 'primary' | 'muted' }>
  }
> = {
  ops: {
    eyebrow: 'Operational MIS',
    title: 'Branch throughput & SLA signals',
    chips: [
      { icon: LineChart, label: 'Live MIS' },
      { icon: Sparkles, label: 'AI signals' },
      { icon: BadgeCheck, label: 'Stage-aware' },
    ],
    tiles: [
      { k: 'OFD progress', v: '84%', tone: 'primary' },
      { k: 'At-risk lanes', v: '3 lanes', tone: 'warn' },
      { k: 'Hub inward', v: 'Queue stable', tone: 'ok' },
      { k: 'Escalations', v: 'Down 18%', tone: 'ok' },
    ],
  },
  pricing: {
    eyebrow: 'Plans & usage',
    title: 'Seats, shipments, top-ups',
    chips: [
      { icon: CreditCard, label: 'INR billing' },
      { icon: Layers, label: 'Plan tiers' },
      { icon: ShieldCheck, label: 'Usage clarity' },
    ],
    tiles: [
      { k: 'Plan', v: 'Growth', tone: 'primary' },
      { k: 'Users', v: '28 seats', tone: 'muted' },
      { k: 'Shipments', v: '45k / mo', tone: 'ok' },
      { k: 'Top-up', v: 'Enabled', tone: 'ok' },
    ],
  },
  companySetup: {
    eyebrow: 'Network setup',
    title: 'Branches, hubs, hierarchy',
    chips: [
      { icon: Building2, label: 'Branch model' },
      { icon: GitBranch, label: 'Hierarchy' },
      { icon: ShieldCheck, label: 'Tenant-safe' },
    ],
    tiles: [
      { k: 'HQ', v: 'Mumbai', tone: 'primary' },
      { k: 'Branches', v: '24 active', tone: 'ok' },
      { k: 'Hubs', v: '8 sorting', tone: 'muted' },
      { k: 'Coverage', v: 'PIN master', tone: 'ok' },
    ],
  },
  profileAccount: {
    eyebrow: 'Company & GST',
    title: 'Profiles + finance artifacts',
    chips: [
      { icon: BadgeCheck, label: 'GST-ready' },
      { icon: CreditCard, label: 'Invoices' },
      { icon: ShieldCheck, label: 'Audit trail' },
    ],
    tiles: [
      { k: 'GSTIN', v: 'Configured', tone: 'ok' },
      { k: 'Billing', v: 'Tax invoices', tone: 'primary' },
      { k: 'Vouchers', v: 'Linked to ops', tone: 'muted' },
      { k: 'Exports', v: 'Role-scoped', tone: 'ok' },
    ],
  },
  userAccess: {
    eyebrow: 'Roles & invites',
    title: 'Least-privilege access',
    chips: [
      { icon: Users, label: 'Branch users' },
      { icon: KeyRound, label: 'Permissions' },
      { icon: Bot, label: 'AI-ready context' },
    ],
    tiles: [
      { k: 'Role', v: 'Hub supervisor', tone: 'primary' },
      { k: 'Scope', v: 'BOM branch', tone: 'muted' },
      { k: 'Exports', v: 'Finance only', tone: 'ok' },
      { k: 'Admin', v: 'Restricted', tone: 'ok' },
    ],
  },
}

function toneClass(tone?: 'ok' | 'warn' | 'primary' | 'muted') {
  switch (tone) {
    case 'ok':
      return 'text-emerald-700'
    case 'warn':
      return 'text-amber-700'
    case 'primary':
      return 'text-[var(--app-primary)]'
    default:
      return 'text-[var(--app-muted)]'
  }
}

export default function ProductMotionVisual({
  variant,
  aspectClassName = 'aspect-[16/10]',
}: {
  variant: ProductMotionVariant
  aspectClassName?: string
}) {
  const reduceMotion = useReducedMotion()
  const copy = variantCopy[variant]

  return (
    <div className={`relative w-full overflow-hidden ${aspectClassName}`}>
      <div className='absolute inset-0 rounded-2xl border border-[var(--app-border)] bg-gradient-to-b from-white to-slate-50 shadow-[0_26px_70px_-46px_rgba(15,23,42,0.55)]' />

      <div className='pointer-events-none absolute inset-0' aria-hidden>
        <svg
          className='h-full w-full'
          viewBox='0 0 640 520'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <radialGradient
              id={`doo-glow-${variant}`}
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(470 160) rotate(114) scale(310 330)'
            >
              <stop stopColor='rgba(37, 99, 235, 0.16)' />
              <stop offset='1' stopColor='rgba(37, 99, 235, 0)' />
            </radialGradient>
          </defs>

          <rect x='0' y='0' width='640' height='520' fill={`url(#doo-glow-${variant})`} />

          <g opacity='0.32'>
            {Array.from({ length: 10 }).map((_, i) => (
              <path
                key={`h-${i}`}
                d={`M0 ${70 + i * 40} H640`}
                stroke='rgba(15, 23, 42, 0.09)'
                strokeWidth='1'
              />
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <path
                key={`v-${i}`}
                d={`M${20 + i * 52} 0 V520`}
                stroke='rgba(15, 23, 42, 0.08)'
                strokeWidth='1'
              />
            ))}
          </g>

          <path
            className={!reduceMotion ? 'hero-illus-route hero-illus-route-primary' : undefined}
            d='M80 380 C 160 292, 240 420, 320 332 S 470 245, 560 196'
            stroke='rgba(37, 99, 235, 0.75)'
            strokeWidth='4.5'
            strokeLinecap='round'
            strokeDasharray='9 16'
          />
          <path
            className={!reduceMotion ? 'hero-illus-route hero-illus-route-soft' : undefined}
            d='M80 380 C 160 292, 240 420, 320 332 S 470 245, 560 196'
            stroke='rgba(245, 158, 11, 0.42)'
            strokeWidth='8'
            strokeLinecap='round'
            strokeDasharray='0 28'
            opacity='0.35'
          />
        </svg>

        {!reduceMotion ? <div className='hero-illus-dot' /> : null}
      </div>

      <div className='relative flex h-full flex-col p-5 sm:p-6'>
        <div className='flex items-start justify-between gap-3'>
          <div>
            <p className='text-[10px] font-bold uppercase tracking-wider text-[var(--app-muted)]'>
              {copy.eyebrow}
            </p>
            <p className='mt-1 text-base font-bold text-[var(--app-foreground)]'>
              {copy.title}
            </p>
          </div>
          <div className='flex flex-wrap justify-end gap-2'>
            {copy.chips.map((chip) => {
              const Icon = chip.icon
              return (
                <span
                  key={chip.label}
                  className='inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--app-muted)] backdrop-blur-sm'
                >
                  <Icon className='h-3.5 w-3.5 text-[var(--app-primary)]' aria-hidden />
                  {chip.label}
                </span>
              )
            })}
          </div>
        </div>

        <div className='mt-5 grid flex-1 grid-cols-2 gap-3'>
          {copy.tiles.map((t, i) => (
            <motion.div
              key={t.k}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.04 * i }}
              className='rounded-2xl border border-[var(--app-border)] bg-white/80 p-4 shadow-sm backdrop-blur-sm'
            >
              <p className='text-[10px] font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
                {t.k}
              </p>
              <p className={`mt-1 text-sm font-bold ${toneClass(t.tone)}`}>{t.v}</p>
              <div className='mt-3 h-1.5 w-full rounded-full bg-slate-100'>
                <div className='h-full w-[66%] rounded-full bg-gradient-to-r from-[var(--app-primary)] to-blue-500 opacity-70' />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

