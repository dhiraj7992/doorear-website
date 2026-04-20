'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Crown, Mail } from 'lucide-react'
import { LinkButton, marketingPricingOutlineClasses } from '@/components/ui'
import { cn } from '@/lib/cn'

export type PricingPlan = {
  id: string
  name: string
  price: string
  period: string
  badge: string | null
  description: string
  cta: { label: string; href: string }
  highlight: boolean
  popular: boolean
}

type Props = { plans: PricingPlan[] }

export default function PricingPlanCards({ plans }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <div className='grid gap-6 lg:grid-cols-4'>
      {plans.map((plan, i) => (
        <motion.div
          key={plan.id}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{
            duration: 0.4,
            delay: reduceMotion ? 0 : Math.min(i * 0.07, 0.35),
          }}
          className={cn(
            `relative flex flex-col rounded-2xl border p-7 shadow-sm transition`,
            plan.highlight
              ? 'border-[var(--app-primary)] bg-[var(--app-card)] ring-2 ring-[var(--app-primary)]/20'
              : 'border-[var(--app-border)] bg-[var(--app-card)] hover:border-[var(--app-primary)]/25 hover:shadow-md'
          )}>
          {plan.popular ? (
            <div className='absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-[var(--app-primary)] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md'>
              <Crown className='h-3 w-3' />
              Most popular
            </div>
          ) : null}
          {plan.badge && !plan.popular ? (
            <span className='mb-2 inline-flex w-fit rounded-full bg-[var(--app-surface)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
              {plan.badge}
            </span>
          ) : null}
          <h2 className='text-lg font-bold text-[var(--app-foreground)]'>{plan.name}</h2>
          <p className='mt-4 flex items-baseline gap-0.5'>
            <span className='text-4xl font-bold tabular-nums tracking-tight text-[var(--app-foreground)]'>
              {plan.price}
            </span>
            <span className='text-sm text-[var(--app-muted)]'>{plan.period}</span>
          </p>
          <p className='mt-4 flex-1 text-sm leading-relaxed text-[var(--app-muted)]'>
            {plan.description}
          </p>
          <div className='mt-8 space-y-3'>
            {plan.cta.href.startsWith('http') ? (
              <LinkButton
                href={plan.cta.href}
                variant='primary'
                size='block'
                className='gap-2'>
                {plan.cta.label}
                <ArrowUpRight className='h-4 w-4' />
              </LinkButton>
            ) : (
              <LinkButton
                href={plan.cta.href}
                variant='primary'
                size='block'
                className='gap-2'>
                <Mail className='h-4 w-4' />
                {plan.cta.label}
              </LinkButton>
            )}
            <Link href='/contact' className={marketingPricingOutlineClasses()}>
              Book Demo
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
