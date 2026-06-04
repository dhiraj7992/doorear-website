'use client'

import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'
import IconBadge from './IconBadge'
import PremiumCard from './PremiumCard'

type AudienceCardProps = {
  icon: LucideIcon
  title: string
  body: string
  detail?: string
  titleAs?: 'h2' | 'h3'
  reveal?: boolean
  revealDelay?: number
  className?: string
}

export default function AudienceCard({
  icon,
  title,
  body,
  detail,
  titleAs: TitleTag = 'h3',
  reveal = true,
  revealDelay = 0,
  className,
}: AudienceCardProps) {
  return (
    <PremiumCard
      as='article'
      glass
      reveal={reveal}
      revealDelay={revealDelay}
      className={cn('flex flex-col p-7 lg:p-8', className)}>
      <IconBadge icon={icon} size='md' />
      <TitleTag className='mt-5 text-lg font-semibold text-[var(--app-foreground)]'>
        {title}
      </TitleTag>
      <p className='mt-3 text-sm leading-relaxed text-[var(--app-muted)]'>{body}</p>
      {detail ? (
        <p className='mt-4 border-t border-[var(--app-border)] pt-4 text-sm leading-relaxed text-[var(--app-foreground)]/90'>
          {detail}
        </p>
      ) : null}
    </PremiumCard>
  )
}
