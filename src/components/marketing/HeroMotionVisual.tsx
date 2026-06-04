'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { AlertTriangle, Bot, CheckCircle2, Radar, Route, Sparkles } from 'lucide-react'

function StatChip({
  label,
  value,
  tone = 'primary',
}: {
  label: string
  value: string
  tone?: 'primary' | 'amber' | 'emerald'
}) {
  const color =
    tone === 'emerald'
      ? 'text-emerald-700'
      : tone === 'amber'
        ? 'text-amber-700'
        : 'text-[var(--app-primary)]'
  const bg =
    tone === 'emerald'
      ? 'bg-emerald-50'
      : tone === 'amber'
        ? 'bg-amber-50'
        : 'bg-[var(--app-primary)]/10'
  return (
    <div className='rounded-2xl border border-[var(--app-border)] bg-white/80 p-3 shadow-sm backdrop-blur-sm'>
      <p className='text-[10px] font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
        {label}
      </p>
      <p className={`mt-1 text-lg font-bold ${color}`}>{value}</p>
      <div className={`mt-2 h-1.5 w-full rounded-full ${bg}`}>
        <div className='h-full w-[68%] rounded-full bg-gradient-to-r from-[var(--app-primary)] to-blue-500 opacity-70' />
      </div>
    </div>
  )
}

