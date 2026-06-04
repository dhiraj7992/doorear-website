import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

type IconBadgeProps = {
  icon: LucideIcon
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: { box: 'h-9 w-9', icon: 'h-4 w-4' },
  md: { box: 'h-10 w-10', icon: 'h-5 w-5' },
  lg: { box: 'h-11 w-11', icon: 'h-5 w-5' },
}

export default function IconBadge({
  icon: Icon,
  className,
  size = 'md',
}: IconBadgeProps) {
  const s = sizeMap[size]
  return (
    <span
      className={cn(
        'flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--app-primary)]/16 to-transparent text-[var(--app-primary)] ring-1 ring-[var(--app-primary)]/12 transition duration-300 group-hover:scale-105 group-hover:from-[var(--app-primary)]/22',
        s.box,
        className
      )}>
      <Icon className={s.icon} strokeWidth={2} aria-hidden />
    </span>
  )
}
