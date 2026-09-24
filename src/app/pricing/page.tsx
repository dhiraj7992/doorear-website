import type { Metadata } from 'next'
import FAQSection from '@/components/marketing/FAQSection'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import PricingCalculatorSection from '@/components/marketing/PricingCalculatorSection'
import { pricingFaqs } from '@/components/marketing/faq-content'
import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'
import { faqJsonLdFromItems, pricingSoftwareJsonLd } from '@/lib/seo-jsonld'
import { PRICING_PLANS } from '@/components/marketing/pricing-calculator-config'

export const metadata: Metadata = {
  title: 'Pricing + Plan & Usage Calculator',
  description:
    'Explore Doorear pricing plans in INR with an instant plan and usage calculator for users, shipment add-ons, support SLA, and billing cycle comparisons.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: `Pricing | ${SITE_NAME}`,
    description:
      'Compare Free trial, Launch, Growth, Scale, and Enterprise plans with a real-time INR pricing estimator.',
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
  const siteUrl = getSiteUrl()
  const offers = PRICING_PLANS.filter((p) => !p.isContactSales).map((plan) => ({
    name: plan.name,
    price: plan.monthlyFee,
    description: plan.description,
  }))

  const pricingJsonLd = pricingSoftwareJsonLd(offers)
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: `${siteUrl}/pricing` },
    ],
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdFromItems(pricingFaqs)) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
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
      <FAQSection items={pricingFaqs} title='Pricing FAQ' />
    </>
  )
}
