import Link from 'next/link'
import { cn } from '@/lib/cn'

/** Bump when replacing public/images/logo/logo.png so browsers skip stale cache. */
export const LOGO_MARKETING = '/images/logo/logo.png'
export const LOGO_MARKETING_SRC = `${LOGO_MARKETING}?v=3`

type MarketingLogoProps = {
  className?: string
  priority?: boolean
  variant?: 'onLight' | 'onDark'
}

/**
 * Plain img (not next/image) so logo swaps in /public apply immediately
 * without the optimizer holding an old WebP in .next/cache.
 */
export default function MarketingLogo({
  className = '',
  priority = false,
}: MarketingLogoProps) {
  return (
    <Link
      href='/'
      className={cn('relative flex shrink-0 items-center', className)}
      aria-label='Doorear home'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO_MARKETING_SRC}
        alt='Doorear — Smart Access. Smooth Delivery.'
        width={320}
        height={96}
        decoding='async'
        fetchPriority={priority ? 'high' : 'auto'}
        className='h-10 w-auto max-h-14 max-w-[min(72vw,280px)] object-contain object-left sm:h-11 md:h-12 md:max-w-[300px] lg:max-w-[320px]'
      />
    </Link>
  )
}
