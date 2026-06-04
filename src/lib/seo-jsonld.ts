import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'

type BreadcrumbItem = { name: string; path: string }

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  const base = getSiteUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${base}${item.path}`,
    })),
  }
}

export function articleJsonLd(post: {
  slug: string
  title: string
  description: string
  datePublished: string
  dateModified?: string
  heroImage?: string
}) {
  const base = getSiteUrl()
  const image = `${base}${post.heroImage ?? '/images/insights/analytics-ops.png'}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    image: [image],
    author: { '@type': 'Organization', name: SITE_NAME, url: base },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${base}/images/logo/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${base}/blog/${post.slug}` },
  }
}

export function pricingSoftwareJsonLd(
  offers: { name: string; price: number; description?: string }[]
) {
  const base = getSiteUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: `${base}/pricing`,
    offers: offers.map((offer) => ({
      '@type': 'Offer',
      name: offer.name,
      price: String(offer.price),
      priceCurrency: 'INR',
      url: `${base}/pricing`,
      ...(offer.description ? { description: offer.description } : {}),
    })),
  }
}

export function faqJsonLdFromItems(items: readonly { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}
