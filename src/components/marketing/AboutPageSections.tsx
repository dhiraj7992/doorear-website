'use client'

import { Compass, HeartHandshake, Layers, Sparkles } from 'lucide-react'
import SectionHeading from '@/components/marketing/SectionHeading'
import { AudienceCard, ScrollReveal, SectionShell } from '@/components/marketing/primitives'
import { SITE_NAME } from '@/components/marketing/site-config'

const pillars = [
  {
    icon: Compass,
    title: 'Operational truth first',
    body: 'We design for dispatchers, hub supervisors, and branch heads—the people who move freight when lanes jam and customers escalate. Screens prioritize clarity under pressure.',
  },
  {
    icon: Layers,
    title: 'India-shaped defaults',
    body: 'GST-oriented profiles, PIN-level coverage, multi-city hubs, and branch hierarchy are not “custom projects”—they are the baseline for how Indian courier and 3PL networks run.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent commercial reality',
    body: 'Where subscriptions renew with offline coordination, we say so. Usage allowances, seat limits, and shipment top-ups stay visible in-product so finance and ops negotiate from the same numbers.',
  },
  {
    icon: Sparkles,
    title: 'Restrained motion & craft',
    body: 'The interface follows the design system: primary blue for action, dark navigation idiom, stroke icons, and subtle motion that respects prefers-reduced-motion—so doorear.com feels like the logged-in app.',
  },
]

export function AboutPillarsSection() {
  return (
    <SectionShell tone='surface' bordered spacing='default'>
      <div className='marketing-container'>
        <SectionHeading
          aigocy
          align='center'
          eyebrow='Principles'
          title='Principles behind the product'
          description={`These pillars keep ${SITE_NAME} aligned with courier operations on the ground—and with how enterprises in India evaluate and buy software.`}
        />
        <div className='mt-14 grid gap-6 sm:grid-cols-2'>
          {pillars.map((p, i) => (
            <AudienceCard key={p.title} {...p} revealDelay={0.05 * i} />
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

export function AboutBeliefsSection() {
  return (
    <SectionShell tone='card' bordered spacing='default'>
      <ScrollReveal className='marketing-container relative max-w-3xl space-y-10'>
        {[
          {
            title: 'What we believe',
            body: (
              <>
                Courier networks win when software matches{' '}
                <strong className='font-medium text-[var(--app-foreground)]'>
                  how freight actually moves
                </strong>
                —not when teams fight generic tools built for unrelated industries.
                We speak confidently to dispatchers and hub managers, stay
                India-aware on GST and PIN realities, and stay transparent where
                workflows still include manual finance steps.
              </>
            ),
          },
          {
            title: 'What we are not positioning as',
            body: (
              <>
                Consumer parcel tracking as a standalone product is not the core
                story—utility tracking supports operators, but the buyer value is the{' '}
                <strong className='font-medium text-[var(--app-foreground)]'>
                  B2B workspace
                </strong>
                . We also avoid implying real-time carrier integrations unless they
                are deployed for your tenant.
              </>
            ),
          },
          {
            title: 'Brand & experience',
            body: (
              <>
                Our interface follows a professional operations aesthetic: primary
                blue for actions, dark sidebar idiom for navigation, stroke icons,
                and restrained motion—so prospects recognize {SITE_NAME} on
                doorear.com before they ever sign in to the application shell.
              </>
            ),
          },
        ].map((block) => (
          <div
            key={block.title}
            className='premium-glass-panel rounded-2xl border border-[var(--app-border)] p-6 md:p-8'>
            <h2 className='text-2xl font-bold text-[var(--app-foreground)]'>
              {block.title}
            </h2>
            <p className='mt-4 text-base leading-relaxed text-[var(--app-muted)]'>
              {block.body}
            </p>
          </div>
        ))}
      </ScrollReveal>
    </SectionShell>
  )
}
