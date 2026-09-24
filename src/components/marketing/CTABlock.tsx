'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { LinkButton, PageContainer } from '@/components/ui'
import { trackEvent } from '@/lib/analytics'
import { ScrollReveal, SectionShell } from './primitives'
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
    <SectionShell spacing='default'>
      <PageContainer>
        <ScrollReveal>
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -2 }}
            transition={{ duration: 0.25 }}
            className='premium-glass-panel relative overflow-hidden rounded-3xl border border-[var(--app-primary)]/15 px-8 py-12 text-center shadow-lg shadow-[var(--app-primary)]/8 md:px-16 md:py-14'>
            <div
              className='pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--app-primary)]/12 blur-3xl'
              aria-hidden
            />
            <div
              className='pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-amber-500/12 blur-3xl'
              aria-hidden
            />
            <div
              className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--app-primary)]/40 to-transparent'
              aria-hidden
            />
            <h2 className='relative text-2xl font-bold tracking-tight text-[var(--app-foreground)] md:text-3xl lg:text-4xl'>
              {title}
            </h2>
            <p className='relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--app-muted)] md:text-lg'>
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
        </ScrollReveal>
      </PageContainer>
    </SectionShell>
  )
}
