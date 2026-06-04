'use client'

import Link from 'next/link'
import { PremiumCard, ScrollReveal, SectionShell } from '@/components/marketing/primitives'
import type { LocationPage } from '@/lib/location-pages'

export default function LocationCitySections({
  location,
}: {
  location: LocationPage
}) {
  return (
    <SectionShell tone='surface' bordered spacing='default'>
      <div className='marketing-container max-w-4xl space-y-8'>
        <ScrollReveal>
          <PremiumCard as='div' glass className='p-7 md:p-8'>
            <h2 className='text-2xl font-bold text-[var(--app-foreground)] md:text-3xl'>
              Why operators in {location.city} choose Doorear
            </h2>
            <ul className='mt-4 space-y-3 text-base leading-relaxed text-[var(--app-muted)]'>
              {location.painPoints.map((point) => (
                <li key={point} className='flex gap-2'>
                  <span className='mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--app-primary)]' />
                  {point}
                </li>
              ))}
            </ul>
          </PremiumCard>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <PremiumCard as='div' glass className='p-7 md:p-8'>
            <h3 className='text-lg font-semibold text-[var(--app-foreground)]'>
              Deployment fit in {location.state}
            </h3>
            <p className='mt-3 text-sm leading-relaxed text-[var(--app-muted)] md:text-base'>
              Build a phased rollout for branches, users, and shipment allowances.
              Start with high-volume lanes and expand after SLA and billing controls
              stabilize.
            </p>
            <div className='mt-6 flex flex-wrap gap-4 text-sm font-semibold'>
              <Link
                href='/contact'
                className='text-[var(--app-primary)] transition hover:underline'>
                Talk to sales
              </Link>
              <Link
                href='/pricing'
                className='text-[var(--app-primary)] transition hover:underline'>
                See pricing
              </Link>
            </div>
          </PremiumCard>
        </ScrollReveal>
      </div>
    </SectionShell>
  )
}
