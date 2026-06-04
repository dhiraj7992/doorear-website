import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CTABlock from '@/components/marketing/CTABlock'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import RelatedGuidesSection from '@/components/marketing/RelatedGuidesSection'
import SolutionAudienceSections from '@/components/marketing/SolutionAudienceSections'
import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'
import { breadcrumbJsonLd } from '@/lib/seo-jsonld'
import {
  getSolutionBySlug,
  solutionPages,
} from '@/lib/solution-pages'

type Props = { params: Promise<{ audience: string }> }

export function generateStaticParams() {
  return solutionPages.map((page) => ({ audience: page.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { audience } = await params
  const solution = getSolutionBySlug(audience)
  if (!solution) return { title: 'Solution not found' }

  return {
    title: solution.metaTitle,
    description: solution.description,
    keywords: solution.keywords,
    alternates: { canonical: `/solutions/${solution.slug}` },
    openGraph: {
      title: `${solution.metaTitle} | ${SITE_NAME}`,
      description: solution.description,
      url: `/solutions/${solution.slug}`,
    },
  }
}

export default async function SolutionAudiencePage({ params }: Props) {
  const { audience } = await params
  const solution = getSolutionBySlug(audience)
  if (!solution) notFound()

  const siteUrl = getSiteUrl()
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: solution.metaTitle, path: `/solutions/${solution.slug}` },
  ])

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: solution.metaTitle,
    description: solution.description,
    url: `${siteUrl}/solutions/${solution.slug}`,
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
        eyebrow={solution.eyebrow}
        title={
          <>
            {solution.title}{' '}
            <span className='aigocy-gradient-text'>{solution.titleHighlight}</span>
          </>
        }
        description={solution.intro}
        image={{
          src: solution.heroImage ?? '/images/marketing/page-solutions.jpg',
          alt: `${solution.metaTitle} — Doorear logistics platform`,
        }}
        imagePresentation='default'
        cta={{ href: '/contact', label: 'Discuss your rollout' }}
        secondaryCta={{ href: '/pricing', label: 'View pricing' }}
      />
      <SolutionAudienceSections solution={solution} />
      <RelatedGuidesSection
        slugs={solution.relatedBlogSlugs}
        title='Guides for this audience'
      />
      <CTABlock
        title={`See Doorear for ${solution.titleHighlight}`}
        description='Book a demo to map branches, permissions, and rollout phases to your network—with honest scope on modules and integrations deployed for your tenant.'
      />
    </>
  )
}
