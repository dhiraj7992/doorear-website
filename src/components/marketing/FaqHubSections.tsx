'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { FaqCategory } from '@/lib/geo-faq-hub'
import { PremiumCard, ScrollReveal, SectionShell } from './primitives'

type Props = { categories: FaqCategory[] }

export default function FaqHubSections({ categories }: Props) {
  const [openKey, setOpenKey] = useState<string | null>(
    `${categories[0]?.id}-0`
  )

  return (
    <SectionShell tone='surface' bordered spacing='default'>
      <div className='marketing-container max-w-3xl'>
        <ScrollReveal>
          <p className='text-sm leading-relaxed text-[var(--app-muted)]'>
            Answers are written for operators, finance, and IT leaders evaluating
            logistics software in India. See also our{' '}
            <Link href='/glossary' className='font-semibold text-[var(--app-primary)] hover:underline'>
              glossary
            </Link>
            ,{' '}
            <Link
              href='/compare/logistics-operating-system-vs-tms'
              className='font-semibold text-[var(--app-primary)] hover:underline'>
              LOS vs TMS comparison
            </Link>
            , and{' '}
            <Link href='/blog' className='font-semibold text-[var(--app-primary)] hover:underline'>
              blog guides
            </Link>
            .
          </p>
        </ScrollReveal>

        <div className='mt-12 space-y-14'>
          {categories.map((category) => (
            <section key={category.id} id={category.id}>
              <h2 className='text-xl font-bold text-[var(--app-foreground)] md:text-2xl'>
                {category.title}
              </h2>
              <div className='mt-6 space-y-3'>
                {category.items.map((item, i) => {
                  const key = `${category.id}-${i}`
                  const isOpen = openKey === key
                  return (
                    <PremiumCard
                      key={key}
                      as='div'
                      glass
                      hoverLift={false}
                      className={cn(
                        'p-0',
                        isOpen && 'border-[var(--app-primary)]/25 shadow-md'
                      )}>
                      <button
                        type='button'
                        className='flex w-full items-start justify-between gap-4 px-6 py-5 text-left'
                        aria-expanded={isOpen}
                        onClick={() => setOpenKey(isOpen ? null : key)}>
                        <span className='text-base font-semibold text-[var(--app-foreground)]'>
                          {item.q}
                        </span>
                        <ChevronDown
                          className={cn(
                            'mt-1 h-5 w-5 shrink-0 transition-transform',
                            isOpen && 'rotate-180 text-[var(--app-primary)]'
                          )}
                          aria-hidden
                        />
                      </button>
                      <div
                        className={cn(
                          'grid transition-[grid-template-rows] duration-300',
                          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        )}>
                        <div className='overflow-hidden'>
                          <p className='border-t border-[var(--app-border)] px-6 pb-5 pt-4 text-base leading-relaxed text-[var(--app-muted)]'>
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </PremiumCard>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
