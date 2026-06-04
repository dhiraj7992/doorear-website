import Link from 'next/link'
import { PremiumCard, ScrollReveal, SectionShell } from '@/components/marketing/primitives'
import type { SolutionPage } from '@/lib/solution-pages'

export default function SolutionAudienceSections({
  solution,
}: {
  solution: SolutionPage
}) {
  return (
    <SectionShell tone='surface' bordered spacing='default'>
      <div className='marketing-container max-w-4xl space-y-8'>
        <ScrollReveal>
          <PremiumCard as='div' glass className='p-7 md:p-8'>
            <h2 className='text-2xl font-bold text-[var(--app-foreground)] md:text-3xl'>
              Challenges we address
            </h2>
            <ul className='mt-4 space-y-3 text-base leading-relaxed text-[var(--app-muted)]'>
              {solution.painPoints.map((point) => (
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
            <h2 className='text-2xl font-bold text-[var(--app-foreground)] md:text-3xl'>
              How Doorear helps
            </h2>
            <ul className='mt-4 space-y-3 text-base leading-relaxed text-[var(--app-muted)]'>
              {solution.benefits.map((benefit) => (
                <li key={benefit} className='flex gap-2'>
                  <span className='mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600' />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className='mt-6 flex flex-wrap gap-4 text-sm font-semibold'>
              <Link href='/contact' className='text-[var(--app-primary)] hover:underline'>
                Book a demo
              </Link>
              <Link href='/features' className='text-[var(--app-primary)] hover:underline'>
                Explore features
              </Link>
              <Link href='/pricing' className='text-[var(--app-primary)] hover:underline'>
                View pricing
              </Link>
            </div>
          </PremiumCard>
        </ScrollReveal>
      </div>
    </SectionShell>
  )
}
