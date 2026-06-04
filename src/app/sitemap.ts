import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/components/marketing/site-config'
import { blogPosts } from '@/lib/blog-posts'
import { comparePages } from '@/lib/compare-pages'
import { featurePages } from '@/lib/feature-pages'
import { glossaryTerms } from '@/lib/glossary-terms'
import { locationPages } from '@/lib/location-pages'
import { learnPages } from '@/lib/learn-pages'
import { solutionPages } from '@/lib/solution-pages'

export const dynamic = 'force-static'
export const revalidate = false

const BUILD_DATE = new Date('2026-06-04')

function buildSitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()

  const safeDate = (value?: string): Date => {
    if (!value) return BUILD_DATE
    const parsed = new Date(value)
    return Number.isNaN(parsed.getTime()) ? BUILD_DATE : parsed
  }

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/features',
    '/solutions',
    '/pricing',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/blog',
    '/locations',
    '/faq',
    '/glossary',
    '/learn',
    '/compare',
    '/integrations',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: BUILD_DATE,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/faq' || path === '/glossary' ? 0.82 : 0.8,
  }))

  const solutionRoutes: MetadataRoute.Sitemap = solutionPages.map((page) => ({
    url: `${base}/solutions/${page.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'monthly',
    priority: 0.78,
  }))

  const featureRoutes: MetadataRoute.Sitemap = featurePages.map((page) => ({
    url: `${base}/features/${page.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'monthly',
    priority: 0.76,
  }))

  const learnRoutes: MetadataRoute.Sitemap = learnPages.map((page) => ({
    url: `${base}/learn/${page.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'monthly',
    priority: 0.79,
  }))

  const compareRoutes: MetadataRoute.Sitemap = comparePages.map((page) => ({
    url: `${base}/compare/${page.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'monthly',
    priority: 0.77,
  }))

  const glossaryRoutes: MetadataRoute.Sitemap = glossaryTerms.map((term) => ({
    url: `${base}/glossary/${term.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'monthly',
    priority: 0.72,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: safeDate(post.dateModified ?? post.datePublished),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const locationRoutes: MetadataRoute.Sitemap = locationPages.map((location) => ({
    url: `${base}/locations/${location.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [
    ...staticRoutes,
    ...solutionRoutes,
    ...featureRoutes,
    ...learnRoutes,
    ...compareRoutes,
    ...glossaryRoutes,
    ...blogRoutes,
    ...locationRoutes,
  ]
}

export default function sitemap(): MetadataRoute.Sitemap {
  try {
    return buildSitemap()
  } catch (error) {
    console.error('[sitemap] generation failed:', error)
    const base = getSiteUrl()
    return [
      {
        url: base,
        lastModified: BUILD_DATE,
        changeFrequency: 'weekly',
        priority: 1,
      },
    ]
  }
}
