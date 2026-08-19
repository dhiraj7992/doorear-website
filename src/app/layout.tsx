import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import ScrollToTop from '@/app/components/ScrollToTop'
import { SiteShell } from '@/components/Layout/site-shell'
import {
  getOgImageUrl,
  getSiteUrl,
  getSupportUrl,
  ORGANIZATION_SAME_AS,
  SITE_DESCRIPTION,
  SITE_NAME,
} from '@/components/marketing/site-config'
import { safeJsonLdStringify } from '@/lib/safe-jsonld'

const siteUrl = getSiteUrl()
const supportUrl = getSupportUrl()
const defaultOgImage = getOgImageUrl()
const defaultGtmId = 'GTM-MD5MQRD5'
const defaultGaMeasurementId = 'G-Y5V5FBK5K8'

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_NAME} | Logistics Marketplace & Operating System`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'operation management software',
    'logistics marketplace',
    'logistics operating system',
    'logistics management software',
    'courier management software',
    'supply chain logistics platform',
    'shipment booking software',
    'logistics operations platform',
    'multi branch courier software',
    '3PL operations platform',
    'Doorear logistics software',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Logistics marketplace & courier operations platform`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} logistics operations platform`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Logistics management software`,
    description: SITE_DESCRIPTION,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
  icons: {
    icon: [{ url: '/images/logo/D.svg', type: 'image/svg+xml' }],
    apple: '/images/logo/logo.png',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? defaultGtmId
  const gaMeasurementId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? defaultGaMeasurementId
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: siteUrl,
    description: SITE_DESCRIPTION,
    inLanguage: 'en-IN',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: siteUrl,
      logo: `${siteUrl}/images/logo/logo.png`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: siteUrl,
    logo: `${siteUrl}/images/logo/logo.png`,
    description: SITE_DESCRIPTION,
    sameAs: [...ORGANIZATION_SAME_AS],
    areaServed: { '@type': 'Country', name: 'India' },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: supportUrl,
      },
    ],
  }

  return (
    <html lang='en-IN' suppressHydrationWarning>
      <body className='min-h-screen flex flex-col'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(websiteJsonLd) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(organizationJsonLd) }}
        />
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        ) : null}
        <SiteShell>{children}</SiteShell>
        <ScrollToTop />
        {gtmId ? (
          <Script
            id='gtm-base'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        ) : null}
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy='afterInteractive'
            />
            <Script
              id='ga4-base'
              strategy='afterInteractive'
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}');`,
              }}
            />
          </>
        ) : null}
      </body>
    </html>
  )
}
