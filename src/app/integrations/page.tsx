import type { Metadata } from 'next'
import CTABlock from '@/components/marketing/CTABlock'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import PageFaqSection from '@/components/marketing/PageFaqSection'
import RelatedGuidesSection from '@/components/marketing/RelatedGuidesSection'
import SolutionAudienceSections from '@/components/marketing/SolutionAudienceSections'
import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'
import { integrationsPage } from '@/lib/integrations-page'
import { breadcrumbJsonLd } from '@/lib/seo-jsonld'
import { safeJsonLdStringify } from '@/lib/safe-jsonld'

export const metadata: Metadata = {
  title: integrationsPage.metaTitle,
  description: integrationsPage.description,
  keywords: integrationsPage.keywords,
  alternates: { canonical: '/integrations' },
  openGraph: {
    title: `${integrationsPage.metaTitle} | ${SITE_NAME}`,
    description: integrationsPage.description,
    url: '/integrations',
  },
}

export default function IntegrationsPage() {
  const siteUrl = getSiteUrl()
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Integrations', path: '/integrations' },
  ])
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: integrationsPage.metaTitle,
    description: integrationsPage.description,
    url: `${siteUrl}/integrations`,
    inLanguage: 'en-IN',
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(breadcrumbs) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(webPageJsonLd) }}
      />
      <MarketingPageHero
        eyebrow={integrationsPage.eyebrow}
        title={
          <>
            {integrationsPage.title}{' '}
            <span className='aigocy-gradient-text'>{integrationsPage.titleHighlight}</span>
          </>
        }
        description={integrationsPage.intro}
        image={{
          src: integrationsPage.heroImage ?? '/images/marketing/page-features-ai.jpg',
          alt: `${integrationsPage.metaTitle} — Doorear`,
        }}
        imagePresentation='default'
        cta={{ href: '/contact', label: 'Discuss integrations' }}
        secondaryCta={{ href: '/features', label: 'View features' }}
      />
      <SolutionAudienceSections solution={integrationsPage} />
      <RelatedGuidesSection
        slugs={integrationsPage.relatedBlogSlugs}
        title='Integration guides'
      />
      <PageFaqSection slug='integrations' title='Integrations FAQ' />
      <CTABlock
        title='Confirm integration scope for your tenant'
        description='Book a demo with sales to review ERP, carrier, and analytics connectors deployed for your rollout.'
      />
    </>
  )
}
