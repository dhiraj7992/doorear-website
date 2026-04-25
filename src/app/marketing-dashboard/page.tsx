import type { Metadata } from 'next'
import MarketingDashboardClient from '@/components/marketing/MarketingDashboardClient'

export const metadata: Metadata = {
  title: 'Marketing Dashboard',
  description:
    'Track channel budgets, conversion metrics, and lead performance for Doorear marketing campaigns.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MarketingDashboardPage() {
  return <MarketingDashboardClient />
}
