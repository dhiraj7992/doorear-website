import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import LocationCitySections from '@/components/marketing/LocationCitySections'
import {
  getLocationBySlug,
  locationPages,
  type LocationPage,
} from '@/lib/location-pages'
import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'
import { breadcrumbJsonLd } from '@/lib/seo-jsonld'

type Props = {
  params: Promise<{ city: string }>
}

export function generateStaticParams() {
  return locationPages.map((location) => ({ city: location.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const location = getLocationBySlug(city)
  if (!location) return { title: 'Location not found' }

  return {
    title: `${location.city} Courier Management Software`,
    description: `${SITE_NAME} in ${location.city}: logistics management software for ${location.titleQualifier}.`,
    alternates: { canonical: `/locations/${location.slug}` },
    openGraph: {
      title: `${location.city} | ${SITE_NAME}`,
      description: `Courier and 3PL operations software in ${location.city}, ${location.state}.`,
      url: `/locations/${location.slug}`,
    },
  }
}

function ServiceJsonLd({ location }: { location: LocationPage }) {
  const siteUrl = getSiteUrl()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${SITE_NAME} logistics software in ${location.city}`,
    areaServed: {
      '@type': 'City',
      name: location.city,
    },
    serviceType: 'Courier management software',
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: siteUrl,
    },
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default async function LocationCityPage({ params }: Props) {
  const { city } = await params
  const location = getLocationBySlug(city)
  if (!location) notFound()

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Locations', path: '/locations' },
    { name: location.city, path: `/locations/${location.slug}` },
  ])

  return (
    <>
      <ServiceJsonLd location={location} />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <MarketingPageHero
        eyebrow={`Location · ${location.city}`}
        title={
          <>
            <span className='aigocy-gradient-text'>{location.city}</span> logistics
            management software for courier teams
          </>
        }
        description={`Doorear helps operators in ${location.city} run bookings, hub operations, delivery runs, and MIS in one branch-aware platform.`}
        extra={`Designed for ${location.titleQualifier}.`}
        image={{
          src: '/images/marketing/web-ops-3.jpg',
          alt: `${location.city} courier and logistics operations workflow`,
        }}
        imagePresentation='default'
        cta={{ href: '/contact', label: `Book ${location.city} demo` }}
      />
      <LocationCitySections location={location} />
    </>
  )
}
