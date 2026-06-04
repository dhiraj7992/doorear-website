'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import {
  AlertTriangle,
  Bot,
  LineChart,
  MapPin,
  Sparkles,
} from 'lucide-react'
import {
  InsightBrowserFrame,
  InsightProductShot,
} from '@/components/marketing/InsightScreenshot'
import { HERO_VISUAL } from '@/components/marketing/hero-visual-config'

function FloatStatCard({
  label,
  value,
  sub,
  tone = 'primary',
}: {
  label: string
  value: string
  sub?: string
  tone?: 'primary' | 'amber' | 'emerald'
}) {
  const valueColor =
    tone === 'emerald'
      ? 'text-emerald-700'
      : tone === 'amber'
        ? 'text-amber-700'
        : 'text-[var(--app-primary)]'
  return (
    <div className='hero-float-card rounded-2xl border border-white/60 bg-white/92 p-3 shadow-[0_16px_40px_-22px_rgba(15,23,42,0.4)] backdrop-blur-md sm:p-3.5'>
      <p className='text-[10px] font-bold uppercase tracking-wider text-[var(--app-muted)]'>
        {label}
      </p>
      <p className={`mt-1 text-lg font-bold tabular-nums ${valueColor}`}>{value}</p>
      {sub ? (
        <p className='mt-1 text-[11px] leading-snug text-[var(--app-muted)]'>{sub}</p>
      ) : null}
    </div>
  )
}

export default function HeroFloatingVisual() {
  const reduceMotion = useReducedMotion()
  const floatTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 7, repeat: Infinity, ease: 'easeInOut' as const }

  return (
    <div
      className='hero-floating-stage relative mx-auto w-full max-w-[500px]'
      aria-label='Doorear product UI with floating AI operations cards'>
      {/* Gradient canvas only — no warehouse photography */}
      <div
        className='hero-float-canvas pointer-events-none absolute inset-0 overflow-hidden rounded-[1.75rem] border border-[var(--app-primary)]/14 shadow-[0_28px_70px_-36px_var(--aigocy-glow)]'
        aria-hidden>
        <div className='absolute inset-0 bg-gradient-to-br from-white via-[var(--app-surface)] to-blue-50/90' />
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_25%_0%,rgba(37,99,235,0.18),transparent_58%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_88%_25%,rgba(100,147,234,0.14),transparent_52%)]' />
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.06 }}
        className='hero-float-primary absolute left-[7%] right-[7%] top-[9%] z-10 sm:left-[8%] sm:right-[8%]'>
        <InsightBrowserFrame
          chromeLabel={HERO_VISUAL.primaryChromeLabel}
          className='shadow-[0_22px_55px_-28px_rgba(15,23,42,0.45)] ring-2 ring-white/50'>
          <InsightProductShot
            src={HERO_VISUAL.primaryScreenshot}
            alt={HERO_VISUAL.primaryAlt}
            aspectClassName='aspect-[16/10]'
            sizes='(max-width: 1024px) 88vw, 420px'
          />
        </InsightBrowserFrame>
      </motion.div>

      <motion.div
        aria-hidden
        className='absolute -right-0.5 top-[2%] z-20 w-[40%] max-w-[158px] sm:right-0 sm:max-w-[168px]'
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ ...floatTransition, delay: 0 }}
      >
        <FloatStatCard
          label='OFD progress'
          value='84%'
          sub='DEL hub · 24h'
          tone='emerald'
        />
      </motion.div>

      <motion.div
        aria-hidden
        className='absolute bottom-[7%] left-0 z-20 w-[46%] max-w-[188px] sm:max-w-[196px]'
        animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
        transition={{ ...floatTransition, delay: 1.1 }}
      >
        <div className='hero-float-card rounded-2xl border border-white/60 bg-white/92 p-3 shadow-[0_16px_40px_-22px_rgba(15,23,42,0.4)] backdrop-blur-md'>
          <p className='flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--app-muted)]'>
            <Bot className='h-3.5 w-3.5 text-[var(--app-primary)]' aria-hidden />
            AI digest
          </p>
          <p className='mt-1.5 text-xs font-semibold leading-snug text-amber-800'>
            3 at-risk lanes · BOM inward lag
          </p>
          <p className='mt-1 flex items-center gap-1 text-[10px] text-[var(--app-muted)]'>
            <AlertTriangle className='h-3 w-3 shrink-0 text-amber-600' aria-hidden />
            Prioritize inward scans
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.16 }}
        className='absolute bottom-[6%] right-[2%] z-20 w-[42%] max-w-[188px] sm:right-[3%] sm:max-w-[196px]'
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -5, 0], rotate: [-1.5, 0.4, -1.5] }}
          transition={{ ...floatTransition, delay: 2.2 }}
        >
          <InsightBrowserFrame
            chromeLabel={HERO_VISUAL.secondaryChromeLabel}
            className='shadow-xl ring-1 ring-white/55'>
            <div className='relative aspect-[4/3] w-full overflow-hidden bg-slate-50'>
              <Image
                src={HERO_VISUAL.secondaryScreenshot}
                alt={HERO_VISUAL.secondaryAlt}
                fill
                className='object-cover object-left-top'
                sizes='200px'
              />
            </div>
          </InsightBrowserFrame>
        </motion.div>
      </motion.div>

      <span
        className='aigocy-floating-badge absolute left-[5%] top-[36%] z-30 hidden items-center gap-1.5 rounded-2xl px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--app-primary)] sm:inline-flex'
        style={{ animationDelay: '-1.4s' }}>
        <LineChart className='h-3.5 w-3.5' aria-hidden />
        Live MIS
      </span>
      <span
        className='aigocy-floating-badge absolute right-[8%] top-[40%] z-30 hidden items-center gap-1.5 rounded-2xl px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-800 sm:inline-flex'
        style={{ animationDelay: '-3s' }}>
        <Sparkles className='h-3.5 w-3.5' aria-hidden />
        AI signals
      </span>
      <span
        className='aigocy-floating-badge absolute bottom-[30%] left-[36%] z-30 hidden items-center gap-1.5 rounded-2xl px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800 sm:inline-flex'
        style={{ animationDelay: '-4.5s' }}>
        <MapPin className='h-3.5 w-3.5' aria-hidden />
        PIN validated
      </span>
    </div>
  )
}
