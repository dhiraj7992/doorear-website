import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/components/marketing/site-config'

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl()
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/marketing-dashboard',
          '/thank-you',
          '/signin',
          '/signup',
          '/documentation',
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base.replace(/^https?:\/\//, ''),
  }
}
