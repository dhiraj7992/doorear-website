'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'
import { marketingFaqs } from './faq-content'
import { PremiumCard, ScrollReveal, SectionShell } from './primitives'

type FaqItem = { q: string; a: string }

type Props = {
  items?: readonly FaqItem[]
  title?: string
}

export default function FAQSection({
  items = marketingFaqs,
  title = 'Frequently asked questions',
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <SectionShell tone='card' bordered divider spacing='default'>
      <div className='marketing-container max-w-3xl'>
        <ScrollReveal>
          <h2 className='text-3xl font-bold tracking-tight text-[var(--app-foreground)] md:text-4xl'>
            {title}
          </h2>
        </ScrollReveal>
        <div className='mt-10 space-y-4'>
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <ScrollReveal key={item.q} delay={0.04 * i}>
                <PremiumCard
                  as='div'
                  glass
                  hoverLift={false}
                  className={cn(
                    'p-0',
                    isOpen && 'border-[var(--app-primary)]/25 shadow-md shadow-[var(--app-primary)]/5'
                  )}>
                  <button
                    type='button'
                    className='flex w-full items-start justify-between gap-4 px-6 py-5 text-left'
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}>
                    <span className='text-lg font-semibold text-[var(--app-foreground)]'>
                      {item.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        'mt-1 h-5 w-5 shrink-0 text-[var(--app-muted)] transition-transform duration-300',
                        isOpen && 'rotate-180 text-[var(--app-primary)]'
                      )}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-[grid-template-rows] duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    )}>
                    <div className='overflow-hidden'>
                      <p className='border-t border-[var(--app-border)] px-6 pb-5 pt-4 text-base leading-relaxed text-[var(--app-muted)]'>
                        {item.a}
                      </p>
                    </div>
                  </div>
                </PremiumCard>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </SectionShell>
  )
}
