import { cn } from '@/lib/cn'

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--app-primary)]'

export type SecondaryTone = 'card' | 'surface' | 'muted'

const secondaryToneClasses: Record<SecondaryTone, string> = {
  card:
    'border border-[var(--app-border)] bg-[var(--app-card)] text-[var(--app-foreground)] shadow-sm hover:border-[var(--app-primary)]/30 hover:bg-[var(--app-surface)]',
  surface:
    'border border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-foreground)] hover:bg-[var(--app-card)] active:bg-[var(--app-card)]',
  muted:
    'border border-[var(--app-border)] bg-[var(--app-card)]/90 text-[var(--app-foreground)] shadow-sm backdrop-blur-sm hover:border-[var(--app-primary)]/30',
}

export type MarketingButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outlineOnDark'
  | 'ghostOnDark'

export type MarketingButtonSize =
  | 'hero'
  | 'cta'
  | 'section'
  | 'sectionWide'
  | 'nav'
  | /** Stacked outline CTA in mobile drawer (e.g. Book Demo) */
    'navDrawer'
  | 'navMobile'
  | 'block'

type Options = {
  variant: MarketingButtonVariant
  size: MarketingButtonSize
  secondaryTone?: SecondaryTone
  fullWidth?: boolean
  className?: string
}

const primarySize: Record<MarketingButtonSize, string> = {
  hero: 'gap-2 px-6 py-3.5 text-base shadow-md shadow-blue-500/25',
  cta: 'px-6 py-3 text-base shadow-md shadow-blue-500/20',
  section: 'gap-2 px-5 py-3 text-sm shadow-md shadow-blue-500/25',
  sectionWide: 'px-6 py-3 text-sm shadow-sm',
  nav: 'px-3 py-2 text-sm shadow-sm hover:opacity-90 sm:px-4',
  navDrawer: '',
  navMobile:
    'w-full rounded-xl px-3 py-2.5 text-center text-sm font-semibold shadow-sm',
  block: 'w-full gap-2 px-4 py-3 text-sm shadow-sm',
}

const secondarySize: Record<MarketingButtonSize, string> = {
  hero: 'px-6 py-3.5 text-base',
  cta: 'px-6 py-3 text-base',
  section: 'px-5 py-3 text-sm',
  sectionWide: 'px-6 py-3 text-sm',
  nav: 'px-3 py-2 text-sm sm:px-4',
  navDrawer: '',
  navMobile: 'w-full rounded-xl px-3 py-2.5 text-center text-sm',
  block: 'w-full px-4 py-3 text-sm',
}

/**
 * Marketing / site button & link styles — single source of truth.
 */
export function marketingButtonClasses({
  variant,
  size,
  secondaryTone = 'card',
  fullWidth,
  className,
}: Options) {
  const root = cn(
    'inline-flex items-center justify-center font-semibold transition rounded-xl',
    focusRing,
    fullWidth && 'w-full'
  )

  if (variant === 'ghostOnDark') {
    return cn(
      root,
      'rounded-lg px-2 py-1.5 text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline',
      size === 'nav' && 'hidden md:inline',
      className
    )
  }

  if (variant === 'outlineOnDark') {
    if (size === 'navDrawer') {
      return cn(
        root,
        'mt-2 w-full border border-white/20 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-white/10',
        className
      )
    }
    return cn(
      root,
      'border border-white/20 px-3 py-2 text-sm font-medium text-white hover:bg-white/10',
      size === 'nav' && 'hidden sm:inline-flex',
      className
    )
  }

  if (variant === 'primary') {
    return cn(
      root,
      'bg-[var(--app-primary)] text-white hover:opacity-95',
      primarySize[size],
      className
    )
  }

  return cn(
    root,
    secondaryToneClasses[secondaryTone],
    secondarySize[size],
    className
  )
}

/** Full-width “Book Demo” under plan CTAs (compact typography). */
export function marketingPricingOutlineClasses(className?: string) {
  return cn(
    focusRing,
    'inline-flex w-full items-center justify-center rounded-xl border border-[var(--app-border)] bg-[var(--app-surface)] px-4 py-2.5 text-xs font-semibold text-[var(--app-foreground)] transition hover:bg-[var(--app-card)]',
    className
  )
}
