import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/marketing/SectionHeading'
import { SectionShell } from '@/components/marketing/primitives'
import { rankingLandingLinks } from '@/lib/ranking-landing-links'

export default function HomeSolutionsCapabilityStrip() {
  return (
    <SectionShell tone='card' bordered spacing='default' className='home-aigocy-theme'>
      <div className='marketing-container'>
        <SectionHeading
          aigocy
          eyebrow='Solutions by capability'
          title='Software built for how Indian logistics networks actually run'
          description='Explore Doorear landing pages for multi-carrier shipping, courier aggregation, marketplace coordination, transport management, tracking, RFQs, partners, franchises, last mile, and supply chain visibility.'
        />
        <ul className='mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {rankingLandingLinks.map((item) => (
            <li key={item.href} className='flex min-h-0'>
              <div className='premium-glass-panel flex w-full flex-col rounded-2xl border border-[var(--app-border)] p-5 transition hover:border-[var(--app-primary)]/35 hover:shadow-md'>
                <Link
                  href={item.href}
                  className='group flex min-h-0 flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-primary)] focus-visible:ring-offset-2 rounded-lg'>
                  <span className='text-base font-semibold text-[var(--app-foreground)] group-hover:text-[var(--app-primary)]'>
                    {item.label}
                  </span>
                  <p className='mt-2 flex-1 text-sm leading-relaxed text-[var(--app-muted)]'>
                    {item.description}
                  </p>
                  <span className='mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--app-primary)]'>
                    View solution
                    <ArrowRight className='h-4 w-4 transition group-hover:translate-x-0.5' />
                  </span>
                </Link>
                <Link
                  href={`/blog/${item.blogSlug}`}
                  className='mt-4 inline-flex items-center gap-1 border-t border-[var(--app-border)] pt-4 text-xs font-medium text-[var(--app-muted)] hover:text-[var(--app-primary)] hover:underline'>
                  Read guide →
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <p className='mt-8 text-center text-sm text-[var(--app-muted)]'>
          Prefer guides first?{' '}
          <Link
            href='/blog'
            className='font-semibold text-[var(--app-primary)] hover:underline'>
            Read capability articles on the blog
          </Link>{' '}
          —each links back to the solution page above.
        </p>
      </div>
    </SectionShell>
  )
}
