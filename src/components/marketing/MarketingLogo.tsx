import Image from 'next/image'
import Link from 'next/link'

type MarketingLogoProps = {
  className?: string
  priority?: boolean
}

/**
 * Full lockup from /public/images/logo/logo.png. The D mark lives in
 * /public/images/logo/D.svg (used as favicon in root layout).
 */
export default function MarketingLogo({
  className = '',
  priority = false,
}: MarketingLogoProps) {
  return (
    <Link
      href='/'
      className={`relative flex shrink-0 items-center ${className}`}
      aria-label='Doorear home'>
      <Image
        src='/images/logo/logo.png'
        alt='Doorear — Smart Access. Smooth Delivery.'
        width={240}
        height={72}
        className='h-8 w-auto max-h-10 max-w-[min(58vw,220px)] object-contain object-left sm:h-9 md:max-w-[240px]'
        priority={priority}
      />
    </Link>
  )
}
