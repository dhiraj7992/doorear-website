'use client'

import Link from 'next/link'
import {
  BarChart3,
  ClipboardList,
  Coins,
  FileText,
  GitBranch,
  MapPin,
  Package,
  Shield,
  Truck,
  Wallet,
} from 'lucide-react'
import SectionHeading from '@/components/marketing/SectionHeading'
import FeatureGrid from '@/components/marketing/FeatureGrid'
import CTABlock from '@/components/marketing/CTABlock'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import { MotionInView } from '@/components/marketing/MotionInView'
import {
  InsightSpotlightBlock,
} from '@/components/marketing/InsightScreenshot'
import { SITE_NAME } from '@/components/marketing/site-config'

const toc = [
  { href: '#feature-access', label: 'Roles & access' },
  { href: '#feature-matrix', label: 'Full capability matrix' },
  { href: '#feature-usage', label: 'Usage & billing' },
] as const

function FeaturesInPageNav() {
  return (
    <>
      <div className='-mx-1 mb-10 flex gap-2 overflow-x-auto pb-1 xl:hidden'>
        {toc.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className='shrink-0 snap-start rounded-full border border-[var(--app-border)] bg-[var(--app-card)] px-3.5 py-1.5 text-xs font-medium text-[var(--app-foreground)] shadow-sm transition hover:border-[var(--app-primary)]/35 hover:bg-[var(--app-surface)]'>
            {item.label}
          </a>
        ))}
      </div>
      <nav
        className='sticky top-24 hidden max-h-[calc(100vh-8rem)] self-start overflow-y-auto xl:block'
        aria-label='On this page'>
        <p className='text-[10px] font-bold uppercase tracking-wider text-[var(--app-muted)]'>
          On this page
        </p>
        <ul className='mt-4 space-y-2 border-l border-[var(--app-border)] pl-4'>
          {toc.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className='text-sm font-medium text-[var(--app-muted)] transition hover:text-[var(--app-primary)]'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className='mt-8 text-[10px] leading-relaxed text-[var(--app-muted)]'>
          The hero shows MIS &amp; reporting. Below: access control—full UI with
          the app sidebar intact. See sales-side analytics next to plans on{' '}
          <a
            href='/pricing#pricing-commercial'
            className='font-medium text-[var(--app-primary)] hover:underline'>
            Pricing
          </a>
          .
        </p>
      </nav>
    </>
  )
}

