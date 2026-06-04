'use client'

import Link from 'next/link'
import { Briefcase, LineChart, Shield, Target, Users } from 'lucide-react'
import SectionHeading from '@/components/marketing/SectionHeading'
import { AudienceCard, ScrollReveal, SectionShell } from '@/components/marketing/primitives'

const primary = [
  {
    icon: Users,
    title: 'Mid-size & growing courier / 3PL operators (India)',
    body: 'You run multiple branches, negotiate lane rates, and answer customers who expect Amazon-grade visibility. You need logistics management software that respects GST registration, PIN-level coverage, and branch hierarchy—not a stripped-down tracker that breaks the moment you add a second hub.',
    detail:
      'Doorear gives you booking discipline, hub handoffs, MIS, and optional finance/procurement depth so you can scale without ripping out your stack every twelve months.',
  },
  {
    icon: Briefcase,
    title: 'Operations heads & hub managers',
    body: 'Your week is bookings, OFD, delayed runs, and escalations—not slides. You need a logistics MIS dashboard that shows pipeline health and branch throughput in minutes, not an analyst who exports CSVs overnight.',
    detail:
      'Role-scoped access means hubs see what matters locally while leadership still gets roll-up visibility for standups and monthly reviews.',
  },
  {
    icon: LineChart,
    title: 'Founders & IT leads',
    body: 'You are tired of paying for five tools that barely talk to each other. You want one operator workspace that covers bookings through to light finance and procurement—without promising AI magic that does not exist.',
    detail:
      'Doorear aligns product scope with what is deployed: transparent subscriptions, usage allowances, and shipment top-ups when volumes spike.',
  },
]

const secondary = [
  {
    icon: Shield,
    title: 'Finance controllers',
    body: 'Invoices, vouchers, and company profile data stay in the same tenant as shipment activity. That means fewer month-end reconciliation gaps between what moved and what got billed.',
    detail:
      'When billing still flows through offline approvals, everyone sees the same plan limits and usage reminders inside the product.',
  },
  {
    icon: Users,
    title: 'Commercial & procurement teams',
    body: 'RFQ-to-agreement workflows and public quotes (when you enable procurement) replace fragmented email threads with structured collaboration—without bolting on yet another portal.',
    detail:
      'Commercial can reference operational performance when negotiating lanes because analytics and bookings share one workspace.',
  },
]

export default function SolutionsPageSections() {
  return (
    <SectionShell tone='surface' bordered spacing='default'>
      <div className='marketing-container space-y-14 md:space-y-16'>
        <SectionHeading
          aigocy
          eyebrow='Primary audiences'
          title='Built for operational reality on the ground'
          description='India’s courier, express and parcel segment rewards networks that can execute reliably across PIN codes and branches. Doorear maps software to that reality—not to a generic global template.'
        />
        <div className='grid gap-6 md:grid-cols-3'>
          {primary.map((item, i) => (
            <AudienceCard
              key={item.title}
              {...item}
              titleAs='h2'
              revealDelay={0.05 * i}
            />
          ))}
        </div>
        <SectionHeading
          aigocy
          eyebrow='Secondary audiences'
          title='Finance and commercial stakeholders'
          description='When you need last mile delivery operations software and commercial workflows to coexist, Doorear keeps artifacts and activity in one tenant.'
        />
        <div className='grid gap-6 md:grid-cols-2'>
          {secondary.map((item, i) => (
            <AudienceCard key={item.title} {...item} revealDelay={0.05 * i} />
          ))}
        </div>
        <ScrollReveal>
          <div className='premium-glass-panel flex flex-col gap-4 rounded-3xl border border-[var(--app-border)] p-8 md:flex-row md:items-start md:gap-8 md:p-10'>
            <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-700'>
              <Target className='h-6 w-6' strokeWidth={2} />
            </div>
            <div>
              <h2 className='text-xl font-bold text-[var(--app-foreground)]'>
                Enterprise scale vs emerging networks
              </h2>
              <p className='mt-3 text-sm leading-relaxed text-[var(--app-muted)] md:text-base'>
                Larger operators often need Enterprise or Custom plans with higher
                seat counts and monthly shipment ceilings—sometimes paired with
                governance reviews and staged rollouts. Emerging networks may
                start with Standard tiers and prove value branch-by-branch
                before expanding hubs. In both cases, Doorear keeps{' '}
                <Link
                  href='/pricing'
                  className='font-semibold text-[var(--app-primary)] hover:underline'>
                  pricing
                </Link>{' '}
                tied to measurable allowances so leadership can model cost per
                shipment honestly.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionShell>
  )
}
