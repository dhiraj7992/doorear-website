import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CTABlock from '@/components/marketing/CTABlock'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import PageFaqSection from '@/components/marketing/PageFaqSection'
import RelatedGuidesSection from '@/components/marketing/RelatedGuidesSection'
import SolutionAudienceSections from '@/components/marketing/SolutionAudienceSections'
import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'
import {
  featurePages,
  getFeatureBySlug,
} from '@/lib/feature-pages'
import { breadcrumbJsonLd } from '@/lib/seo-jsonld'

type Props = { params: Promise<{ module: string }> }

export function generateStaticParams() {
  return featurePages.map((page) => ({ module: page.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { module } = await params
  const feature = getFeatureBySlug(module)
  if (!feature) return { title: 'Feature not found' }

  return {
    title: feature.metaTitle,
    description: feature.description,
    keywords: feature.keywords,
    alternates: { canonical: `/features/${feature.slug}` },
    openGraph: {
      title: `${feature.metaTitle} | ${SITE_NAME}`,
      description: feature.description,
      url: `/features/${feature.slug}`,
    },
  }
}

export default async function FeatureModulePage({ params }: Props) {
  const { module } = await params
  const feature = getFeatureBySlug(module)
  if (!feature) notFound()

  const siteUrl = getSiteUrl()
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: feature.metaTitle, path: `/features/${feature.slug}` },
  ])

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: feature.metaTitle,
    description: feature.description,
    url: `${siteUrl}/features/${feature.slug}`,
    inLanguage: 'en-IN',
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <MarketingPageHero
        eyebrow={feature.eyebrow}
        title={
          <>
            {feature.title}{' '}
            <span className='aigocy-gradient-text'>{feature.titleHighlight}</span>
          </>
        }
        description={feature.intro}
        image={{
          src: feature.heroImage ?? '/images/marketing/page-features.jpg',
          alt: `${feature.metaTitle} — Doorear`,
        }}
        imagePresentation='default'
        cta={{ href: '/contact', label: 'See this module live' }}
        secondaryCta={{ href: '/features', label: 'All features' }}
      />
      <SolutionAudienceSections solution={feature} />
      <RelatedGuidesSection
        slugs={feature.relatedBlogSlugs}
        title='Related guides'
      />
      <PageFaqSection slug={feature.slug} />
      <CTABlock
        title={`Evaluate ${feature.eyebrow.replace(/^Features · /, '')} for your tenant`}
        description='Book a demo to confirm which procurement, contract, and ops modules are enabled for your rollout—we keep scope honest and aligned to what is deployed.'
      />
    </>
  )
}
