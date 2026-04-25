import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import ScrollToTop from '@/app/components/ScrollToTop'
import { SiteShell } from '@/components/Layout/site-shell'
import {
  getSiteUrl,
  SITE_DESCRIPTION,
  SITE_NAME,
} from '@/components/marketing/site-config'

const siteUrl = getSiteUrl()
const defaultOgImage = `${siteUrl}/images/marketing/hero-logistics.jpg`
const defaultGaId = 'G-Y5V5FBK5K8'
const defaultGtmId = 'GTM-MD5MQRD5'
const defaultSearchConsoleToken = 'TS1nFTNz7RZCUCqNhXxF2a7ZTkzulxzMlCPzjOK79pY'

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
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
      defaultSearchConsoleToken,
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
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? defaultGaId
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? defaultGtmId

  return (
    <html lang='en' suppressHydrationWarning>
      <body className='min-h-screen flex flex-col'>
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
      </body>
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
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy='afterInteractive'
          />
          <Script
            id='ga4-base'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${gaId}');`,
            }}
          />
        </>
      ) : null}
    </html>
  )
}
