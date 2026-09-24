'use client'

import Link from 'next/link'
import { PremiumCard, ScrollReveal, SectionShell } from '@/components/marketing/primitives'
import type { LocationPage } from '@/lib/location-pages'
import { solutionPages } from '@/lib/solution-pages'

export default function LocationCitySections({
  location,
}: {
  location: LocationPage
}) {
  const relatedSolutions = location.relatedSolutionSlugs
    .map((slug) => solutionPages.find((p) => p.slug === slug))
    .filter(Boolean)

  return (
    <SectionShell tone='surface' bordered spacing='default'>
      <div className='marketing-container max-w-4xl space-y-8'>
        <ScrollReveal>
          <PremiumCard as='div' glass className='p-7 md:p-8'>
            <h2 className='text-2xl font-bold text-[var(--app-foreground)] md:text-3xl'>
              Logistics network context in {location.city}
            </h2>
            <p className='mt-4 text-base leading-relaxed text-[var(--app-muted)] md:text-lg'>
              {location.intro}
            </p>
            <ul className='mt-5 space-y-2.5 text-sm leading-relaxed text-[var(--app-muted)] md:text-base'>
              {location.localHooks.map((hook) => (
                <li key={hook} className='flex gap-2'>
                  <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--app-accent)]' />
                  {hook}
                </li>
              ))}
            </ul>
          </PremiumCard>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <PremiumCard as='div' glass className='p-7 md:p-8'>
            <h2 className='text-2xl font-bold text-[var(--app-foreground)] md:text-3xl'>
              Why operators in {location.city} evaluate Doorear
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

        {relatedSolutions.length > 0 ? (
          <ScrollReveal delay={0.08}>
            <PremiumCard as='div' glass className='p-7 md:p-8'>
              <h3 className='text-lg font-semibold text-[var(--app-foreground)]'>
                Related solutions for {location.city} networks
              </h3>
              <div className='mt-4 flex flex-wrap gap-3'>
                {relatedSolutions.map((page) =>
                  page ? (
                    <Link
                      key={page.slug}
                      href={`/solutions/${page.slug}`}
                      className='rounded-full border border-[var(--app-border)] bg-white/90 px-4 py-2 text-sm font-semibold text-[var(--app-primary)] transition hover:border-[var(--app-primary)]/40 hover:shadow-sm'>
                      {page.titleHighlight || page.title}
                    </Link>
                  ) : null
                )}
              </div>
            </PremiumCard>
          </ScrollReveal>
        ) : null}

        <ScrollReveal delay={0.1}>
          <PremiumCard as='div' glass className='p-7 md:p-8'>
            <h3 className='text-lg font-semibold text-[var(--app-foreground)]'>
              Guides & next steps ({location.state})
            </h3>
            <p className='mt-3 text-sm leading-relaxed text-[var(--app-muted)] md:text-base'>
              Build a phased rollout for branches, users, and shipment allowances.
              Start with high-volume lanes and expand after SLA and billing controls
              stabilize. Doorear does not claim a physical office in {location.city}—
              these pages describe network-ops fit for Indian metros.
            </p>
            <div className='mt-5 flex flex-wrap gap-3'>
              {location.relatedGuides.map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className='text-sm font-semibold text-[var(--app-primary)] transition hover:underline'>
                  {g.label}
                </Link>
              ))}
            </div>
            <div className='mt-6 flex flex-wrap gap-4 text-sm font-semibold'>
              <Link
                href='/contact'
                className='rounded-full bg-[var(--app-primary)] px-5 py-2.5 text-white shadow-md shadow-teal-700/20 transition hover:-translate-y-0.5'>
                Book {location.city} demo
              </Link>
              <Link
                href='/pricing'
                className='rounded-full border border-[var(--app-border)] bg-white px-5 py-2.5 text-[var(--app-foreground)] transition hover:border-[var(--app-primary)]/30'>
                See pricing
              </Link>
            </div>
          </PremiumCard>
        </ScrollReveal>
      </div>
    </SectionShell>
  )
}
