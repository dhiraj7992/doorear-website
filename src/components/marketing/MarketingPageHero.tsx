'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import MarketingHeroDecorations from './MarketingHeroDecorations'

export type MarketingPageHeroProps = {
  eyebrow: string
  title: React.ReactNode
  description: React.ReactNode
  extra?: React.ReactNode
  image: { src: string; alt: string }
  imageCaption?: string
  cta?: { href: string; label: string }
  /** Secondary link under CTA (e.g. pricing) */
  secondaryCta?: { href: string; label: string }
}

export default function MarketingPageHero({
  eyebrow,
  title,
  description,
  extra,
  image,
  imageCaption,
  cta,
  secondaryCta,
}: MarketingPageHeroProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section className='relative overflow-hidden border-b border-[var(--app-border)] bg-[var(--app-surface)]'>
      <MarketingHeroDecorations />
      <div className='marketing-container relative z-10 pt-[2.45rem] pb-12 md:pt-14 md:pb-16 lg:pt-[4.2rem] lg:pb-20'>
        <div className='grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14'>
          <div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className='inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-[var(--app-card)]/90 px-3 py-1.5 text-xs font-medium text-[var(--app-muted)] shadow-sm backdrop-blur-sm'>
              <Sparkles className='h-3.5 w-3.5 text-amber-600' aria-hidden />
              <span>{eyebrow}</span>
            </motion.div>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04 }}
              className='mt-5 text-4xl font-bold leading-[1.12] tracking-tight text-[var(--app-foreground)] md:text-5xl lg:text-[2.75rem]'
            >
              {title}
            </motion.h1>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className='mt-6 max-w-xl text-lg leading-relaxed text-[var(--app-muted)]'
            >
              {description}
            </motion.div>
            {extra ? (
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className='mt-5 max-w-xl text-base leading-relaxed text-[var(--app-muted)]'
              >
                {extra}
              </motion.div>
            ) : null}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className='mt-8 flex flex-wrap items-center gap-3'
            >
              {cta ? (
                <Link
                  href={cta.href}
                  className='group inline-flex items-center gap-2 rounded-xl bg-[var(--app-primary)] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition hover:opacity-95'
                >
                  {cta.label}
                  <ArrowRight className='h-4 w-4 transition group-hover:translate-x-0.5' />
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className='inline-flex rounded-xl border border-[var(--app-border)] bg-[var(--app-card)]/90 px-5 py-3 text-sm font-semibold text-[var(--app-foreground)] shadow-sm backdrop-blur-sm transition hover:border-[var(--app-primary)]/30'
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className='relative self-start'
          >
            <div className='hero-image-glow absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--app-primary)]/25 via-transparent to-amber-500/18 blur-2xl' />
            <div className='relative overflow-hidden rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] shadow-2xl shadow-slate-900/15 ring-1 ring-[var(--app-primary)]/10'>
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={560}
                className='h-auto w-full object-cover transition duration-700 ease-out hover:scale-[1.02]'
                sizes='(max-width: 1024px) 100vw, 42vw'
                priority
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[var(--app-sidebar)]/78 via-[var(--app-sidebar)]/10 to-transparent' />
              {imageCaption ? (
                <div className='absolute bottom-0 left-0 right-0 p-5 md:p-6'>
                  <p className='text-sm font-medium leading-snug text-white/95 drop-shadow-sm'>
                    {imageCaption}
                  </p>
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
