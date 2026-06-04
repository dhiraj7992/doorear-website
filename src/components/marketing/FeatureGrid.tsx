'use client'

import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'
import { IconBadge, PremiumCard } from './primitives'

export type FeatureItem = {
  icon: LucideIcon
  title: string
  body: string
  bullets?: string[]
}

type FeatureGridProps = {
  items: FeatureItem[]
  columns?: 2 | 3
  /** AIGOCY-style asymmetric grid (homepage) */
  bento?: boolean
}

export default function FeatureGrid({
  items,
  columns = 3,
  bento = false,
}: FeatureGridProps) {
  const grid = bento
    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr'
    : columns === 2
      ? 'md:grid-cols-2'
      : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid gap-6 lg:gap-7 ${grid}`}>
      {items.map((item, i) => {
        const Icon = item.icon
        const bentoClass =
          bento && i === 0
            ? 'md:col-span-2 lg:row-span-2 lg:min-h-[280px]'
            : bento && i === 1
              ? 'lg:col-start-3'
              : ''
        return (
          <PremiumCard
            key={item.title}
            as='article'
            glass
            reveal
            revealDelay={Math.min(i * 0.05, 0.35)}
            className={cn('p-6 lg:p-7', bentoClass)}>
            <IconBadge icon={Icon} size='md' />
            <h3 className='mt-4 text-lg font-semibold tracking-tight text-[var(--app-foreground)]'>
              {item.title}
            </h3>
            <p className='mt-2.5 text-sm leading-relaxed text-[var(--app-muted)]'>
              {item.body}
            </p>
            {item.bullets && item.bullets.length > 0 ? (
              <ul className='mt-5 space-y-2.5 border-t border-[var(--app-border)] pt-5 text-xs leading-relaxed text-[var(--app-foreground)]/90'>
                {item.bullets.map((b) => (
                  <li key={b} className='flex gap-2.5'>
                    <span
                      className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--app-primary)]'
                      aria-hidden
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </PremiumCard>
        )
      })}
    </div>
  )
}
