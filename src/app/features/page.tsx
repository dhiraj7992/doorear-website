import type { Metadata } from 'next'
import FeaturesPageView from '@/components/marketing/FeaturesPageView'
import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'

export const metadata: Metadata = {
  title: 'Courier Software Features — Booking, Hubs, MIS & Accounts',
  description:
    'Explore Doorear features for Indian courier and 3PL teams: shipment booking software, hub and last-mile operations, logistics MIS dashboard, GST-oriented accounts, procurement RFQ workflows, and shipment top-ups.',
  keywords: [
    'courier management software features',
    'shipment booking software',
    'logistics MIS dashboard',
    'last mile delivery operations software',
    'GST logistics invoicing software',
  ],
  alternates: { canonical: '/features' },
  openGraph: {
    title: `Features | ${SITE_NAME} courier platform`,
    description:
      'Forward booking, manifests, branch hierarchy, PIN validation, analytics, accounts, procurement, and usage-based top-ups—aligned to real courier operations.',
    url: '/features',
    type: 'website',
  },
  twitter: {
    title: `Features | ${SITE_NAME}`,
    description:
      'Shipment booking, hub execution, MIS, accounts, and procurement workflows in one operator workspace.',
  },
}

export default function FeaturesPage() {
  const siteUrl = getSiteUrl()
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${SITE_NAME} Features`,
    description:
      'Feature overview for Doorear courier management software and logistics operations platform.',
    url: `${siteUrl}/features`,
    inLanguage: 'en',
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <FeaturesPageView />
    </>
  )
}
