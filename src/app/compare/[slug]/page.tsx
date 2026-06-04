import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ComparePageView from '@/components/marketing/ComparePageView'
import { SITE_NAME } from '@/components/marketing/site-config'
import {
  comparePages,
  getCompareBySlug,
} from '@/lib/compare-pages'
import { breadcrumbJsonLd, faqJsonLdFromItems } from '@/lib/seo-jsonld'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return comparePages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getCompareBySlug(slug)
  if (!page) return { title: 'Not found' }

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: { canonical: `/compare/${page.slug}` },
    openGraph: {
      title: `${page.metaTitle} | ${SITE_NAME}`,
      description: page.description,
      url: `/compare/${page.slug}`,
    },
  }
}

export default async function CompareSlugPage({ params }: Props) {
  const { slug } = await params
  const page = getCompareBySlug(slug)
  if (!page) notFound()

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Compare', path: `/compare/${page.slug}` },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdFromItems(page.faqs)) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ComparePageView page={page} />
    </>
  )
}
