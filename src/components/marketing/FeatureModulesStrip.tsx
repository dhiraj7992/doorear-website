import Link from 'next/link'
import { ScrollReveal, SectionShell } from '@/components/marketing/primitives'
import { featurePages } from '@/lib/feature-pages'

export default function FeatureModulesStrip() {
  return (
    <SectionShell tone='card' bordered spacing='default'>
      <div className='marketing-container'>
        <ScrollReveal>
          <h2 className='text-2xl font-bold text-[var(--app-foreground)]'>
            Deep-dive modules
          </h2>
          <p className='mt-3 max-w-2xl text-sm leading-relaxed text-[var(--app-muted)] md:text-base'>
            Procurement RFQ and contract workflows live inside the same tenant as
            bookings and hub ops—explore how each module maps to your rollout.
          </p>
          <ul className='mt-8 grid gap-4 md:grid-cols-2'>
            {featurePages.map((feature) => (
              <li key={feature.slug}>
                <Link
                  href={`/features/${feature.slug}`}
                  className='premium-glass-panel block rounded-2xl border border-[var(--app-border)] p-5 transition hover:border-[var(--app-primary)]/30 hover:shadow-md'>
                  <p className='text-xs font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
                    {feature.eyebrow.replace(/^Features · /, '')}
                  </p>
                  <p className='mt-2 font-semibold text-[var(--app-foreground)]'>
                    {feature.metaTitle}
                  </p>
                  <p className='mt-2 text-sm text-[var(--app-muted)]'>
                    {feature.description.slice(0, 120)}…
                  </p>
                  <span className='mt-3 inline-flex text-sm font-semibold text-[var(--app-primary)]'>
                    View module →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </SectionShell>
  )
}
