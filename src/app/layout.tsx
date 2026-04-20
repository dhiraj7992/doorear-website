import type { Metadata, Viewport } from 'next'
import './globals.css'
import ScrollToTop from '@/app/components/ScrollToTop'
import { SiteShell } from '@/components/Layout/site-shell'
import {
  getSiteUrl,
  SITE_DESCRIPTION,
  SITE_NAME,
} from '@/components/marketing/site-config'

const siteUrl = getSiteUrl()

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} | Logistics & Courier Management Software`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'logistics management software',
    'courier management software',
    'shipment booking software',
    'logistics operations platform',
    'multi branch courier software',
    'Doorear logistics software',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Courier management software & logistics operations platform`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Logistics management software`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: '/images/logo/D.svg', type: 'image/svg+xml' }],
    apple: '/images/logo/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='min-h-screen flex flex-col'>
        <SiteShell>{children}</SiteShell>
        <ScrollToTop />
      </body>
    </html>
  )
}
