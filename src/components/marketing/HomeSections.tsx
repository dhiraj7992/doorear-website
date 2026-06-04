'use client'

import Link from 'next/link'
import { LinkButton } from '@/components/ui'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CreditCard,
  GitBranch,
  LineChart,
  MapPinned,
  Radio,
  Truck,
} from 'lucide-react'
import { IconBadge, PremiumCard, ScrollReveal, SectionShell } from './primitives'
import { APP_SIGNUP_URL } from './site-config'

export function IndiaMarketSection() {
  return (
    <SectionShell tone='card' bordered spacing='default' divider>
      <div className='marketing-container'>
        <div className='grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20'>
          <ScrollReveal>
            <p className='aigocy-section-eyebrow text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--app-muted)]'>
              India logistics context
            </p>
            <h2 className='mt-3 text-3xl font-bold tracking-tight text-[var(--app-foreground)] md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]'>
              Built for branch-heavy courier &amp; 3PL realities
            </h2>
            <p className='mt-5 text-base leading-relaxed text-[var(--app-muted)] md:text-lg'>
              India&apos;s courier, express and parcel segment is expanding as
              e‑commerce and B2B freight digitize. Networks compete on lane
              coverage, SLA adherence, and cost per shipment—yet many mid-market
              operators still juggle AWBs in spreadsheets, disconnected WhatsApp
              threads, and legacy billing tools. Doorear aligns{' '}
              <strong className='font-semibold text-[var(--app-foreground)]'>
                bookings, hub execution, MIS, and finance artifacts
              </strong>{' '}
              so leadership sees one operational truth.
            </p>
            <p className='mt-4 text-base leading-relaxed text-[var(--app-muted)]'>
              GST registration, PIN-level serviceability, and multi-city hubs are
              not edge cases—they are the default. Doorear reflects branch
              hierarchy, validates coverage before you book, and keeps
              subscription usage (shipments, seats, top-ups) transparent inside the
              product.
            </p>
            <Link
              href='/solutions'
              className='mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--app-primary)] transition hover:gap-2 hover:underline'>
              See who we serve
              <ArrowRight className='h-4 w-4' />
            </Link>
          </ScrollReveal>
          <div className='grid gap-4 sm:grid-cols-2'>
            {[
              {
                icon: LineChart,
                title: 'Growth & pressure on SLAs',
                text: 'Volumes and customer expectations push networks to instrument first-mile → last-mile handoffs—not just track a single AWB in isolation.',
              },
              {
                icon: MapPinned,
                title: 'Coverage as a moat',
                text: 'PIN masters and route discipline protect margin; booking validation reduces rescans and emergency linehaul spend.',
              },
              {
                icon: CreditCard,
                title: 'Finance wants alignment',
                text: 'Controllers need invoices and vouchers tied to operational activity—not monthly reconciliation fire drills.',
              },
              {
                icon: Radio,
                title: 'Visibility beats heroics',
                text: 'Dashboards for OFD, delays, and branch throughput beat status meetings that start with “let me check the sheet.”',
              },
            ].map((card, i) => {
              const Icon = card.icon
              return (
                <PremiumCard
                  key={card.title}
                  as='div'
                  glass
                  reveal
                  revealDelay={0.05 * i}
                  className='p-5'>
                  <IconBadge icon={Icon} size='sm' />
                  <h3 className='mt-3 text-sm font-semibold text-[var(--app-foreground)]'>
                    {card.title}
                  </h3>
                  <p className='mt-2 text-xs leading-relaxed text-[var(--app-muted)]'>
                    {card.text}
                  </p>
                </PremiumCard>
              )
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

const steps = [
  {
    n: '01',
    title: 'Book & validate',
    icon: Boxes,
    body: 'Create forward bookings and AWB-style orders against your serviceable PIN / location master—stop bad routes before they consume capacity.',
  },
  {
    n: '02',
    title: 'Execute network handoffs',
    icon: Truck,
    body: 'Run bags, manifests, inward legs, and delivery runs so supervisors see where consignments sit from first mile to POD.',
  },
  {
    n: '03',
    title: 'Measure & improve',
    icon: BarChart3,
    body: 'Use operational MIS for pipeline health and delays; add sales & purchase analytics when your org enables those modules.',
  },
  {
    n: '04',
    title: 'Govern access & billing',
    icon: GitBranch,
    body: 'Branch-scoped users, granular roles, subscription allowances, and optional offline finance coordination—aligned to how Indian enterprises buy.',
  },
]

export function WorkflowSection() {
  const reduceMotion = useReducedMotion()
  return (
    <SectionShell spacing='default'>
      <div className='marketing-container'>
        <ScrollReveal className='mx-auto max-w-2xl text-center'>
          <p className='aigocy-section-eyebrow text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--app-muted)]'>
            End-to-end flow
          </p>
          <h2 className='mt-3 text-3xl font-bold tracking-tight text-[var(--app-foreground)] md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]'>
            From booking intent to proof of delivery
          </h2>
          <p className='mt-4 text-base text-[var(--app-muted)] md:text-lg'>
            Doorear connects operational steps your teams already perform—now with
            a single audit trail, fewer manual exports, and permissions that match
            responsibility.
          </p>
        </ScrollReveal>
        <div className='relative mt-14'>
          <div
            className='pointer-events-none absolute left-0 right-0 top-[4.5rem] hidden h-px bg-gradient-to-r from-transparent via-[var(--app-primary)]/20 to-transparent lg:block'
            aria-hidden
          />
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5'>
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <PremiumCard
                  key={s.n}
                  reveal
                  revealDelay={0.07 * i}
                  className='relative p-6 lg:p-7'>
                  <span className='text-xs font-bold tabular-nums text-[var(--app-primary)]'>
                    {s.n}
                  </span>
                  <div className='mt-3'>
                    <IconBadge icon={Icon} size='lg' />
                  </div>
                  <h3 className='mt-4 text-lg font-semibold text-[var(--app-foreground)]'>
                    {s.title}
                  </h3>
                  <p className='mt-2 text-sm leading-relaxed text-[var(--app-muted)]'>
                    {s.body}
                  </p>
                  {i < steps.length - 1 && !reduceMotion ? (
                    <motion.span
                      className='absolute -right-3 top-1/2 hidden h-2 w-2 rounded-full bg-[var(--app-primary)]/40 lg:block'
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                      aria-hidden
                    />
                  ) : null}
                </PremiumCard>
              )
            })}
          </div>
        </div>
        <ScrollReveal className='mt-14 flex flex-wrap justify-center gap-4' delay={0.1}>
          <LinkButton
            href={APP_SIGNUP_URL}
            variant='primary'
            size='sectionWide'>
            Get Started
          </LinkButton>
          <LinkButton
            href='/pricing'
            variant='secondary'
            size='sectionWide'
            secondaryTone='surface'>
            View plans &amp; limits
          </LinkButton>
        </ScrollReveal>
      </div>
    </SectionShell>
  )
}
