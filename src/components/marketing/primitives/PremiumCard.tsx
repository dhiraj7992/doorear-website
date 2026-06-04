'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/cn'
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type PremiumCardProps<T extends ElementType = 'article'> = {
  as?: T
  children: ReactNode
  className?: string
  glass?: boolean
  hoverLift?: boolean
  reveal?: boolean
  revealDelay?: number
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

const baseClasses =
  'group relative overflow-hidden rounded-2xl border border-[var(--app-border)] shadow-sm ring-1 ring-black/[0.03] transition-[border-color,box-shadow,transform] duration-300'

const glassClasses =
  'bg-[var(--app-card)]/85 backdrop-blur-md'

const solidClasses = 'bg-[var(--app-card)]'

const hoverClasses =
  'hover:-translate-y-0.5 hover:border-[var(--app-primary)]/25 hover:shadow-lg hover:shadow-[var(--app-primary)]/10'

export default function PremiumCard<T extends ElementType = 'article'>({
  as,
  children,
  className,
  glass = false,
  hoverLift = true,
  reveal = false,
  revealDelay = 0,
  ...props
}: PremiumCardProps<T>) {
  const Component = (as ?? 'article') as ElementType
  const reduceMotion = useReducedMotion()

  const card = (
    <Component
      className={cn(
        baseClasses,
        glass ? glassClasses : solidClasses,
        hoverLift && hoverClasses,
        className
      )}
      {...props}>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--app-primary)]/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'
      />
      {children}
    </Component>
  )

  if (!reveal) return card

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{
        duration: 0.45,
        delay: reduceMotion ? 0 : revealDelay,
      }}>
      {card}
    </motion.div>
  )
}
