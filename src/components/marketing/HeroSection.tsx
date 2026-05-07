'use client'

import Link from 'next/link'
import { LinkButton } from '@/components/ui'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  Building2,
  Gauge,
  Landmark,
  MapPin,
  PackageCheck,
  Sparkle,
  ShieldCheck,
  Sparkles,
  Truck,
} from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import MarketingHeroDecorations from './MarketingHeroDecorations'
import HeroMotionVisual from './HeroMotionVisual'
import { APP_SIGNUP_URL } from './site-config'

export default function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className='relative overflow-hidden border-b border-[var(--app-border)] bg-[var(--app-surface)]'>
      <MarketingHeroDecorations />
      <div className='marketing-container relative z-10 pt-[2.45rem] pb-14 md:pt-14 md:pb-20 lg:pt-[4.2rem] lg:pb-24'>
        <div className='grid items-start gap-x-12 gap-y-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-16'>
          <div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-[var(--app-card)]/90 px-3 py-1.5 text-xs font-medium text-[var(--app-muted)] shadow-sm backdrop-blur-sm'>
              <Sparkles className='h-3.5 w-3.5 text-amber-600' aria-hidden />
              <span>
                AI-ready logistics operations for Indian courier &amp; 3PL networks
              </span>
            </motion.div>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className='mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[var(--app-foreground)] md:text-5xl lg:text-[3.25rem]'>
              Run bookings, hubs &amp; last-mile delivery with{' '}
              <span className='bg-gradient-to-r from-[var(--app-primary)] to-blue-600 bg-clip-text text-transparent'>
                AI-assisted operations clarity
              </span>
            </motion.h1>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className='mt-6 max-w-xl text-lg leading-relaxed text-[var(--app-muted)]'>
              Doorear helps teams book and track shipments, coordinate network execution, and read MIS the
              way dispatchers actually work—then layers assistive AI to surface risk, prioritize exceptions,
              and speed up decisions across branches, roles, and GST-ready company profiles.
            </motion.p>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.13 }}
              className='mt-7 flex flex-wrap items-center gap-2 text-xs font-semibold text-[var(--app-muted)]'
            >
              <span className='inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-[var(--app-card)] px-3 py-1.5'>
                <Bot className='h-4 w-4 text-[var(--app-primary)]' aria-hidden />
                AI exception copilot
              </span>
              <span className='inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-[var(--app-card)] px-3 py-1.5'>
                <Sparkle className='h-4 w-4 text-amber-600' aria-hidden />
                SLA risk signals
              </span>
              <span className='inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-[var(--app-card)] px-3 py-1.5'>
                <PackageCheck className='h-4 w-4 text-emerald-600' aria-hidden />
                Stage-aware audit trail
              </span>
            </motion.div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className='mt-10 flex flex-wrap items-center gap-4'>
              <LinkButton
                href={APP_SIGNUP_URL}
                variant='primary'
                size='hero'
                onClick={() =>
                  trackEvent('marketing_signup_click', {
                    source: 'home_hero',
                    cta: 'get_started',
                  })
                }
                className='group'>
                Get Started
                <ArrowRight className='h-4 w-4 transition group-hover:translate-x-0.5' />
              </LinkButton>
              <LinkButton
                href='/contact'
                variant='secondary'
                size='hero'
                onClick={() =>
                  trackEvent('marketing_demo_click', {
                    source: 'home_hero',
                    cta: 'book_demo',
                  })
                }
                secondaryTone='card'>
                Book Demo
              </LinkButton>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className='relative mt-5 self-start'>
            <div className='hero-image-glow absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--app-primary)]/25 via-transparent to-amber-500/18 blur-2xl' />
            <div className='relative rounded-[2rem] border border-[var(--app-border)]/80 bg-gradient-to-b from-white to-slate-50 p-3 shadow-[0_30px_90px_-38px_rgba(37,99,235,0.42)]'>
              <div
                className='pointer-events-none absolute right-10 top-10 h-28 w-28 rounded-full bg-[var(--app-primary)]/10 blur-2xl'
                aria-hidden
              />
              <div
                className='pointer-events-none absolute -bottom-6 left-6 h-24 w-24 rounded-full bg-amber-400/20 blur-2xl'
                aria-hidden
              />
              <HeroMotionVisual />
            </div>
          </motion.div>

          <div className='col-span-full w-full min-w-0'>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className='mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--app-muted)] lg:text-left'>
              Built for Indian courier &amp; 3PL operators
            </motion.p>
            <dl className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5'>
              {[
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
              ].map((item, i) => {
                const StatIcon = item.icon
                return (
                  <motion.div
                    key={item.k}
                    custom={i}
                    initial='hidden'
                    animate='show'
                    variants={{
                      hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: reduceMotion ? 0 : 0.06 * i + 0.22,
                          duration: 0.5,
                        },
                      },
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -3, transition: { duration: 0.2 } }
                    }
                    className='group relative flex min-h-full flex-col overflow-hidden rounded-2xl border border-[var(--app-border)] bg-gradient-to-b from-[var(--app-card)] to-[var(--app-card)]/70 p-5 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-[var(--app-primary)]/25 hover:shadow-lg hover:shadow-[var(--app-primary)]/10'>
                    <div
                      aria-hidden
                      className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--app-primary)]/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                    />
                    <dt className='flex items-start gap-3'>
                      <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--app-primary)]/12 text-[var(--app-primary)] shadow-inner ring-1 ring-[var(--app-primary)]/10 transition-transform duration-300 group-hover:scale-105 group-hover:bg-[var(--app-primary)]/18'>
                        <StatIcon className='h-5 w-5' aria-hidden />
                      </span>
                      <span className='pt-0.5 text-[11px] font-bold uppercase tracking-wider text-[var(--app-foreground)]'>
                        {item.k}
                      </span>
                    </dt>
                    <dd className='mt-3 text-sm leading-relaxed text-[var(--app-muted)]'>
                      {item.v}
                    </dd>
                  </motion.div>
                )
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
