import type { Metadata } from 'next'
import CTABlock from '@/components/marketing/CTABlock'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import SolutionsPageSections from '@/components/marketing/SolutionsPageSections'
import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'

export const metadata: Metadata = {
  title: 'Courier & 3PL Solutions for Multi-Branch Networks',
  description:
    'Doorear supports mid-size and growing courier and 3PL operators in India: branch-aware execution, role-based access, operational visibility, and commercial clarity in one workspace.',
  keywords: [
    'courier software solutions',
    '3PL operations platform',
    'multi branch courier software',
    'logistics operations platform India',
    'branch scoped access courier',
  ],
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: `Solutions | ${SITE_NAME} logistics operations platform`,
    description:
      'Operational visibility for hubs, commercial insight for leadership, and secure tenancy for enterprise teams.',
    url: '/solutions',
    type: 'website',
  },
  twitter: {
    title: `Solutions | ${SITE_NAME}`,
    description:
      'Built for operators, hub managers, finance, and procurement teams running real courier networks.',
  },
}

export default function SolutionsPage() {
  const siteUrl = getSiteUrl()
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${SITE_NAME} Solutions`,
    description:
      'Solutions page for courier and 3PL operators using Doorear across multi-branch networks.',
    url: `${siteUrl}/solutions`,
    inLanguage: 'en',
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <MarketingPageHero
        eyebrow='Solutions · Audiences'
        title={
          <>
            Built for teams who{' '}
            <span className='aigocy-gradient-text'>run courier operations</span> every day
          </>
        }
        description={
          <>
            {SITE_NAME} is courier management software for{' '}
            <strong className='font-semibold text-[var(--app-foreground)]'>
              operator workspaces
            </strong>
            —not a consumer parcel tracking portal. Multi-branch execution,
            accountability, analytics, and honest subscription economics (including
            shipment top-ups) match how Indian enterprises buy.
          </>
        }
        motionVisual={{ variant: 'companySetup' }}
        imagePresentation='default'
        imageCaption='Hub & inward operations: queues, handoffs, and execution views supervisors use before SLAs slip—left navigation shows how modules map to your network.'
        cta={{ href: '/contact', label: 'Discuss your branch model' }}
      />
      <SolutionsPageSections />
      <CTABlock
        title='Tell us about your branch model'
        description='We will map hubs, permissions, MIS, and rollout phases to your network—transparently and without overselling integrations that are not deployed for your tenant.'
      />
    </>
  )
}
