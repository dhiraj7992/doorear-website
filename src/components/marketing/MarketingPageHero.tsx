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
  motionVisual?: { variant: ProductMotionVariant }
  imageCaption?: string
  imagePresentation?: 'default' | 'productUi'
  cta?: { href: string; label: string }
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
  const hasVisual = showMotion || Boolean(image)

  return (
    <section className='aigocy-hero-shell relative overflow-hidden border-b border-[var(--app-border)]/50'>
      <MarketingHeroDecorations intense />
      <div className='marketing-container relative z-10 pb-14 pt-8 md:pb-18 md:pt-12 lg:pb-22 lg:pt-14'>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className='aigocy-eyebrow-pill inline-flex w-fit max-w-full items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold text-[var(--app-foreground)]'>
          <span className='aigocy-pulse-dot h-2 w-2 shrink-0 rounded-full bg-[var(--app-primary)]' />
          <Sparkles className='h-3.5 w-3.5 shrink-0 text-amber-600' aria-hidden />
          <span>{eyebrow}</span>
        </motion.div>

        <div
          className={`mt-7 grid gap-10 lg:mt-8 lg:items-start lg:gap-x-12 xl:gap-x-16 ${hasVisual ? 'lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]' : ''}`}>
          <div className={hasVisual ? 'max-w-2xl' : 'max-w-3xl'}>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04 }}
              className='text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-[var(--app-foreground)] sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.06]'>
              {title}
            </motion.h1>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className='mt-6 max-w-xl text-lg leading-relaxed text-[var(--app-muted)] md:text-xl md:leading-[1.6]'>
              {description}
            </motion.div>
            {extra ? (
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className='mt-5 max-w-xl text-base leading-relaxed text-[var(--app-muted)]'>
                {extra}
              </motion.div>
            ) : null}
            {(cta || secondaryCta) && (
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.14 }}
                className='mt-8 flex flex-wrap items-center gap-3 md:mt-10'>
                {cta ? (
                  <LinkButton
                    href={cta.href}
                    variant='primary'
                    size='section'
                    className='group shadow-lg shadow-blue-500/25'>
                    {cta.label}
                    <ArrowRight className='h-4 w-4 transition group-hover:translate-x-1' />
                  </LinkButton>
                ) : null}
                {secondaryCta ? (
                  <LinkButton
                    href={secondaryCta.href}
                    variant='secondary'
                    size='section'
                    secondaryTone='muted'
                    className='bg-white/90'>
                    {secondaryCta.label}
                  </LinkButton>
                ) : null}
              </motion.div>
            )}
          </div>

          {hasVisual ? (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className={`relative w-full lg:sticky lg:top-28 lg:justify-self-end ${imageWrapperClassName ?? ''}`}>
              <div className='hero-image-glow absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--app-primary)]/35 via-[#6493ea]/20 to-amber-500/15 blur-3xl md:-inset-6' />
              <div
                className={`aigocy-visual-frame relative overflow-hidden ${isProductUi ? 'rounded-xl' : 'rounded-[1.75rem]'}`}>
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
                  <div className='relative aspect-[16/10] w-full'>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className={
                        isProductUi
                          ? 'hero-image-modern object-cover object-left object-top'
                          : 'hero-image-modern object-cover'
                      }
                      sizes='(max-width: 1024px) 100vw, 42vw'
                      priority
                    />
                    {!isProductUi ? (
                      <div className='absolute inset-0 bg-gradient-to-t from-[var(--app-sidebar)]/75 via-transparent to-transparent' />
                    ) : null}
                    {imageCaption && !isProductUi ? (
                      <div className='absolute bottom-0 left-0 right-0 p-5 md:p-6'>
                        <p className='text-sm font-medium leading-snug text-white/95 drop-shadow-sm'>
                          {imageCaption}
                        </p>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
              {imageCaption && isProductUi ? (
                <p className='mt-4 text-sm leading-relaxed text-[var(--app-muted)]'>
                  {imageCaption}
                </p>
              ) : null}
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
