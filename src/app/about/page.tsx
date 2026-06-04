import type { Metadata } from 'next'
import CTABlock from '@/components/marketing/CTABlock'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import { AboutBeliefsSection, AboutPillarsSection } from '@/components/marketing/AboutPageSections'
import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'

export const metadata: Metadata = {
  title: 'About Doorear — Courier & Logistics Platform',
  description:
    'Learn why Doorear exists: a logistics operations platform and courier management software for branch-heavy Indian networks—transparent, operational, and enterprise-ready.',
  keywords: [
    'about doorear',
    'courier management software India',
    'logistics operations platform',
    'multi branch courier software',
    '3PL SaaS platform',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: `About | ${SITE_NAME} courier platform`,
    description:
      'Professional, trustworthy product DNA—primary blue, operational clarity, and honest subscription positioning.',
    url: '/about',
    type: 'website',
  },
  twitter: {
    title: `About | ${SITE_NAME}`,
    description:
      'Why Doorear exists and how it supports branch-heavy courier and 3PL operations.',
  },
}

export default function AboutPage() {
  const siteUrl = getSiteUrl()
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${SITE_NAME}`,
    description:
      'About page for Doorear logistics operations platform and courier management software.',
    url: `${siteUrl}/about`,
    inLanguage: 'en',
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <MarketingPageHero
        eyebrow='Company · About'
        title={
          <>
            Why <span className='aigocy-gradient-text'>{SITE_NAME}</span> exists
          </>
        }
        description={
          <>
            {SITE_NAME} is a cloud operations platform for courier and logistics
            companies—helping teams{' '}
            <strong className='font-semibold text-[var(--app-foreground)]'>
              book and track shipments
            </strong>
            , coordinate hubs and last-mile delivery, run analytics, and manage
            branches, coverage, fleet, partners, users, and roles in one secure
            workspace.
          </>
        }
        extra='Our mission: give mid-market and growing Indian networks operational discipline without rigid tools that ignore branch reality, PIN coverage, or how finance closes the month.'
        motionVisual={{ variant: 'profileAccount' }}
        imagePresentation='default'
        imageCaption='Transparent partnerships with operators: software that respects how your network actually runs.'
        cta={{ href: '/contact', label: 'Talk to us' }}
      />
      <AboutPillarsSection />
      <AboutBeliefsSection />
      <CTABlock
        title='Meet the team behind your rollout'
        description='Book a demo to validate fit across branches, analytics, accounts, and subscription allowances—then Get Started when you are ready to pilot with a defined hub set.'
      />
    </>
  )
}
