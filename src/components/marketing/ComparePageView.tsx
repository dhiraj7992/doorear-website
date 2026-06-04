import Link from 'next/link'
import CTABlock from '@/components/marketing/CTABlock'
import FAQSection from '@/components/marketing/FAQSection'
import { ScrollReveal, SectionShell } from '@/components/marketing/primitives'
import type { ComparePage } from '@/lib/compare-pages'

export default function ComparePageView({ page }: { page: ComparePage }) {
  return (
    <>
      <SectionShell tone='surface' bordered spacing='default'>
        <div className='marketing-container max-w-4xl'>
          <ScrollReveal>
            <p className='text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--app-muted)]'>
              Compare
            </p>
            <h1 className='mt-3 text-3xl font-bold tracking-tight text-[var(--app-foreground)] md:text-4xl'>
              {page.h1}
            </h1>
            <p className='mt-6 text-lg leading-relaxed text-[var(--app-muted)]'>
              {page.summary}
            </p>
          </ScrollReveal>

          <ScrollReveal className='mt-12 overflow-x-auto'>
            <table className='w-full min-w-[520px] border-collapse text-left text-sm'>
              <thead>
                <tr className='border-b border-[var(--app-border)]'>
                  <th className='py-3 pr-4 font-semibold text-[var(--app-foreground)]'>
                    Aspect
                  </th>
                  <th className='py-3 pr-4 font-semibold text-[var(--app-primary)]'>
                    Logistics OS (Doorear)
                  </th>
                  <th className='py-3 font-semibold text-[var(--app-muted)]'>Typical TMS</th>
                </tr>
              </thead>
              <tbody>
                {page.comparisonRows.map((row) => (
                  <tr key={row.aspect} className='border-b border-[var(--app-border)]/80'>
                    <td className='py-4 pr-4 font-medium text-[var(--app-foreground)]'>
                      {row.aspect}
                    </td>
                    <td className='py-4 pr-4 text-[var(--app-muted)]'>{row.los}</td>
                    <td className='py-4 text-[var(--app-muted)]'>{row.tms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollReveal>

          <div className='mt-14 grid gap-8 md:grid-cols-2'>
            <ScrollReveal>
              <div className='premium-glass-panel rounded-2xl border border-[var(--app-primary)]/20 p-6 md:p-8'>
                <h2 className='text-lg font-bold text-[var(--app-foreground)]'>
                  When Doorear fits
                </h2>
                <ul className='mt-4 space-y-2 text-sm text-[var(--app-muted)]'>
                  {page.whenDoorear.map((item) => (
                    <li key={item} className='flex gap-2'>
                      <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--app-primary)]' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <div className='premium-glass-panel rounded-2xl border border-[var(--app-border)] p-6 md:p-8'>
                <h2 className='text-lg font-bold text-[var(--app-foreground)]'>
                  When to evaluate alternatives
                </h2>
                <ul className='mt-4 space-y-2 text-sm text-[var(--app-muted)]'>
                  {page.whenAlternative.map((item) => (
                    <li key={item} className='flex gap-2'>
                      <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--app-muted)]' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className='mt-10 text-sm text-[var(--app-muted)]'>
            Related:{' '}
            <Link href='/glossary/logistics-operating-system' className='font-semibold text-[var(--app-primary)] hover:underline'>
              LOS definition
            </Link>
            {' · '}
            <Link href='/glossary/tms' className='font-semibold text-[var(--app-primary)] hover:underline'>
              TMS definition
            </Link>
            {' · '}
            <Link href='/solutions/transport-management' className='font-semibold text-[var(--app-primary)] hover:underline'>
              Transport management
            </Link>
          </ScrollReveal>
        </div>
      </SectionShell>
      <FAQSection items={page.faqs} title='Comparison FAQ' />
      <CTABlock
        title='Map Doorear to your network'
        description='Book a demo to see bookings, hubs, MIS, and branch permissions on your data model—with honest scope on modules and integrations.'
      />
    </>
  )
}
