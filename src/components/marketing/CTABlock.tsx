'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { LinkButton, PageContainer } from '@/components/ui'
import { trackEvent } from '@/lib/analytics'
import { APP_SIGNUP_URL } from './site-config'

type CTABlockProps = {
  title: string
  description: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTABlock({
  title,
  description,
  primaryLabel = 'Get Started',
  primaryHref = APP_SIGNUP_URL,
  secondaryLabel = 'Book Demo',
  secondaryHref = '/contact',
}: CTABlockProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section className='py-16 md:py-20'>
      <PageContainer>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className='relative overflow-hidden rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] px-8 py-12 text-center shadow-sm md:px-16'>
          <div
            className='pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--app-primary)]/10 blur-3xl'
            aria-hidden
          />
          <div
            className='pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl'
            aria-hidden
          />
          <h2 className='relative text-2xl font-bold tracking-tight text-[var(--app-foreground)] md:text-3xl'>
            {title}
          </h2>
          <p className='relative mx-auto mt-4 max-w-2xl text-base text-[var(--app-muted)]'>
            {description}
          </p>
          <div className='relative mt-8 flex flex-wrap items-center justify-center gap-4'>
            <LinkButton
              href={primaryHref}
              variant='primary'
              onClick={() =>
                trackEvent('marketing_signup_click', {
                  source: 'cta_block',
                  cta: primaryLabel.toLowerCase().replace(/\s+/g, '_'),
                })
              }
              size='cta'>
              {primaryLabel}
            </LinkButton>
            <LinkButton
              href={secondaryHref}
              variant='secondary'
              onClick={() =>
                trackEvent('marketing_demo_click', {
                  source: 'cta_block',
                  cta: secondaryLabel.toLowerCase().replace(/\s+/g, '_'),
                })
              }
              size='cta'
              secondaryTone='surface'>
              {secondaryLabel}
            </LinkButton>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  )
}
