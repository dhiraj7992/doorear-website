import type { Metadata } from 'next'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import ContactPageSections from '@/components/marketing/ContactPageSections'
import {
  APP_SIGNUP_URL,
  getSiteUrl,
  SITE_NAME,
} from '@/components/marketing/site-config'

export const metadata: Metadata = {
  title: 'Book an Enterprise Demo — Courier & 3PL Logistics OS',
  description:
    'Book a Doorear demo for multi-branch courier and 3PL networks: map hubs, permissions, MIS, GST billing, and shipment allowances to your operating model. Talk to sales at doorear.com/contact.',
  keywords: [
    'contact Doorear',
    'book courier software demo',
    'enterprise logistics software demo',
    '3PL operations software consultation',
    'courier management software consultation',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `Book Demo | ${SITE_NAME}`,
    description:
      'Enterprise walkthrough for hubs, permissions, MIS, GST-oriented invoicing, shipment top-ups, and honest billing.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    title: `Book Demo | ${SITE_NAME}`,
    description:
      'Rollout discussion for multi-branch courier & 3PL teams—branches, MIS, permissions, subscription planning.',
  },
}

export default function ContactPage() {
  const siteUrl = getSiteUrl()
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `${SITE_NAME} Contact`,
    description:
      'Contact Doorear for demos, pricing, and rollout planning for courier and logistics operations.',
    url: `${siteUrl}/contact`,
    inLanguage: 'en',
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <MarketingPageHero
        eyebrow='Enterprise demo · Courier & 3PL networks'
        title={
          <>
            Book a walkthrough of{' '}
            <span className='doorear-gradient-text aigocy-gradient-text'>your operating model</span>
          </>
        }
        description={
          <>
            Built for multi-branch courier and 3PL teams already running serious networks.
            Share hub count, daily AWB volume, seat needs, and go-live criteria—we map
            Doorear branches, permissions, MIS, and shipment allowances to how you
            actually operate.
          </>
        }
        extra='Prefer self-serve? Use Get Started for a pilot tenant. Large networks usually book a demo first so finance and ops align before rollout.'
        image={{
          src: '/images/marketing/web-ops-5.jpg',
          alt: 'Enterprise demo conversation for Doorear logistics OS',
        }}
        imagePresentation='default'
        imageCaption='Live walkthrough for Indian courier and 3PL operators—hubs, MIS, RBAC, and billing honesty.'
        cta={{ href: '#contact-form', label: 'Book enterprise demo' }}
        secondaryCta={{ href: APP_SIGNUP_URL, label: 'Get Started' }}
      />
      <ContactPageSections />
    </>
  )
}
