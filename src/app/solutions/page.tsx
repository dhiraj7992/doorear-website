import type { Metadata } from 'next'
import CTABlock from '@/components/marketing/CTABlock'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import RelatedGuidesSection from '@/components/marketing/RelatedGuidesSection'
import { SolutionPagesGrid } from '@/components/marketing/SolutionsAudienceGrid'
import SolutionsPageSections from '@/components/marketing/SolutionsPageSections'
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from '@/components/marketing/site-config'
import { breadcrumbJsonLd } from '@/lib/seo-jsonld'
import {
  audienceSolutionPages,
  capabilitySolutionPages,
} from '@/lib/solution-pages'

export const metadata: Metadata = {
  title: 'Logistics Marketplace & 3PL Solutions for Supply Chain Teams',
  description:
    'Doorear connects manufacturers, eCommerce companies, distributors, couriers, transporters, and 3PL providers on a unified logistics marketplace and operating system for Indian supply chains.',
  keywords: [
    'logistics marketplace',
    'logistics operating system',
    'courier aggregator platform India',
    'multi carrier shipping software',
    'supply chain visibility platform',
    'transport management system India',
    'courier software solutions',
    '3PL operations platform',
  ],
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: `Solutions | ${SITE_NAME} logistics marketplace`,
    description: SITE_DESCRIPTION,
    url: '/solutions',
    type: 'website',
  },
  twitter: {
    title: `Solutions | ${SITE_NAME}`,
    description:
      'Built for manufacturers, eCommerce, transporters, and 3PL operators running real logistics networks.',
  },
}

const SOLUTION_GUIDE_SLUGS = [
  'multi-branch-courier-operations-one-dashboard',
  'procurement-rfq-proposals-agreements-logistics',
  'roles-permissions-bookings-billing-safety',
  'logistics-marketplace-vs-courier-software',
  'what-is-logistics-operating-system',
]

export default function SolutionsPage() {
  const siteUrl = getSiteUrl()
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${SITE_NAME} Solutions`,
    description:
      'Solutions for manufacturers, eCommerce, transporters, and 3PL operators on the Doorear logistics marketplace.',
    url: `${siteUrl}/solutions`,
    inLanguage: 'en-IN',
  }
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <MarketingPageHero
        eyebrow='Solutions · Marketplace & audiences'
        title={
          <>
            A logistics marketplace for teams who{' '}
            <span className='aigocy-gradient-text'>run supply chain operations</span>
          </>
        }
        description={
          <>
            {SITE_NAME} is a logistics operating system and marketplace for{' '}
            <strong className='font-semibold text-[var(--app-foreground)]'>
              manufacturers, eCommerce brands, transporters, and 3PL operators
            </strong>
            —multi-branch execution, accountability, analytics, and honest
            subscription economics in one unified workspace.
          </>
        }
        motionVisual={{ variant: 'companySetup' }}
        imagePresentation='default'
        imageCaption='Hub & inward operations: queues, handoffs, and execution views supervisors use before SLAs slip.'
        cta={{ href: '/contact', label: 'Discuss your branch model' }}
      />
      <SolutionPagesGrid
        pages={capabilitySolutionPages}
        title='Solutions by capability'
        description='Courier aggregator, multi carrier shipping, logistics marketplace India, transport management, supply chain visibility, partner management, franchise ops, and last mile—built for mid-market Indian networks.'
        iconKey='layers'
      />
      <SolutionPagesGrid
        pages={audienceSolutionPages}
        title='Solutions by audience'
        description='Doorear connects manufacturers, eCommerce brands, transporters, and 3PL operators on a unified logistics marketplace and operating system.'
        iconKey='users'
      />
      <SolutionsPageSections />
      <RelatedGuidesSection
        slugs={SOLUTION_GUIDE_SLUGS}
        title='Solution guides'
      />
      <CTABlock
        title='Tell us about your branch model'
        description='We will map hubs, permissions, MIS, and rollout phases to your network—transparently and without overselling integrations that are not deployed for your tenant.'
      />
    </>
  )
}
