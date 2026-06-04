'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import ProductMotionVisual, { type ProductMotionVariant } from './ProductMotionVisual'

/** Preserves the product’s left navigation rail in screenshots (SaaS “full UI” previews). */
const shotClass =
  'object-cover object-left object-top transition duration-[650ms] ease-out motion-safe:group-hover:scale-[1.015]'

export function InsightBrowserFrame({
  chromeLabel,
  children,
  className = '',
}: {
  chromeLabel: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`group overflow-hidden rounded-xl border border-[var(--app-border)] bg-[var(--app-card)] shadow-[0_22px_56px_-26px_rgba(15,23,42,0.38)] ring-1 ring-black/[0.04] ${className}`}>
      <div
        className='flex h-9 items-center gap-3 border-b border-[var(--app-border)] bg-[var(--app-surface)] px-3'
        aria-hidden>
        <span className='flex gap-1.5'>
          <span className='h-2 w-2 rounded-full bg-red-400/90' />
          <span className='h-2 w-2 rounded-full bg-amber-400/90' />
          <span className='h-2 w-2 rounded-full bg-emerald-400/90' />
        </span>
        <span className='min-w-0 flex-1 truncate rounded-md border border-[var(--app-border)] bg-[var(--app-card)] px-2 py-0.5 text-center text-[10px] font-medium text-[var(--app-muted)]'>
          app.doorear.com — {chromeLabel}
        </span>
        <span className='w-12 shrink-0' />
      </div>
      {children}
    </div>
  )
}

export function InsightProductShot({
  src,
  alt,
  aspectClassName = 'aspect-[16/10]',
  sizes = '(max-width: 1024px) 100vw, min(720px, 50vw)',
  priority = false,
}: {
  src: string
  alt: string
  aspectClassName?: string
  sizes?: string
  priority?: boolean
}) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-b from-slate-100/90 to-slate-50 dark:from-slate-900/40 dark:to-slate-950 ${aspectClassName}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={shotClass}
        sizes={sizes}
        priority={priority}
      />
    </div>
  )
}

/** Animated spotlight block: copy + framed screenshot (scroll reveal + lift). */
export function InsightSpotlightBlock({
  id,
  eyebrow,
  title,
  description,
  chromeLabel,
  imageSrc,
  imageAlt,
  motionVisual,
  imageSide = 'right',
  children,
  /** When true, omit inner `marketing-container` (use inside a parent that already constrains width). */
  flush = false,
}: {
  id: string
  eyebrow: string
  title: string
  description: ReactNode
  chromeLabel: string
  imageSrc: string
  imageAlt: string
  motionVisual?: { variant: ProductMotionVariant }
  imageSide?: 'left' | 'right'
  children?: ReactNode
  flush?: boolean
}) {
  const reduceMotion = useReducedMotion()
  const copy = (
    <div className='flex flex-col justify-center'>
      <p className='text-[10px] font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
        {eyebrow}
      </p>
      <h2 className='mt-2 text-2xl font-bold tracking-tight text-[var(--app-foreground)] md:text-3xl'>
        {title}
      </h2>
      <div className='mt-4 text-base leading-relaxed text-[var(--app-muted)]'>
        {description}
      </div>
      {children}
    </div>
  )

  const visual = (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        reduceMotion ? undefined : { y: -3, transition: { duration: 0.22 } }
      }
      className='relative will-change-transform'>
      <span
        className='marketing-floating-chip pointer-events-none absolute -left-3 -top-3'
        aria-hidden
      />
      <InsightBrowserFrame chromeLabel={chromeLabel}>
        {motionVisual ? (
          <ProductMotionVisual variant={motionVisual.variant} />
        ) : (
          <InsightProductShot src={imageSrc} alt={imageAlt} />
        )}
      </InsightBrowserFrame>
      <span
        className='marketing-floating-chip marketing-floating-chip-alt pointer-events-none absolute -bottom-3 -right-3'
        aria-hidden
      />
    </motion.div>
  )

  return (
    <section
      id={id}
      className='scroll-mt-28 border-b border-[var(--app-border)] py-14 md:py-16 lg:py-20'>
      <div className={flush ? 'w-full' : 'marketing-container'}>
        <div className='grid items-center gap-10 lg:grid-cols-2 lg:gap-14'>
          <div
            className={
              imageSide === 'left' ? 'lg:order-2' : undefined
            }>
            {copy}
          </div>
          <div
            className={
              imageSide === 'left' ? 'lg:order-1' : undefined
            }>
            {visual}
          </div>
        </div>
      </div>
    </section>
  )
}
