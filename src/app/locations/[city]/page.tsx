import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import { MotionInView } from '@/components/marketing/MotionInView'
import {
  getLocationBySlug,
  locationPages,
  type LocationPage,
} from '@/lib/location-pages'
import { SITE_NAME } from '@/components/marketing/site-config'

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

function LocalBusinessJsonLd({ location }: { location: LocationPage }) {
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
      url: 'https://doorear.com',
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

  return (
    <>
      <LocalBusinessJsonLd location={location} />
      <MarketingPageHero
        eyebrow={`Location · ${location.city}`}
        title={`${location.city} logistics management software for courier teams`}
        description={`Doorear helps operators in ${location.city} run bookings, hub operations, delivery runs, and MIS in one branch-aware platform.`}
        extra={`Designed for ${location.titleQualifier}.`}
        image={{
          src: '/images/marketing/page-features.jpg',
          alt: `${location.city} courier and logistics operations workflow`,
        }}
        cta={{ href: '/contact', label: `Book ${location.city} demo` }}
      />
      <section className='border-b border-[var(--app-border)] bg-[var(--app-surface)] py-16 md:py-20'>
        <div className='marketing-container max-w-4xl space-y-8'>
          <MotionInView>
            <h2 className='text-2xl font-bold text-[var(--app-foreground)] md:text-3xl'>
              Why operators in {location.city} choose Doorear
            </h2>
            <ul className='mt-4 space-y-3 text-base leading-relaxed text-[var(--app-muted)]'>
              {location.painPoints.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </MotionInView>

          <MotionInView delay={0.08}>
            <div className='rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-7 shadow-sm'>
              <h3 className='text-lg font-semibold text-[var(--app-foreground)]'>
                Deployment fit in {location.state}
              </h3>
              <p className='mt-3 text-sm leading-relaxed text-[var(--app-muted)]'>
                Build a phased rollout for branches, users, and shipment allowances.
                Start with high-volume lanes and expand after SLA and billing controls
                stabilize.
              </p>
              <div className='mt-4 flex flex-wrap gap-4 text-sm font-semibold'>
                <Link
                  href='/contact'
                  className='text-[var(--app-primary)] hover:underline'>
                  Talk to sales
                </Link>
                <Link
                  href='/pricing'
                  className='text-[var(--app-primary)] hover:underline'>
                  See pricing
                </Link>
              </div>
            </div>
          </MotionInView>
        </div>
      </section>
    </>
  )
}
