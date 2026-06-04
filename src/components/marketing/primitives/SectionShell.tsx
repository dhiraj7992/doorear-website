import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

type SectionTone = 'surface' | 'card' | 'transparent'

type SectionShellProps = {
  children: ReactNode
  className?: string
  tone?: SectionTone
  bordered?: boolean
  divider?: boolean
  spacing?: 'default' | 'compact' | 'loose'
  'aria-label'?: string
}

const toneBg: Record<SectionTone, string> = {
  surface: 'bg-[var(--app-surface)]',
  card: 'bg-[var(--app-card)]',
  transparent: '',
}

const spacingMap = {
  compact: 'py-12 md:py-16',
  default: 'py-16 md:py-24',
  loose: 'py-20 md:py-28',
}

export default function SectionShell({
  children,
  className,
  tone = 'transparent',
  bordered = false,
  divider = false,
  spacing = 'default',
  'aria-label': ariaLabel,
}: SectionShellProps) {
  return (
    <section
      aria-label={ariaLabel}
      className={cn(
        'relative',
        toneBg[tone],
        bordered && 'border-y border-[var(--app-border)]',
        spacingMap[spacing],
        className
      )}>
      {divider ? (
        <div
          className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--app-primary)]/25 to-transparent'
          aria-hidden
        />
      ) : null}
      {children}
    </section>
  )
}
