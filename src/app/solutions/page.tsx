import type { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, LineChart, Shield, Target, Users } from 'lucide-react'
import SectionHeading from '@/components/marketing/SectionHeading'
import CTABlock from '@/components/marketing/CTABlock'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import { MotionInView } from '@/components/marketing/MotionInView'
import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'

export const metadata: Metadata = {
  title: 'Courier & 3PL Solutions for Multi-Branch Networks',
  description:
    'Doorear supports mid-size and growing courier and 3PL operators in India: branch-aware execution, role-based access, operational visibility, and commercial clarity in one workspace.',
  keywords: [
    'courier software solutions',
    '3PL operations platform',
    'multi branch courier software',
    'logistics operations platform India',
    'branch scoped access courier',
  ],
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: `Solutions | ${SITE_NAME} logistics operations platform`,
    description:
      'Operational visibility for hubs, commercial insight for leadership, and secure tenancy for enterprise teams.',
    url: '/solutions',
    type: 'website',
  },
  twitter: {
    title: `Solutions | ${SITE_NAME}`,
    description:
      'Built for operators, hub managers, finance, and procurement teams running real courier networks.',
  },
}

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

export default function SolutionsPage() {
  const siteUrl = getSiteUrl()
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${SITE_NAME} Solutions`,
    description:
      'Solutions page for courier and 3PL operators using Doorear across multi-branch networks.',
    url: `${siteUrl}/solutions`,
    inLanguage: 'en',
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <MarketingPageHero
        eyebrow='Solutions · Audiences'
        title={
          <>
            Built for teams who{' '}
            <span className='bg-gradient-to-r from-[var(--app-primary)] to-blue-600 bg-clip-text text-transparent'>
              run courier operations
            </span>{' '}
            every day
          </>
        }
        description={
          <>
            {SITE_NAME} is courier management software for{' '}
            <strong className='font-semibold text-[var(--app-foreground)]'>
              operator workspaces
            </strong>
            —not a consumer parcel tracking portal. Multi-branch execution,
            accountability, analytics, and honest subscription economics (including
            shipment top-ups) match how Indian enterprises buy.
          </>
        }
        motionVisual={{ variant: 'companySetup' }}
        imagePresentation='default'
        imageCaption='Hub & inward operations: queues, handoffs, and execution views supervisors use before SLAs slip—left navigation shows how modules map to your network.'
        cta={{ href: '/contact', label: 'Discuss your branch model' }}
      />

      <section className='border-b border-[var(--app-border)] bg-[var(--app-surface)] py-16 md:py-20'>
        <MotionInView className='marketing-container space-y-12'>
          <SectionHeading
            eyebrow='Primary audiences'
            title='Built for operational reality on the ground'
            description='India’s courier, express and parcel segment rewards networks that can execute reliably across PIN codes and branches. Doorear maps software to that reality—not to a generic global template.'
          />
          <div className='grid gap-6 md:grid-cols-3'>
            {primary.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className='group flex flex-col rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-7 shadow-sm transition hover:border-[var(--app-primary)]/20 hover:shadow-md'>
                  <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--app-primary)]/10 text-[var(--app-primary)] transition group-hover:bg-[var(--app-primary)]/15'>
                    <Icon className='h-5 w-5' strokeWidth={2} aria-hidden />
                  </div>
                  <h2 className='mt-5 text-lg font-semibold text-[var(--app-foreground)]'>
                    {item.title}
                  </h2>
                  <p className='mt-3 text-sm leading-relaxed text-[var(--app-muted)]'>
                    {item.body}
                  </p>
                  <p className='mt-4 border-t border-[var(--app-border)] pt-4 text-sm leading-relaxed text-[var(--app-foreground)]/90'>
                    {item.detail}
                  </p>
                </article>
              )
            })}
          </div>
          <SectionHeading
            eyebrow='Secondary audiences'
            title='Finance and commercial stakeholders'
            description='When you need last mile delivery operations software and commercial workflows to coexist, Doorear keeps artifacts and activity in one tenant.'
          />
          <div className='grid gap-6 md:grid-cols-2'>
            {secondary.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className='rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-8 shadow-sm transition hover:shadow-md'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--app-primary)]/10 text-[var(--app-primary)]'>
                    <Icon className='h-5 w-5' strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className='mt-4 text-lg font-semibold text-[var(--app-foreground)]'>
                    {item.title}
                  </h3>
                  <p className='mt-2 text-sm leading-relaxed text-[var(--app-muted)]'>
                    {item.body}
                  </p>
                  <p className='mt-4 text-sm leading-relaxed text-[var(--app-foreground)]/90'>
                    {item.detail}
                  </p>
                </article>
              )
            })}
          </div>

          <div className='rounded-2xl border border-[var(--app-border)] bg-gradient-to-br from-[var(--app-card)] to-[var(--app-surface)] p-8 shadow-sm md:p-10'>
            <div className='flex flex-col gap-4 md:flex-row md:items-start md:gap-8'>
              <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-700'>
                <Target className='h-6 w-6' strokeWidth={2} />
              </div>
              <div>
                <h2 className='text-xl font-bold text-[var(--app-foreground)]'>
                  Enterprise scale vs emerging networks
                </h2>
                <p className='mt-3 text-sm leading-relaxed text-[var(--app-muted)]'>
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
          </div>
        </MotionInView>
      </section>
      <CTABlock
        title='Tell us about your branch model'
        description='We will map hubs, permissions, MIS, and rollout phases to your network—transparently and without overselling integrations that are not deployed for your tenant.'
      />
    </>
  )
}
