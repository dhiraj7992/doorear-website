'use client'

import { cn } from '@/lib/cn'
import ScrollReveal from './primitives/ScrollReveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  /** Use on homepage inside .home-aigocy-theme */
  aigocy?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  aigocy = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <ScrollReveal className={cn('max-w-3xl', alignClass)}>
      {eyebrow ? (
        <div className={cn(align === 'center' && 'flex justify-center')}>
          <p
            className={cn(
              'text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--app-muted)]',
              aigocy && 'aigocy-section-eyebrow'
            )}>
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2
        className={cn(
          'mt-3 font-bold tracking-tight text-[var(--app-foreground)]',
          aigocy
            ? 'text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]'
            : 'mt-2 text-3xl sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]'
        )}>
        {title}
      </h2>
      {description ? (
        <p className='mt-4 text-base leading-relaxed text-[var(--app-muted)] md:text-lg md:leading-relaxed'>
          {description}
        </p>
      ) : null}
    </ScrollReveal>
  )
}
