import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/components/marketing/site-config'
import { blogPosts } from '@/lib/blog-posts'
import { locationPages } from '@/lib/location-pages'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const lastModified = new Date()
  const safeDate = (value?: string): Date => {
    if (!value) return lastModified
    const parsed = new Date(value)
    return Number.isNaN(parsed.getTime()) ? lastModified : parsed
  }

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/features',
    '/solutions',
    '/pricing',
    '/about',
    '/contact',
    '/privacy-policy',
    '/blog',
    '/locations',
    '/documentation',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: safeDate(post.datePublished),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const locationRoutes: MetadataRoute.Sitemap = locationPages.map((location) => ({
    url: `${base}/locations/${location.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [...staticRoutes, ...blogRoutes, ...locationRoutes]
}
