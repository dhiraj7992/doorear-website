'use client'

import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { IconBadge, PremiumCard, ScrollReveal, SectionShell } from '@/components/marketing/primitives'
import type { LocationPage } from '@/lib/location-pages'

type Props = {
  locations: LocationPage[]
  buyerPersonas: string[]
}

export function LocationsPersonasCard({ buyerPersonas }: { buyerPersonas: string[] }) {
  return (
    <ScrollReveal>
      <PremiumCard as='div' glass className='mb-10 p-6 md:p-8'>
        <h2 className='text-xl font-bold text-[var(--app-foreground)]'>
          Best-fit buyer personas
        </h2>
        <p className='mt-2 text-sm text-[var(--app-muted)]'>
          These city pages and ad campaigns are tuned for B2B courier decision
          makers.
        </p>
        <ul className='mt-4 grid gap-2 text-sm text-[var(--app-muted)] md:grid-cols-2'>
          {buyerPersonas.map((persona) => (
            <li key={persona} className='flex gap-2'>
              <span className='mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--app-primary)]' />
              {persona}
            </li>
          ))}
        </ul>
      </PremiumCard>
    </ScrollReveal>
  )
}

export function LocationsCityGrid({ locations }: { locations: LocationPage[] }) {
  return (
    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
      {locations.map((location, i) => (
        <PremiumCard key={location.slug} glass reveal revealDelay={0.04 * i} className='p-6'>
          <IconBadge icon={MapPin} size='sm' />
          <p className='mt-3 text-xs font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
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
            className='mt-4 inline-flex text-sm font-semibold text-[var(--app-primary)] transition hover:gap-1 hover:underline'>
            View {location.city} page →
          </Link>
        </PremiumCard>
      ))}
    </div>
  )
}

export function LocationsIndexSections({
  locations,
  buyerPersonas,
}: Props) {
  return (
    <SectionShell tone='surface' bordered spacing='default'>
      <div className='marketing-container'>
        <LocationsPersonasCard buyerPersonas={buyerPersonas} />
        <LocationsCityGrid locations={locations} />
      </div>
    </SectionShell>
  )
}
