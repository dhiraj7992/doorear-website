import type { Metadata } from 'next'
import Link from 'next/link'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import { MotionInView } from '@/components/marketing/MotionInView'
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
        title='Courier operations pages by city'
        description='Choose your city to see how Doorear aligns booking, hubs, delivery runs, and MIS for branch-heavy courier and 3PL networks.'
        image={{
          src: '/images/marketing/page-solutions.jpg',
          alt: 'Indian city operations and branch rollout planning',
        }}
        cta={{ href: '/contact', label: 'Discuss your rollout' }}
      />
      <section className='border-b border-[var(--app-border)] bg-[var(--app-surface)] py-16 md:py-20'>
        <div className='marketing-container'>
          <div className='mb-10 rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-6 shadow-sm'>
            <h2 className='text-xl font-bold text-[var(--app-foreground)]'>
              Best-fit buyer personas
            </h2>
            <p className='mt-2 text-sm text-[var(--app-muted)]'>
              These city pages and ad campaigns are tuned for B2B courier decision
              makers.
            </p>
            <ul className='mt-4 grid gap-2 text-sm text-[var(--app-muted)] md:grid-cols-2'>
              {buyerPersonas.map((persona) => (
                <li key={persona}>- {persona}</li>
              ))}
            </ul>
          </div>
          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {locationPages.map((location) => (
              <MotionInView key={location.slug}>
                <article className='rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-6 shadow-sm'>
                  <p className='text-xs font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
                    {location.state}
                  </p>
                  <h2 className='mt-2 text-xl font-bold text-[var(--app-foreground)]'>
                    {location.city}
                  </h2>
                  <p className='mt-3 text-sm leading-relaxed text-[var(--app-muted)]'>
                    Optimized for {location.titleQualifier}.
                  </p>
                  <Link
                    href={`/locations/${location.slug}`}
                    className='mt-4 inline-flex text-sm font-semibold text-[var(--app-primary)] hover:underline'>
                    View {location.city} page
                  </Link>
                </article>
              </MotionInView>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
