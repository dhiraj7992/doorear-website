import type { Metadata } from 'next'
import CTABlock from '@/components/marketing/CTABlock'
import FaqHubSections from '@/components/marketing/FaqHubSections'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import { SITE_NAME } from '@/components/marketing/site-config'
import { faqCategories, getAllFaqsFlat } from '@/lib/geo-faq-hub'
import { breadcrumbJsonLd, faqJsonLdFromItems } from '@/lib/seo-jsonld'

export const metadata: Metadata = {
  title: 'FAQ — Logistics Marketplace & Operating System',
  description:
    'Answers about Doorear: logistics marketplace, courier aggregation, multi-carrier shipping, TMS, RFQ, pricing in INR, security, and implementation for Indian networks.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: `FAQ | ${SITE_NAME}`,
    description: 'Frequently asked questions about Doorear logistics software.',
    url: '/faq',
  },
}

export default function FaqPage() {
  const allFaqs = getAllFaqsFlat()
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'FAQ', path: '/faq' },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdFromItems(allFaqs)) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <MarketingPageHero
        eyebrow='Resources · FAQ'
        title={
          <>
            Answers about{' '}
            <span className='aigocy-gradient-text'>Doorear &amp; logistics software</span>
          </>
        }
        description='Clear, quotable answers for operators, finance, and IT teams evaluating a logistics marketplace and operating system in India.'
        image={{
          src: '/images/marketing/page-blog-ai.jpg',
          alt: 'Doorear FAQ — logistics software questions',
        }}
        imagePresentation='default'
        cta={{ href: '/contact', label: 'Ask our team' }}
        secondaryCta={{ href: '/glossary', label: 'Glossary' }}
      />
      <FaqHubSections categories={faqCategories} />
      <CTABlock
        title='Did not find your question?'
        description='Book a demo for rollout-specific answers on branches, integrations, procurement modules, and subscription fit.'
      />
    </>
  )
}
