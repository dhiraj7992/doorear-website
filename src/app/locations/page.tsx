import type { Metadata } from 'next'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import { LocationsIndexSections } from '@/components/marketing/LocationsPageGrid'
import { locationPages } from '@/lib/location-pages'
import { SITE_NAME } from '@/components/marketing/site-config'

const buyerPersonas = [
  'Operations Head / COO (courier networks)',
  'Hub or Branch Manager',
  'Founder / Business Owner (3PL and courier firms)',
  'Finance Controller / Accounts Lead',
  'Procurement or Commercial Manager',
]

export const metadata: Metadata = {
  title: 'Locations — Courier Software for Major Indian Cities',
  description:
    'Explore Doorear logistics management software deployment fit across Delhi, Mumbai, Hyderabad, Bangalore, and Chennai courier networks.',
  alternates: { canonical: '/locations' },
  openGraph: {
    title: `Locations | ${SITE_NAME}`,
    description:
      'City-focused courier operations pages for India: branch workflows, MIS, and last-mile execution.',
    url: '/locations',
  },
}

export default function LocationsIndexPage() {
  return (
    <>
      <MarketingPageHero
        eyebrow='Locations · India'
        title={
          <>
            Courier management software by{' '}
            <span className='aigocy-gradient-text'>city</span>
          </>
        }
        description='Choose your city to see how Doorear aligns booking, hubs, delivery runs, and MIS for branch-heavy courier and 3PL networks.'
        extra='Each city page speaks to real lane pressure, branch coordination, and SLA expectations in that market. Use these pages to evaluate rollout fit, then map branches, users, and shipment limits with our team before go-live.'
        image={{
          src: '/images/marketing/web-ops-2.jpg',
          alt: 'Indian city operations and branch rollout planning',
        }}
        imagePresentation='default'
        cta={{ href: '/contact', label: 'Discuss your rollout' }}
      />
      <LocationsIndexSections
        locations={locationPages}
        buyerPersonas={buyerPersonas}
      />
    </>
  )
}
