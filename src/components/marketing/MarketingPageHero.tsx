'use client'

import Image from 'next/image'
import { LinkButton } from '@/components/ui'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import MarketingHeroDecorations from './MarketingHeroDecorations'
import ProductMotionVisual, { type ProductMotionVariant } from './ProductMotionVisual'

export type MarketingPageHeroProps = {
  eyebrow: string
  title: React.ReactNode
  description: React.ReactNode
  extra?: React.ReactNode
  imageWrapperClassName?: string
  image?: { src: string; alt: string }
  /** Replace the static screenshot with a motion “product illustration” (Lottie-style, lightweight). */
  motionVisual?: { variant: ProductMotionVariant }
  imageCaption?: string
  /**
   * `productUi` — real app screenshots: no heavy gradient overlay, `object-left` so the
   * app sidebar stays visible; caption sits below the card (SaaS product-marketing pattern).
   */
  imagePresentation?: 'default' | 'productUi'
  cta?: { href: string; label: string }
  /** Secondary link under CTA (e.g. pricing) */
  secondaryCta?: { href: string; label: string }
}

export default function MarketingPageHero({
  eyebrow,
  title,
  description,
  extra,
  imageWrapperClassName,
  image,
  motionVisual,
  imageCaption,
  imagePresentation = 'default',
  cta,
  secondaryCta,
}: MarketingPageHeroProps) {
  const reduceMotion = useReducedMotion()
  const isProductUi = imagePresentation === 'productUi'
  const showMotion = Boolean(motionVisual)

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
                <LinkButton
                  href={cta.href}
                  variant='primary'
                  size='section'
                  className='group'>
                  {cta.label}
                  <ArrowRight className='h-4 w-4 transition group-hover:translate-x-0.5' />
                </LinkButton>
              ) : null}
              {secondaryCta ? (
                <LinkButton
                  href={secondaryCta.href}
                  variant='secondary'
                  size='section'
                  secondaryTone='muted'>
                  {secondaryCta.label}
                </LinkButton>
              ) : null}
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className={`relative mt-5 self-start ${imageWrapperClassName ?? ''}`}
          >
            <div className='hero-image-glow absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--app-primary)]/25 via-transparent to-amber-500/18 blur-2xl' />
            <div
              className={`relative overflow-hidden rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] shadow-2xl shadow-slate-900/15 ring-1 ring-[var(--app-primary)]/10 ${isProductUi ? 'rounded-xl' : ''}`}>
              {isProductUi ? (
                <div
                  className='flex h-9 items-center gap-3 border-b border-[var(--app-border)] bg-[var(--app-surface)] px-3'
                  aria-hidden>
                  <span className='flex gap-1.5'>
                    <span className='h-2 w-2 rounded-full bg-red-400/90' />
                    <span className='h-2 w-2 rounded-full bg-amber-400/90' />
                    <span className='h-2 w-2 rounded-full bg-emerald-400/90' />
                  </span>
                  <span className='min-w-0 flex-1 truncate rounded-md border border-[var(--app-border)] bg-[var(--app-card)] px-2 py-0.5 text-center text-[10px] font-medium text-[var(--app-muted)]'>
                    Product UI preview
                  </span>
                  <span className='w-10 shrink-0' />
                </div>
              ) : null}
              {showMotion ? (
                <ProductMotionVisual
                  variant={motionVisual!.variant}
                  aspectClassName='aspect-[16/10]'
                />
              ) : image ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={560}
                  className={
                    isProductUi
                      ? 'hero-image-modern h-auto w-full object-cover object-left object-top transition duration-700 ease-out motion-safe:hover:scale-[1.01]'
                      : 'hero-image-modern h-auto w-full object-cover transition duration-700 ease-out hover:scale-[1.02]'
                  }
                  sizes='(max-width: 1024px) 100vw, 42vw'
                  priority
                />
              ) : null}
              {!isProductUi ? (
                <div className='absolute inset-0 bg-gradient-to-t from-[var(--app-sidebar)]/78 via-[var(--app-sidebar)]/10 to-transparent' />
              ) : null}
              {imageCaption && !isProductUi ? (
                <div className='absolute bottom-0 left-0 right-0 p-5 md:p-6'>
                  <p className='text-sm font-medium leading-snug text-white/95 drop-shadow-sm'>
                    {imageCaption}
                  </p>
                </div>
              ) : null}
            </div>
            {imageCaption && isProductUi ? (
              <p className='mt-4 text-sm leading-relaxed text-[var(--app-muted)]'>
                {imageCaption}
              </p>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
