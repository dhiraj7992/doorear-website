import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type PageContainerProps = ComponentPropsWithoutRef<'div'>

/**
 * Horizontal page gutter + max width (`marketing-container` from globals.css).
 * Wrap with `<section>` yourself when you need a section landmark.
 */
export function PageContainer({ className, ...props }: PageContainerProps) {
  return (
    <div className={cn('marketing-container', className)} {...props} />
  )
}
