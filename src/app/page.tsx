import type { Metadata } from 'next'
import HeroSection from '@/components/marketing/HeroSection'
import HomeOperatorStats from '@/components/marketing/HomeOperatorStats'
import TrustedByStrip from '@/components/marketing/TrustedByStrip'
import CTABlock from '@/components/marketing/CTABlock'
import FAQSection from '@/components/marketing/FAQSection'
import { faqJsonLd } from '@/components/marketing/faq-content'
import {
  IndiaMarketSection,
  WorkflowSection,
} from '@/components/marketing/HomeSections'
import HomePlatformSection from '@/components/marketing/HomePlatformSection'
import HomeSolutionsCapabilityStrip from '@/components/marketing/HomeSolutionsCapabilityStrip'
import AISection from '@/components/marketing/AISection'
import AIDemoSection from '@/components/marketing/AIDemoSection'
import ProductUiCallout from '@/components/marketing/ProductUiCallout'
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from '@/components/marketing/site-config'
import { safeJsonLdStringify } from '@/lib/safe-jsonld'

export const metadata: Metadata = {
  title: 'Operation Management Software for Courier, Logistics & 3PL Networks',
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
      <HomeOperatorStats />
      <TrustedByStrip />
      <IndiaMarketSection />
      <AISection />
      <AIDemoSection />
      <ProductUiCallout />
      <HomePlatformSection />
      <HomeSolutionsCapabilityStrip />
      <WorkflowSection />
      <CTABlock
        title='See Doorear on your data model'
        description='Book a live walkthrough to map branches, permissions, MIS, and subscription allowances to your network. Use Get Started when you are ready to pilot with a defined hub set and success criteria.'
      />
      <FAQSection />
    </>
  )
}
