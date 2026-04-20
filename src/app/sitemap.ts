import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/components/marketing/site-config'
import { getAllSlugs } from '@/lib/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/features',
    '/solutions',
    '/pricing',
    '/about',
    '/contact',
    '/blog',
    '/documentation',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))

  const blogRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}