export default function HeroMotionVisual() {
  const reduceMotion = useReducedMotion()

  return (
    <div className='relative w-full overflow-hidden rounded-2xl border border-[var(--app-border)] bg-gradient-to-b from-white to-slate-50 shadow-[0_28px_75px_-44px_rgba(15,23,42,0.5)]'>
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.9]'
        aria-hidden
      >
        <svg
          className='h-full w-full'
          viewBox='0 0 640 520'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient id='doo-grid' x1='0' y1='0' x2='1' y2='1'>
              <stop stopColor='rgba(37, 99, 235, 0.10)' />
              <stop offset='1' stopColor='rgba(245, 158, 11, 0.07)' />
            </linearGradient>
            <radialGradient id='doo-glow' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(456 168) rotate(114) scale(300 320)'>
              <stop stopColor='rgba(37, 99, 235, 0.18)' />
              <stop offset='1' stopColor='rgba(37, 99, 235, 0)' />
            </radialGradient>
          </defs>

          <rect x='0' y='0' width='640' height='520' fill='url(#doo-grid)' opacity='0.65' />
          <rect x='0' y='0' width='640' height='520' fill='url(#doo-glow)' />

          {/* subtle grid */}
          <g opacity='0.35'>
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

          {/* route */}
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

          {/* nodes */}
          <g>
            {[
              { x: 80, y: 380, c: 'rgba(37,99,235,0.25)' },
              { x: 320, y: 332, c: 'rgba(245,158,11,0.22)' },
              { x: 560, y: 196, c: 'rgba(16,185,129,0.18)' },
            ].map((n) => (
              <g key={`${n.x}-${n.y}`}>
                <circle cx={n.x} cy={n.y} r='10' fill={n.c} />
                <circle cx={n.x} cy={n.y} r='4.5' fill='rgba(15,23,42,0.22)' />
              </g>
            ))}
          </g>
        </svg>

        {!reduceMotion ? <div className='hero-illus-dot' /> : null}
      </div>

      <div className='relative p-5 sm:p-6'>
        <div className='flex items-center justify-between gap-3'>
          <div className='inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--app-muted)] backdrop-blur-sm'>
            <Route className='h-3.5 w-3.5 text-[var(--app-primary)]' aria-hidden />
            Command view (animated)
          </div>
          <div className='inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--app-muted)] backdrop-blur-sm'>
            <Sparkles className='h-3.5 w-3.5 text-amber-600' aria-hidden />
            AI signals
          </div>
        </div>

        <div className='mt-6 grid gap-3 sm:grid-cols-2'>
          <StatChip label='Delivery SLA' value='98.2%' tone='emerald' />
          <StatChip label='At-risk lanes' value='3 lanes' tone='amber' />
        </div>

        <div className='mt-4 grid gap-3 sm:grid-cols-2'>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className='rounded-2xl border border-[var(--app-border)] bg-white/80 p-4 shadow-sm backdrop-blur-sm'
          >
            <p className='flex items-center gap-2 text-xs font-semibold text-[var(--app-foreground)]/85'>
              <Radar className='h-4 w-4 text-[var(--app-primary)]' aria-hidden />
              SLA risk digest
            </p>
            <p className='mt-2 text-sm font-semibold text-amber-700'>
              BOM hub inward lag impacting DEL→BOM lane
            </p>
            <p className='mt-2 text-xs text-[var(--app-muted)]'>
              Suggested: prioritize inward scans, then re-plan delivery run.
            </p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className='rounded-2xl border border-[var(--app-border)] bg-white/80 p-4 shadow-sm backdrop-blur-sm'
          >
            <p className='flex items-center gap-2 text-xs font-semibold text-[var(--app-foreground)]/85'>
              <Bot className='h-4 w-4 text-[var(--app-primary)]' aria-hidden />
              Exception copilot
            </p>
            <div className='mt-2 flex items-start gap-2'>
              <AlertTriangle className='mt-0.5 h-4 w-4 text-amber-600' aria-hidden />
              <div>
                <p className='text-sm font-semibold text-[var(--app-foreground)]'>
                  Shipment AWB‑DOO‑12872
                </p>
                <p className='mt-1 text-xs text-[var(--app-muted)]'>
                  Owner: BOM hub supervisor · Next: scan inward + attach manifest note
                </p>
              </div>
            </div>
            <div className='mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800'>
              <CheckCircle2 className='h-4 w-4' aria-hidden />
              Explainable recommendation
            </div>
          </motion.div>
        </div>
      </div>

      {!reduceMotion ? (
        <>
          <motion.div
            aria-hidden
            className='pointer-events-none absolute -right-6 top-16 w-[44%] min-w-[170px] max-w-[240px] rotate-[-2.5deg]'
            animate={{ y: [0, -8, 0], rotate: [-2.5, -1.4, -2.5] }}
            transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className='rounded-2xl border border-white/30 bg-white/75 p-3 shadow-xl backdrop-blur-md'>
              <p className='text-[10px] font-bold uppercase tracking-wider text-[var(--app-muted)]'>
                Live scan stream
              </p>
              <div className='mt-2 space-y-2'>
                {['OFD scan', 'Inward', 'Manifest'].map((t, i) => (
                  <div key={t} className='flex items-center justify-between rounded-xl border border-[var(--app-border)] bg-white px-3 py-2 text-xs font-semibold'>
                    <span className='text-[var(--app-foreground)]/80'>{t}</span>
                    <span className='text-emerald-700'>{i === 0 ? '+14' : i === 1 ? '+9' : '+4'}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            aria-hidden
            className='pointer-events-none absolute -left-6 bottom-14 w-[48%] min-w-[190px] max-w-[260px] rotate-[2.2deg]'
            animate={{ y: [0, 9, 0], rotate: [2.2, 1.2, 2.2] }}
            transition={{ duration: 7.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className='rounded-2xl border border-white/30 bg-white/75 p-3 shadow-xl backdrop-blur-md'>
              <p className='text-[10px] font-bold uppercase tracking-wider text-[var(--app-muted)]'>
                Suggested priorities
              </p>
              <div className='mt-2 space-y-2'>
                {[
                  { k: 'BOM inward pending', v: 'High', c: 'text-amber-700' },
                  { k: 'OFD drift · DEL', v: 'Med', c: 'text-[var(--app-primary)]' },
                  { k: 'POD capture', v: 'Low', c: 'text-emerald-700' },
                ].map((r) => (
                  <div key={r.k} className='flex items-center justify-between rounded-xl border border-[var(--app-border)] bg-white px-3 py-2 text-xs font-semibold'>
                    <span className='text-[var(--app-foreground)]/80'>{r.k}</span>
                    <span className={r.c}>{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </div>
  )
}

