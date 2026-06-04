'use client'

import { LinkButton } from '@/components/ui'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  PackageCheck,
  Sparkle,
  Sparkles,
} from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import MarketingHeroDecorations from './MarketingHeroDecorations'
import HeroFloatingVisual from './HeroFloatingVisual'
import { APP_SIGNUP_URL } from './site-config'

export default function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className='home-hero-compact aigocy-hero-shell relative overflow-hidden border-b border-[var(--app-border)]/50'>
      <MarketingHeroDecorations intense />
      <div className='marketing-container home-hero-inner relative z-10 flex min-h-[inherit] flex-col justify-center'>
        <div className='grid items-start gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-x-12 xl:gap-x-16'>
          <div className='flex max-w-2xl min-w-0 flex-col'>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className='aigocy-eyebrow-pill inline-flex w-fit max-w-full items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold text-[var(--app-foreground)]'>
              <span className='aigocy-pulse-dot h-2 w-2 shrink-0 rounded-full bg-[var(--app-primary)]' />
              <Sparkles className='h-3.5 w-3.5 shrink-0 text-amber-600' aria-hidden />
              <span>AI-ready logistics for Indian courier &amp; 3PL networks</span>
            </motion.div>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04 }}
              className='mt-4 text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-[var(--app-foreground)] sm:text-4xl md:text-5xl lg:mt-5 lg:text-[3.35rem] lg:leading-[1.06]'>
              Run bookings, hubs &amp; last-mile with{' '}
              <span className='aigocy-gradient-text'>AI-assisted clarity</span>
            </motion.h1>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className='mt-5 max-w-xl text-lg leading-relaxed text-[var(--app-muted)] md:mt-6 md:text-xl md:leading-[1.6]'>
              <p>
                Book and track shipments, coordinate hubs and delivery runs, and read MIS
                the way dispatchers work—plus assistive AI for risk, exceptions, and
                branch-aware decisions.
              </p>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className='mt-6 flex flex-wrap items-center gap-2.5 md:mt-7'>
              {[
                { icon: Bot, label: 'AI exception copilot', color: 'text-[var(--app-primary)]' },
                { icon: Sparkle, label: 'SLA risk signals', color: 'text-amber-600' },
                { icon: PackageCheck, label: 'Stage-aware audit trail', color: 'text-emerald-600' },
              ].map((chip) => {
                const ChipIcon = chip.icon
                return (
                  <span
                    key={chip.label}
                    className='inline-flex items-center gap-2 rounded-full border border-[var(--app-border)]/80 bg-white/80 px-3.5 py-2 text-xs font-semibold text-[var(--app-foreground)] shadow-sm backdrop-blur-sm'>
                    <ChipIcon className={`h-4 w-4 ${chip.color}`} aria-hidden />
                    {chip.label}
                  </span>
                )
              })}
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className='mt-7 flex flex-wrap items-center gap-3 md:mt-8'>
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
                className='group shadow-lg shadow-blue-500/30'>
                Get Started
                <ArrowRight className='h-4 w-4 transition group-hover:translate-x-1' />
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
                secondaryTone='muted'
                className='bg-white/90'>
                Book Demo
              </LinkButton>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className='relative w-full lg:sticky lg:top-24 lg:justify-self-end'>
            <div className='hero-image-glow pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--app-primary)]/22 via-[#6493ea]/12 to-amber-500/8 blur-2xl' />
            <HeroFloatingVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
