'use client'

import Link from 'next/link'
import { Users } from 'lucide-react'
import { IconBadge, PremiumCard, ScrollReveal, SectionShell } from '@/components/marketing/primitives'
import type { SolutionPage } from '@/lib/solution-pages'

export function SolutionsAudienceGrid({ pages }: { pages: SolutionPage[] }) {
  return (
    <SectionShell tone='surface' bordered spacing='default'>
      <div className='marketing-container'>
        <ScrollReveal>
          <h2 className='text-2xl font-bold text-[var(--app-foreground)] md:text-3xl'>
            Solutions by audience
          </h2>
          <p className='mt-3 max-w-2xl text-sm leading-relaxed text-[var(--app-muted)] md:text-base'>
            DoorEar connects manufacturers, eCommerce brands, transporters, and 3PL
            operators on a unified logistics marketplace and operating system.
          </p>
        </ScrollReveal>
        <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {pages.map((page, i) => (
            <PremiumCard key={page.slug} glass reveal revealDelay={0.04 * i} className='p-6'>
              <IconBadge icon={Users} size='sm' />
              <h3 className='mt-3 text-lg font-bold text-[var(--app-foreground)]'>
                {page.metaTitle.replace(/^Doorear\s*/i, '')}
              </h3>
              <p className='mt-3 text-sm leading-relaxed text-[var(--app-muted)]'>
                {page.intro.slice(0, 140)}…
              </p>
              <Link
                href={`/solutions/${page.slug}`}
                className='mt-4 inline-flex text-sm font-semibold text-[var(--app-primary)] hover:underline'>
                Learn more →
              </Link>
            </PremiumCard>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
