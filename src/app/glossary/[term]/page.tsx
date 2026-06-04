import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CTABlock from '@/components/marketing/CTABlock'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import { ScrollReveal, SectionShell } from '@/components/marketing/primitives'
import { SITE_NAME } from '@/components/marketing/site-config'
import {
  getGlossaryBySlug,
  glossaryTerms,
} from '@/lib/glossary-terms'
import {
  breadcrumbJsonLd,
  definedTermJsonLd,
} from '@/lib/seo-jsonld'

type Props = { params: Promise<{ term: string }> }

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ term: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { term } = await params
  const entry = getGlossaryBySlug(term)
  if (!entry) return { title: 'Term not found' }

  return {
    title: `What is ${entry.term}?`,
    description: entry.shortDefinition,
    alternates: { canonical: `/glossary/${entry.slug}` },
    openGraph: {
      title: `${entry.term} | ${SITE_NAME} Glossary`,
      description: entry.shortDefinition,
      url: `/glossary/${entry.slug}`,
    },
  }
}

export default async function GlossaryTermPage({ params }: Props) {
  const { term: termSlug } = await params
  const entry = getGlossaryBySlug(termSlug)
  if (!entry) notFound()

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Glossary', path: '/glossary' },
    { name: entry.term, path: `/glossary/${entry.slug}` },
  ])

  const related = (entry.relatedSlugs ?? [])
    .map((s) => getGlossaryBySlug(s))
    .filter(Boolean)

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermJsonLd(entry)) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <MarketingPageHero
        eyebrow='Glossary'
        title={
          <>
            <span className='aigocy-gradient-text'>{entry.term}</span>
          </>
        }
        description={entry.shortDefinition}
        cta={{ href: '/contact', label: 'Book a demo' }}
        secondaryCta={{ href: '/glossary', label: 'All terms' }}
      />
      <SectionShell tone='surface' bordered spacing='default'>
        <div className='marketing-container max-w-3xl'>
          <ScrollReveal>
            <div className='premium-glass-panel rounded-3xl border border-[var(--app-border)] p-8 md:p-10'>
              <h2 className='text-xl font-semibold text-[var(--app-foreground)]'>
                Definition
              </h2>
              <p className='mt-4 text-base leading-relaxed text-[var(--app-muted)]'>
                {entry.definition}
              </p>
              {related.length > 0 && (
                <div className='mt-10'>
                  <h3 className='text-sm font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
                    Related terms
                  </h3>
                  <ul className='mt-4 flex flex-wrap gap-2'>
                    {related.map(
                      (r) =>
                        r && (
                          <li key={r.slug}>
                            <Link
                              href={`/glossary/${r.slug}`}
                              className='rounded-lg border border-[var(--app-border)] bg-white/80 px-3 py-1.5 text-sm font-medium text-[var(--app-primary)] hover:underline'>
                              {r.term}
                            </Link>
                          </li>
                        )
                    )}
                  </ul>
                </div>
              )}
              <p className='mt-10 text-sm text-[var(--app-muted)]'>
                <Link href='/faq' className='font-semibold text-[var(--app-primary)] hover:underline'>
                  FAQ
                </Link>
                {' · '}
                <Link href='/features' className='font-semibold text-[var(--app-primary)] hover:underline'>
                  Features
                </Link>
                {' · '}
                <Link href='/solutions' className='font-semibold text-[var(--app-primary)] hover:underline'>
                  Solutions
                </Link>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionShell>
      <CTABlock
        title={`See how ${SITE_NAME} applies this in your network`}
        description='Walk through bookings, hubs, MIS, and permissions on a live demo—scoped to modules deployed for your tenant.'
      />
    </>
  )
}
