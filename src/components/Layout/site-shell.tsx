'use client'

import MarketingFooter from '@/components/marketing/MarketingFooter'
import MarketingNav from '@/components/marketing/MarketingNav'
import Aoscompo from '@/utils/aos'

type SiteShellProps = {
  children: React.ReactNode
}

/**
 * Default chrome for public marketing pages: AOS wrapper, nav, main landmark, footer.
 * Keeps `app/layout.tsx` thin and lets alternate layouts (e.g. auth-only) omit this.
 */
export function SiteShell({ children }: SiteShellProps) {
  return (
    <Aoscompo>
      <MarketingNav />
      <main className='flex-1'>{children}</main>
      <MarketingFooter />
    </Aoscompo>
  )
}
