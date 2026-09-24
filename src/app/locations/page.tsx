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
  title: 'India Locations — Courier & 3PL Logistics OS by City',
  description:
    'Doorear logistics OS fit across Delhi, Mumbai, Hyderabad, Bangalore, Chennai, Pune, Kolkata, Ahmedabad, Jaipur, Kochi, and Indore—network coverage context for Indian courier and 3PL operators, not physical offices.',
  alternates: { canonical: '/locations' },
  openGraph: {
    title: `Locations | ${SITE_NAME} logistics OS`,
    description:
      'City-focused courier operations pages for India: branch workflows, MIS, last-mile execution, and demo next steps.',
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
            Courier &amp; 3PL software by{' '}
            <span className='doorear-gradient-text aigocy-gradient-text'>Indian city</span>
          </>
        }
        description='Choose your city for unique logistics-network context—how Doorear aligns booking, hubs, delivery runs, and MIS for branch-heavy operators in that market.'
        extra='These pages describe network-ops fit across Indian metros—not Doorear offices. Evaluate rollout fit, then map branches, users, and shipment limits with our team before go-live.'
        image={{
          src: '/images/marketing/web-ops-2.jpg',
          alt: 'Indian city operations and branch rollout planning',
        }}
        imagePresentation='default'
        cta={{ href: '/contact', label: 'Book a network demo' }}
        secondaryCta={{ href: '/pricing', label: 'See pricing' }}
      />
      <LocationsIndexSections
        locations={locationPages}
        buyerPersonas={buyerPersonas}
      />
    </>
  )
}
