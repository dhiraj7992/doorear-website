import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/components/marketing/site-config'
import { blogPosts } from '@/lib/blog-posts'
import { locationPages } from '@/lib/location-pages'
import { solutionPages } from '@/lib/solution-pages'

export const dynamic = 'force-static'
export const revalidate = false

const BUILD_DATE = new Date('2026-06-04')

export default function sitemap(): MetadataRoute.Sitemap {
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
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: BUILD_DATE,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))

  const solutionRoutes: MetadataRoute.Sitemap = solutionPages.map((page) => ({
    url: `${base}/solutions/${page.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'monthly',
    priority: 0.78,
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

  return [...staticRoutes, ...solutionRoutes, ...blogRoutes, ...locationRoutes]
}
