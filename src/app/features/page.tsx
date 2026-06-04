import type { Metadata } from 'next'
import FAQSection from '@/components/marketing/FAQSection'
import FeatureModulesStrip from '@/components/marketing/FeatureModulesStrip'
import FeaturesPageView from '@/components/marketing/FeaturesPageView'
import RelatedGuidesSection from '@/components/marketing/RelatedGuidesSection'
import { featuresFaqs } from '@/components/marketing/faq-content'
import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'
import { breadcrumbJsonLd, faqJsonLdFromItems } from '@/lib/seo-jsonld'

export const metadata: Metadata = {
  title: 'Courier Software Features — Booking, Hubs, MIS & Accounts',
  description:
    'Explore Doorear features: shipment tracking software, RFQ management, booking and hub ops, logistics MIS, GST-oriented accounts, and procurement workflows for Indian courier and 3PL networks.',
  keywords: [
    'shipment tracking software',
    'RFQ management software',
    'courier management software features',
    'shipment booking software',
    'logistics MIS dashboard',
    'logistics operating system',
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
      'Feature overview for Doorear logistics marketplace, operating system, and courier management software.',
    url: `${siteUrl}/features`,
    inLanguage: 'en-IN',
  }
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
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
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdFromItems(featuresFaqs)) }}
      />
      <FeaturesPageView />
      <FeatureModulesStrip />
      <RelatedGuidesSection />
      <FAQSection items={featuresFaqs} title='Features FAQ' />
    </>
  )
}
