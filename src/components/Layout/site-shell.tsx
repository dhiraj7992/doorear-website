'use client'

import MarketingFooter from '@/components/marketing/MarketingFooter'
import MarketingNav from '@/components/marketing/MarketingNav'
import MarketingSiteTheme from '@/components/marketing/MarketingSiteTheme'

type SiteShellProps = {
  children: React.ReactNode
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <MarketingSiteTheme>
      <MarketingNav />
      <main className='flex-1'>{children}</main>
      <MarketingFooter />
    </MarketingSiteTheme>
  )
}
