import Link from 'next/link'
import { ScrollReveal, SectionShell } from '@/components/marketing/primitives'
import type { GlossaryTerm } from '@/lib/glossary-terms'

export default function GlossaryIndex({ terms }: { terms: GlossaryTerm[] }) {
  const byLetter = terms.reduce<Record<string, GlossaryTerm[]>>((acc, term) => {
    const letter = term.term[0]?.toUpperCase() ?? '#'
    if (!acc[letter]) acc[letter] = []
    acc[letter].push(term)
    return acc
  }, {})

  return (
    <SectionShell tone='surface' bordered spacing='default'>
      <div className='marketing-container max-w-4xl'>
        <ScrollReveal>
          <p className='text-sm leading-relaxed text-[var(--app-muted)] md:text-base'>
            Plain-language definitions for logistics, courier, and supply chain
            terms—optimized for clarity in search and AI-generated answers.{' '}
            <Link href='/faq' className='font-semibold text-[var(--app-primary)] hover:underline'>
              View all FAQs
            </Link>
            .
          </p>
        </ScrollReveal>
        <div className='mt-12 space-y-10'>
          {Object.keys(byLetter)
            .sort()
            .map((letter) => (
              <section key={letter}>
                <h2 className='text-lg font-bold text-[var(--app-primary)]'>{letter}</h2>
                <ul className='mt-4 space-y-4'>
                  {byLetter[letter].map((term) => (
                    <li key={term.slug}>
                      <Link
                        href={`/glossary/${term.slug}`}
                        className='group block rounded-2xl border border-[var(--app-border)] bg-white/80 p-5 transition hover:border-[var(--app-primary)]/30 hover:shadow-md'>
                        <p className='font-semibold text-[var(--app-foreground)] group-hover:text-[var(--app-primary)]'>
                          {term.term}
                        </p>
                        <p className='mt-2 text-sm leading-relaxed text-[var(--app-muted)]'>
                          {term.shortDefinition}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
        </div>
      </div>
    </SectionShell>
  )
}
