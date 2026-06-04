import type { MetadataRoute } from 'next'
import { SITE_NAME } from '@/components/marketing/site-config'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Logistics Marketplace & Operating System`,
    short_name: SITE_NAME,
    description:
      'Logistics marketplace and operating system for Indian supply chains.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/images/logo/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
