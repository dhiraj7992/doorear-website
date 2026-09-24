import type { Metadata } from 'next'
import HeroSection from '@/components/marketing/HeroSection'
import HomeOperatorStats from '@/components/marketing/HomeOperatorStats'
import TrustedByStrip from '@/components/marketing/TrustedByStrip'
import CTABlock from '@/components/marketing/CTABlock'
import FAQSection from '@/components/marketing/FAQSection'
import { faqJsonLd } from '@/components/marketing/faq-content'
import { WorkflowSection } from '@/components/marketing/HomeSections'
import HomePlatformSection from '@/components/marketing/HomePlatformSection'
import HomeSolutionsCapabilityStrip from '@/components/marketing/HomeSolutionsCapabilityStrip'
import AISection from '@/components/marketing/AISection'
import ProductUiCallout from '@/components/marketing/ProductUiCallout'
import {
  APP_SIGNUP_URL,
  getSiteUrl,
  SITE_DESCRIPTION,
  SITE_NAME,
} from '@/components/marketing/site-config'
import { safeJsonLdStringify } from '@/lib/safe-jsonld'

export const metadata: Metadata = {
  title: 'Doorear — Logistics OS for Courier & 3PL Networks in India',
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: `${SITE_NAME} | Logistics marketplace & operating system`,
    description: SITE_DESCRIPTION,
    url: '/',
  },
}

export default function HomePage() {
  const siteUrl = getSiteUrl()

  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      description: 'Free trial available',
    },
    description: SITE_DESCRIPTION,
    url: siteUrl,
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(softwareJsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(faqJsonLd()) }}
      />
      <HeroSection />
      <TrustedByStrip />
      <HomeOperatorStats />
      <ProductUiCallout />
      <AISection />
      <HomePlatformSection />
      <HomeSolutionsCapabilityStrip />
      <WorkflowSection />
      <CTABlock
        title='Map Doorear to your courier network'
        description='Book a live walkthrough for multi-branch courier and 3PL teams—branches, permissions, MIS, and shipment allowances on your operating model. Use Get Started when you are ready to pilot a defined hub set.'
        primaryLabel='Book Demo'
        primaryHref='/contact'
        secondaryLabel='Get Started'
        secondaryHref={APP_SIGNUP_URL}
      />
      <FAQSection />
    </>
  )
}