const capabilities = [
  {
    icon: Package,
    title: 'Forward shipment booking & AWB-style orders',
    body: 'Structured booking flows replace ad hoc spreadsheets and disconnected forms. Every consignment lives in one shipment booking software layer so customer service, operations, and finance reference the same AWB narrative—even when bookings change mid-flight.',
    bullets: [
      'Fewer duplicate consignments across branches',
      'Cleaner escalation paths when customers amend instructions',
      'Foundation for GST-oriented invoicing tied to real shipment events',
    ],
  },
  {
    icon: Truck,
    title: 'Bags, manifests, inward legs, delivery runs',
    body: 'Model physical reality: consolidate into bags, attach manifests for linehaul, record inward legs at hubs, and schedule delivery runs to POD. Supervisors see where freight sits—not only a binary “shipped” flag.',
    bullets: [
      'Audit trail from first mile through sortation to last mile',
      'Easier exception handling when a lane or hub underperforms',
      'Better alignment with last mile delivery operations software expectations',
    ],
  },
  {
    icon: GitBranch,
    title: 'Branch hierarchy & branch-scoped users',
    body: 'Configure parent/child branches and limit what each user sees. Multi branch courier software should mirror your org—not flatten everyone into one bucket where sensitive data leaks across sites.',
    bullets: [
      'Hub managers focus on their geography without noise from other regions',
      'Central ops retain roll-up visibility for planning',
      'Safer partner or franchise expansions with scoped access',
    ],
  },
  {
    icon: MapPin,
    title: 'Serviceable PIN / location master',
    body: 'Validate serviceability before you commit drivers, linehaul, or customer promises. PIN discipline is a margin lever for Indian networks where pin-code level SLAs are table stakes.',
    bullets: [
      'Reduce rescans and emergency reroutes',
      'Give commercial teams accurate coverage maps for bids',
      'Support network planning conversations with data, not anecdotes',
    ],
  },
  {
    icon: BarChart3,
    title: 'Operational dashboard & MIS / analytics',
    body: 'Operational MIS shows pipeline health, delays, OFD progress, and branch throughput—so daily standups start from metrics instead of reconstructing history from memory.',
    bullets: [
      'Identify recurring choke points by lane or hub',
      'Compare branches on consistent definitions',
      'Bridge ops and leadership with fewer manual Excel extracts',
    ],
  },
  {
    icon: Wallet,
    title: 'Sales & purchase analytics (where enabled)',
    body: 'When enabled, commercial and procurement analytics sit beside operations so founders and finance controllers see margin pressure alongside shipment volume—not weeks later.',
    bullets: [
      'Tighter alignment between freight mix and revenue',
      'Earlier signals when a lane becomes commercially unviable',
    ],
  },
  {
    icon: FileText,
    title: 'Company profile & GST-oriented fields',
    body: 'Company profile, GST fields, and invoicing terms keep documents aligned with how you legally bill customers. Software supports structure; your advisors own compliance decisions.',
    bullets: [
      'Consistent identity on AWB products, tax invoices, and vouchers',
      'Fewer finance fire drills at month end',
    ],
  },
  {
    icon: Shield,
    title: 'Roles & granular permissions',
    body: 'Separate who books shipments, who edits users, who exports financials, and who administers company setup. Essential for mixed teams across hubs and outsourced last-mile partners.',
    bullets: [
      'Least-privilege access patterns for enterprise buyers',
      'Reduced risk of accidental configuration changes',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Procurement: RFQs, proposals, agreements',
    body: 'Run procurement RFQ logistics software flows for vendor collaboration—structured threads instead of inbox chaos when you enable these modules.',
    bullets: [
      'Shared workspace for proposals and agreements',
      'Optional public quotes when customers need a shareable artifact',
    ],
  },
]

export default function FeaturesPageView() {
  return (
    <>
      <MarketingPageHero
        eyebrow='Product · Capabilities'
        title={
          <>
            Logistics management software for Indian courier &amp;{' '}
            <span className='bg-gradient-to-r from-[var(--app-primary)] to-blue-600 bg-clip-text text-transparent'>
              3PL operations
            </span>
          </>
        }
        description={
          <>
            {SITE_NAME} connects{' '}
            <strong className='font-semibold text-[var(--app-foreground)]'>
              booking, network execution, analytics, and accounts
            </strong>{' '}
            in one multi-tenant workspace. Below are real in-app views—sidebar
            navigation included—followed by the full capability matrix.
          </>
        }
        image={{
          src: '/images/insights/MIS_report.png',
          alt: `Doorear product screenshot: MIS and operational reporting in ${SITE_NAME}`,
        }}
        imagePresentation='productUi'
        imageCaption='Operational MIS: pipeline health, delays, and branch throughput—the kind of screen leadership and hub heads use in daily standups.'
        cta={{ href: '/contact', label: 'Book a feature walkthrough' }}
      />

      <div className='border-b border-[var(--app-border)] bg-[var(--app-surface)]'>
        <div className='marketing-container py-12 md:py-14'>
          <div className='grid gap-10 xl:grid-cols-[minmax(0,13.5rem)_minmax(0,1fr)] xl:items-start xl:gap-14'>
            <FeaturesInPageNav />
            <div className='min-w-0 space-y-0'>
              <InsightSpotlightBlock
                flush
                id='feature-access'
                eyebrow='In the product'
                title='Roles, invites, and least-privilege access'
                description={
                  <>
                    Granular permissions separate who books freight, who edits
                    company setup, who exports financials, and who administers
                    users—aligned to how mixed hub teams and partners actually
                    work.
                  </>
                }
                chromeLabel='User access'
                imageSrc='/images/insights/User_access.png'
                imageAlt={`Doorear user access and roles — ${SITE_NAME}`}
                imageSide='right'
              />

              <section
                id='feature-matrix'
                className='scroll-mt-28 border-b border-[var(--app-border)] py-14 md:py-16'>
                <SectionHeading
                  eyebrow='Capabilities'
                  title='Translate operational work into measurable business value'
                  description='Each module maps to how dispatchers, hub managers, and leadership actually run the day—from AWB booking workflows to fleet and hub visibility.'
                />
                <div className='mt-12'>
                  <FeatureGrid items={capabilities} columns={3} />
                </div>
              </section>

              <section
                id='feature-usage'
                className='scroll-mt-28 relative overflow-hidden py-14 md:py-16'>
                <div
                  className='pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[var(--app-primary)]/5 blur-3xl'
                  aria-hidden
                />
                <MotionInView className='relative'>
                  <div className='grid gap-10 lg:grid-cols-2 lg:items-start'>
                    <div>
                      <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--app-primary)]/10 text-[var(--app-primary)]'>
                        <Coins className='h-6 w-6' strokeWidth={2} />
                      </div>
                      <h2 className='mt-5 text-2xl font-bold text-[var(--app-foreground)]'>
                        Shipment allowances &amp; top-ups (cost optimization)
                      </h2>
                      <p className='mt-4 text-base leading-relaxed text-[var(--app-muted)]'>
                        Plans include monthly shipment ceilings and user seats.
                        When volumes spike—festival season, new client onboarding,
                        or e‑commerce surge—you can add{' '}
                        <strong className='font-semibold text-[var(--app-foreground)]'>
                          extra shipments at a predictable per-piece top-up
                        </strong>{' '}
                        instead of forcing an immediate tier jump. That flexibility
                        is a meaningful differentiator for operators balancing
                        growth and working capital.
                      </p>
                      <ul className='mt-6 space-y-3 text-sm text-[var(--app-muted)]'>
                        <li className='flex gap-2'>
                          <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--app-primary)]' />
                          Aligns finance and ops on the same usage story inside
                          the product—not a disputed spreadsheet.
                        </li>
                        <li className='flex gap-2'>
                          <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--app-primary)]' />
                          Shipment balance resets on the billing cycle so teams
                          know when allowances refresh.
                        </li>
                      </ul>
                      <Link
                        href='/pricing'
                        className='mt-8 inline-flex font-semibold text-[var(--app-primary)] hover:underline'>
                        See plan limits &amp; top-up economics →
                      </Link>
                    </div>
                    <div className='rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-8 shadow-sm md:p-10'>
                      <h3 className='text-lg font-bold text-[var(--app-foreground)]'>
                        Accounts &amp; finance artifacts
                      </h3>
                      <p className='mt-3 text-sm leading-relaxed text-[var(--app-muted)]'>
                        Accounts includes AWB products, tax invoices, and vouchers
                        so finance artifacts stay tied to the same tenant as
                        shipment activity—ideal for teams that want courier company
                        admin software with operational context, not a standalone
                        accounting tool.
                      </p>
                      <h3 className='mt-8 text-lg font-semibold text-[var(--app-foreground)]'>
                        Subscription &amp; billing transparency
                      </h3>
                      <p className='mt-2 text-sm leading-relaxed text-[var(--app-muted)]'>
                        Plans, trials, and usage reminders keep leadership aligned.
                        Where in-product checkout is not the path, teams coordinate
                        renewals offline—see{' '}
                        <Link
                          href='/pricing'
                          className='font-medium text-[var(--app-primary)] underline-offset-2 hover:underline'>
                          Pricing
                        </Link>{' '}
                        for numbers straight from the Plans &amp; upgrade
                        experience.
                      </p>
                    </div>
                  </div>
                </MotionInView>
              </section>
            </div>
          </div>
        </div>
      </div>

      <CTABlock
        title='Match features to your rollout plan'
        description='Walk through hubs, permissions, analytics, and subscription allowances with our team. We keep the conversation grounded in what is live for your tenant—including integrations you have explicitly deployed.'
      />
    </>
  )
}
