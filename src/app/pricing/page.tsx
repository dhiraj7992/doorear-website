import type { Metadata } from 'next'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import PricingCalculatorSection from '@/components/marketing/PricingCalculatorSection'
import { SITE_NAME } from '@/components/marketing/site-config'

export const metadata: Metadata = {
  title: 'Pricing + Plan & Usage Calculator',
  description:
    'Explore Doorear pricing plans in INR with an instant plan and usage calculator for users, shipment add-ons, support SLA, and billing cycle comparisons.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: `Pricing | ${SITE_NAME}`,
    description:
      'Compare Launch, Growth, Scale, and Enterprise plans with a real-time INR pricing estimator.',
    url: '/pricing',
    type: 'website',
  },
  twitter: {
    title: `Pricing | ${SITE_NAME}`,
    description:
      'Plan and usage calculator with annual discount, add-ons, and support tiers in INR.',
  },
}

export default function PricingPage() {
  return (
    <>
      <MarketingPageHero
        eyebrow='Pricing · INR plans'
        title={
          <>
            Choose a plan and{' '}
            <span className='aigocy-gradient-text'>estimate usage</span> instantly
          </>
        }
        description='Use the calculator below to compare billing cycles, add users, shipment packs, and support SLA tiers. Everything updates in real time with no backend calls.'
        motionVisual={{ variant: 'pricing' }}
        imagePresentation='default'
        imageCaption='Interactive estimate for planning budgets and capacity.'
      />
      <PricingCalculatorSection />
    </>
  )
}
