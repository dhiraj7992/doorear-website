import type { Metadata } from 'next'
import Link from 'next/link'
import CTABlock from '@/components/marketing/CTABlock'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import { ScrollReveal, SectionShell } from '@/components/marketing/primitives'
import { SITE_NAME } from '@/components/marketing/site-config'
import { comparePages } from '@/lib/compare-pages'
import { breadcrumbJsonLd } from '@/lib/seo-jsonld'
import { safeJsonLdStringify } from '@/lib/safe-jsonld'

export const metadata: Metadata = {
  title: 'Compare — Logistics Software & Marketplace',
  description:
    'Compare Doorear with TMS tools, shipping aggregators, and courier software—honest B2B operator positioning for Indian networks.',
  alternates: { canonical: '/compare' },
  openGraph: {
    title: `Compare | ${SITE_NAME}`,
    description: 'Decision guides for logistics marketplace and operating system buyers.',
    url: '/compare',
  },
}

export default function CompareHubPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Compare', path: '/compare' },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(breadcrumbs) }}
      />
      <MarketingPageHero
        eyebrow='Resources · Compare'
        title={
          <>
            Compare <span className='aigocy-gradient-text'>logistics software approaches</span>
          </>
        }
        description='Side-by-side guides for operators evaluating a logistics operating system, TMS, courier software, or consumer shipping aggregators.'
        image={{
          src: '/images/marketing/page-solutions.jpg',
          alt: 'Doorear compare hub',
        }}
        imagePresentation='default'
        cta={{ href: '/contact', label: 'Book a demo' }}
        secondaryCta={{ href: '/learn', label: 'Learn guides' }}
      />
      <SectionShell tone='card' bordered spacing='default'>
        <div className='marketing-container max-w-3xl'>
          <ScrollReveal>
            <ul className='space-y-5'>
              {comparePages.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/compare/${page.slug}`}
                    className='premium-glass-panel block rounded-2xl border border-[var(--app-border)] p-6 transition hover:border-[var(--app-primary)]/30 hover:shadow-md'>
                    <h2 className='text-lg font-bold text-[var(--app-foreground)]'>
                      {page.h1}
                    </h2>
                    <p className='mt-2 text-sm leading-relaxed text-[var(--app-muted)]'>
                      {page.summary.slice(0, 160)}…
                    </p>
                    <span className='mt-4 inline-flex text-sm font-semibold text-[var(--app-primary)]'>
                      Read comparison →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </SectionShell>
      <CTABlock
        title='Still deciding?'
        description='We will map your branch model and recommend LOS, TMS, or hybrid rollout paths—without overselling undeployed integrations.'
      />
    </>
  )
}
