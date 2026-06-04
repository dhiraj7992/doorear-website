import Link from 'next/link'
import { Images, LayoutGrid, Sparkles } from 'lucide-react'
import { LinkButton } from '@/components/ui'
import { IconBadge, ScrollReveal, SectionShell } from './primitives'

export default function ProductUiCallout() {
  return (
    <SectionShell
      tone='card'
      bordered
      spacing='compact'
      divider
      aria-label='Where to see product screenshots'>
      <div className='marketing-container'>
        <ScrollReveal>
          <div className='premium-glass-panel flex flex-col gap-8 rounded-3xl border border-[var(--app-border)] p-8 md:flex-row md:items-center md:justify-between md:p-10 lg:gap-12'>
            <div className='max-w-xl space-y-4'>
              <p className='text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--app-muted)]'>
                Product UI on the site
              </p>
              <div className='flex flex-wrap gap-2'>
                <span className='inline-flex items-center gap-2 rounded-full border border-[var(--app-border)] bg-white/60 px-3 py-1 text-xs font-semibold text-[var(--app-foreground)]'>
                  <Sparkles className='h-3.5 w-3.5 text-amber-600' aria-hidden />
                  Real in-app screenshots
                </span>
              </div>
              <p className='text-base leading-relaxed text-[var(--app-foreground)]'>
                We surface real in-app screenshots across the site—MIS and access on{' '}
                <Link
                  href='/features'
                  className='font-semibold text-[var(--app-primary)] underline-offset-2 hover:underline'>
                  Features
                </Link>
                , hub execution on{' '}
                <Link
                  href='/solutions'
                  className='font-semibold text-[var(--app-primary)] underline-offset-2 hover:underline'>
                  Solutions
                </Link>
                , and commercial analytics next to plans on{' '}
                <Link
                  href='/pricing'
                  className='font-semibold text-[var(--app-primary)] underline-offset-2 hover:underline'>
                  Pricing
                </Link>
                —so each page earns its visual instead of stacking everything on the
                homepage.
              </p>
              <ul className='flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
                {[
                  { icon: LayoutGrid, label: 'Features — MIS & access' },
                  { icon: Images, label: 'Solutions — hub execution' },
                ].map((item) => (
                  <li
                    key={item.label}
                    className='inline-flex items-center gap-2 text-xs font-medium text-[var(--app-muted)]'>
                    <IconBadge icon={item.icon} size='sm' />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-shrink-0 flex-wrap gap-3'>
              <LinkButton href='/features' variant='secondary' size='section'>
                Explore Features
              </LinkButton>
              <LinkButton
                href='/solutions'
                variant='secondary'
                size='section'
                secondaryTone='muted'>
                See Solutions
              </LinkButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionShell>
  )
}
