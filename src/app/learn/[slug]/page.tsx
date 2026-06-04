import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CTABlock from '@/components/marketing/CTABlock'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import PageFaqSection from '@/components/marketing/PageFaqSection'
import RelatedGuidesSection from '@/components/marketing/RelatedGuidesSection'
import SolutionAudienceSections from '@/components/marketing/SolutionAudienceSections'
import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'
import { getLearnBySlug, learnPages } from '@/lib/learn-pages'
import { breadcrumbJsonLd } from '@/lib/seo-jsonld'
import { safeJsonLdStringify } from '@/lib/safe-jsonld'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return learnPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getLearnBySlug(slug)
  if (!page) return { title: 'Guide not found' }

  return {
    title: page.metaTitle,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `/learn/${page.slug}` },
    openGraph: {
      title: `${page.metaTitle} | ${SITE_NAME}`,
      description: page.description,
      url: `/learn/${page.slug}`,
    },
  }
}

export default async function LearnGuidePage({ params }: Props) {
  const { slug } = await params
  const page = getLearnBySlug(slug)
  if (!page) notFound()

  const siteUrl = getSiteUrl()
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: page.metaTitle, path: `/learn/${page.slug}` },
  ])
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.metaTitle,
    description: page.description,
    url: `${siteUrl}/learn/${page.slug}`,
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
        eyebrow={page.eyebrow}
        title={
          <>
            {page.title}{' '}
            <span className='aigocy-gradient-text'>{page.titleHighlight}</span>
          </>
        }
        description={page.intro}
        image={{
          src: page.heroImage ?? '/images/marketing/page-solutions.jpg',
          alt: `${page.metaTitle} — Doorear`,
        }}
        imagePresentation='default'
        cta={{ href: '/contact', label: 'Discuss your rollout' }}
        secondaryCta={{ href: '/solutions', label: 'View solutions' }}
      />
      <SolutionAudienceSections solution={page} />
      <RelatedGuidesSection slugs={page.relatedBlogSlugs} title='Related articles' />
      <PageFaqSection slug={page.slug} title='Guide FAQ' />
      <CTABlock
        title={`Apply this guide with ${SITE_NAME}`}
        description='Book a demo to map branches, permissions, and modules to your network—with honest integration scope.'
      />
    </>
  )
}
