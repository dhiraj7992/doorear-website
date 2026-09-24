'use client'

import { LinkButton } from '@/components/ui'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import MarketingHeroDecorations from './MarketingHeroDecorations'
import HeroFloatingVisual from './HeroFloatingVisual'
import { APP_SIGNUP_URL, SITE_NAME } from './site-config'

export default function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className='home-hero-compact doorear-hero-shell aigocy-hero-shell relative overflow-hidden border-b border-[var(--app-border)]/50'>
      <MarketingHeroDecorations intense />
      <svg
        className='doorear-route-canvas'
        viewBox='0 0 1200 700'
        fill='none'
        aria-hidden>
        <path
          className='hero-illus-route hero-illus-route-primary'
          d='M40 520 C 220 420, 340 580, 520 440 S 820 280, 1160 320'
          stroke='var(--app-primary)'
          strokeWidth='2'
          strokeDasharray='10 14'
          opacity='0.35'
        />
        <path
          className='hero-illus-route hero-illus-route-soft'
          d='M80 180 C 280 240, 420 80, 640 160 S 940 260, 1140 120'
          stroke='var(--app-accent)'
          strokeWidth='1.5'
          strokeDasharray='6 12'
          opacity='0.28'
        />
      </svg>
      <div className='marketing-container home-hero-inner relative z-10 flex min-h-[inherit] flex-col justify-center'>
        <div className='grid items-start gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-x-12 xl:gap-x-16'>
          <div className='flex max-w-2xl min-w-0 flex-col'>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className='doorear-brand-mark text-[clamp(2.75rem,7vw,4.75rem)] font-extrabold leading-[0.95] tracking-tight text-[var(--app-foreground)]'>
              {SITE_NAME}
            </motion.p>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.04 }}
              className='mt-3 text-sm font-semibold tracking-[0.04em] text-[var(--app-accent)] sm:text-base'>
              Smart Access. Smooth Delivery.
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className='mt-5 text-[1.65rem] font-bold leading-[1.15] tracking-tight text-[var(--app-foreground)] sm:text-3xl md:text-4xl lg:mt-6 lg:text-[2.35rem] lg:leading-[1.12]'>
              Logistics OS for{' '}
              <span className='doorear-gradient-text aigocy-gradient-text'>
                courier &amp; 3PL networks
              </span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className='mt-5 max-w-xl text-lg leading-relaxed text-[var(--app-muted)] md:mt-6 md:text-xl md:leading-[1.55]'>
              Book and track shipments, coordinate hubs and delivery runs, and read MIS
              the way dispatchers work—with assistive AI for exceptions and branch-aware
              decisions.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className='mt-8 flex flex-wrap items-center gap-3 md:mt-9'>
              <LinkButton
                href='/contact'
                variant='primary'
                size='hero'
                onClick={() =>
                  trackEvent('marketing_demo_click', {
                    source: 'home_hero',
                    cta: 'book_demo',
                  })
                }
                className='group shadow-lg shadow-teal-700/25 transition hover:-translate-y-0.5'>
                Book Demo
                <ArrowRight className='h-4 w-4 transition group-hover:translate-x-1' />
              </LinkButton>
              <LinkButton
                href={APP_SIGNUP_URL}
                variant='secondary'
                size='hero'
                onClick={() =>
                  trackEvent('marketing_signup_click', {
                    source: 'home_hero',
                    cta: 'get_started',
                  })
                }
                secondaryTone='muted'
                className='bg-white/90 transition hover:-translate-y-0.5'>
                Get Started
              </LinkButton>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className='relative w-full lg:sticky lg:top-24 lg:justify-self-end'>
            <div className='hero-image-glow pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--app-primary)]/25 via-[var(--app-primary-ink)]/10 to-[var(--app-accent)]/12 blur-2xl' />
            <HeroFloatingVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
