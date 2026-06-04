import type { Metadata } from 'next'
import Link from 'next/link'
import CTABlock from '@/components/marketing/CTABlock'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import { SolutionPagesGrid } from '@/components/marketing/SolutionsAudienceGrid'
import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'
import { learnPages } from '@/lib/learn-pages'
import { breadcrumbJsonLd } from '@/lib/seo-jsonld'
import { safeJsonLdStringify } from '@/lib/safe-jsonld'

export const metadata: Metadata = {
  title: 'Learn — Logistics Marketplace & Operations Guides',
  description:
    'In-depth guides on logistics operating systems, courier operations, and procurement for Indian B2B networks—by Doorear.',
  alternates: { canonical: '/learn' },
  openGraph: {
    title: `Learn | ${SITE_NAME}`,
    description: 'Operator playbooks for LOS, courier ops, and logistics procurement.',
    url: '/learn',
  },
}

export default function LearnHubPage() {
  const siteUrl = getSiteUrl()
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
  ])
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${SITE_NAME} Learn`,
    description: 'Guides for logistics operating system, courier operations, and procurement.',
    url: `${siteUrl}/learn`,
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
        eyebrow='Resources · Learn'
        title={
          <>
            Guides for <span className='aigocy-gradient-text'>logistics operators</span>
          </>
        }
        description='Pillar guides on logistics operating systems, courier operations, and procurement—written for Indian B2B networks evaluating Doorear.'
        image={{
          src: '/images/marketing/page-blog-ai.jpg',
          alt: 'Doorear learn hub — logistics guides',
        }}
        imagePresentation='default'
        cta={{ href: '/contact', label: 'Book a demo' }}
        secondaryCta={{ href: '/blog', label: 'Read blog' }}
      />
      <SolutionPagesGrid
        pages={learnPages}
        title='Pillar guides'
        description='Deep dives that connect to solutions, compare pages, and supporting articles.'
        iconKey='layers'
        linkPrefix='/learn'
      />
      <div className='marketing-container pb-8'>
        <p className='text-center text-sm text-[var(--app-muted)]'>
          Also explore{' '}
          <Link href='/compare' className='font-semibold text-[var(--app-primary)] hover:underline'>
            comparisons
          </Link>
          ,{' '}
          <Link href='/glossary' className='font-semibold text-[var(--app-primary)] hover:underline'>
            glossary
          </Link>
          , and{' '}
          <Link href='/faq' className='font-semibold text-[var(--app-primary)] hover:underline'>
            FAQ
          </Link>
          .
        </p>
      </div>
      <CTABlock
        title='Apply these guides to your network'
        description='Book a walkthrough to map LOS, hub ops, and procurement modules to your branch model.'
      />
    </>
  )
}
