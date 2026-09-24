import type { Metadata } from 'next'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import ContactPageSections from '@/components/marketing/ContactPageSections'
import {
  APP_SIGNUP_URL,
  getSiteUrl,
  SITE_NAME,
} from '@/components/marketing/site-config'

export const metadata: Metadata = {
  title: 'Contact Sales — Book a Demo',
  description:
    'Reach the Doorear team at doorear.com: book a demo, ask about multi branch courier software fit, or discuss procurement, accounts, and subscription plans for your network.',
  keywords: [
    'contact Doorear',
    'book courier software demo',
    'logistics software sales contact',
    'courier management software consultation',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `Contact | ${SITE_NAME}`,
    description:
      'Talk to us about hubs, permissions, MIS, GST-oriented invoicing support, shipment top-ups, and honest billing.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    title: `Contact | ${SITE_NAME}`,
    description:
      'Book a rollout discussion for branches, MIS, permissions, and subscription planning.',
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
        eyebrow='Contact · Sales & onboarding'
        title={
          <>
            Let&apos;s map <span className='aigocy-gradient-text'>your rollout</span> together
          </>
        }
        description={
          <>
            Book a demo or message {SITE_NAME}. Share branches, booking volumes,
            seat counts, and what “go-live” means—whether you are evaluating
            Standard vs Enterprise or need a Custom quote with unlimited
            shipments.
          </>
        }
        extra='We respond with concrete next steps and honest scope—not generic brochures or integration promises your tenant has not deployed.'
        image={{
          src: '/images/marketing/web-ops-5.jpg',
          alt: 'Open communication and partnership — contact Doorear',
        }}
        imagePresentation='default'
        imageCaption='Sales & onboarding for Indian courier and 3PL operators—branch rollouts, MIS workshops, and finance alignment.'
        cta={{ href: '#contact-form', label: 'Send a message' }}
        secondaryCta={{ href: APP_SIGNUP_URL, label: 'Get Started' }}
      />
      <ContactPageSections />
    </>
  )
}
