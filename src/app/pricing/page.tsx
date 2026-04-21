import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import CTABlock from '@/components/marketing/CTABlock'
import {
  InsightBrowserFrame,
  InsightProductShot,
} from '@/components/marketing/InsightScreenshot'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import { MotionInView } from '@/components/marketing/MotionInView'
import SectionHeading from '@/components/marketing/SectionHeading'
import PricingPlanCards, {
  type PricingPlan,
} from '@/components/marketing/PricingPlanCards'
import { APP_SIGNUP_URL, SITE_NAME } from '@/components/marketing/site-config'

export const metadata: Metadata = {
  title: 'Pricing — Plans, Shipments, Seats & Top-ups',
  description:
    'Doorear subscription plans with Free trial, Standard ($116/mo), Enterprise ($407/mo), and Custom—users, monthly shipments, and $1 shipment top-ups as shown in product.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: `Pricing | ${SITE_NAME}`,
    description:
      'Transparent allowances for users and shipments, optional top-ups, and honest billing coordination for Indian enterprises.',
    url: '/pricing',
  },
}

const plans: PricingPlan[] = [
  {
    id: 'trial',
    name: 'Free trial',
    price: '$0',
    period: '/ month',
    badge: 'Start here',
    description:
      'Explore core booking, hub workflows, and dashboard with tight allowances—ideal for evaluation and branch pilots.',
    cta: { label: 'Start free trial', href: APP_SIGNUP_URL },
    highlight: false,
    popular: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '$116',
    period: '/ month',
    badge: null,
    description:
      'For growing courier networks that need higher monthly shipment throughput and more seats without jumping to enterprise scale.',
    cta: { label: 'Upgrade', href: APP_SIGNUP_URL },
    highlight: false,
    popular: false,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$407',
    period: '/ month',
    badge: 'Most popular',
    description:
      'High-volume operators: large seat counts, heavy monthly shipment ceilings, and the headroom growing 3PLs need—still with predictable top-up economics.',
    cta: { label: 'Upgrade', href: APP_SIGNUP_URL },
    highlight: true,
    popular: true,
  },
  {
    id: 'custom',
    name: 'Custom',
    price: 'Quoted',
    period: '',
    badge: null,
    description:
      'Unlimited users and shipments with bespoke commercials, rollout support, and governance conversations for complex networks.',
    cta: { label: 'Contact us', href: '/contact' },
    highlight: false,
    popular: false,
  },
]

const comparison = [
  {
    feature: 'Users included',
    trial: '5',
    standard: '10',
    enterprise: '100',
    custom: 'Unlimited',
  },
  {
    feature: 'Shipments / month',
    trial: '100',
    standard: '500',
    enterprise: '50,000',
    custom: 'Unlimited',
  },
  {
    feature: 'Top-up (extra shipments)',
    trial: '—',
    standard: '$1 each',
    enterprise: '$1 each',
    custom: '$1 each',
  },
]

export default function PricingPage() {
  return (
    <>
      <MarketingPageHero
        eyebrow='Pricing · Plans & upgrade'
        title={
          <>
            Allowances, seats &amp;{' '}
            <span className='bg-gradient-to-r from-[var(--app-primary)] to-blue-600 bg-clip-text text-transparent'>
              predictable top-ups
            </span>
          </>
        }
        description={
          <>
            Doorear uses subscription plans with{' '}
            <strong className='font-semibold text-[var(--app-foreground)]'>
              shipment balances, seat counts, and optional top-ups
            </strong>{' '}
            so leadership always knows what is included—and what happens when
            volumes spike. Figures mirror the in-app &quot;Plans &amp; upgrade&quot;
            experience; confirm currency, taxes, and PO-based billing with our team.
          </>
        }
        image={{
          src: '/images/marketing/doorear-plans-upgrade.png',
          alt: 'Doorear product: Plans and upgrade with monthly pricing',
        }}
        imageCaption='Same Plans & upgrade view your team sees inside the product—USD shown for reference; confirm INR with finance.'
        cta={{ href: '/contact', label: 'Get a quote' }}
        secondaryCta={{ href: APP_SIGNUP_URL, label: 'Start free trial' }}
      />

      <section className='relative border-b border-[var(--app-border)] bg-[var(--app-surface)] py-16 md:py-20'>
        <div className='marketing-container'>
          <MotionInView>
            <PricingPlanCards plans={plans} />
          </MotionInView>

          <MotionInView className='mt-20 scroll-mt-28' delay={0.05}>
            <div
              id='pricing-commercial'
              className='grid gap-10 overflow-hidden rounded-2xl border border-[var(--app-border)] bg-gradient-to-br from-[var(--app-card)] via-[var(--app-surface)] to-[var(--app-card)] p-8 shadow-sm md:grid-cols-2 md:gap-12 md:p-10 lg:p-12'>
              <div className='flex flex-col justify-center'>
                <SectionHeading
                  align='left'
                  eyebrow='Commercial clarity'
                  title='See revenue-side performance next to subscription economics'
                  description='Sales and purchase analytics (where your tenant enables them) sit in the same workspace as operational activity—so when you compare Enterprise allowances to commercial outcomes, you are not reconciling two different tools.'
                />
                <p className='mt-4 text-sm leading-relaxed text-[var(--app-muted)]'>
                  Pair this view with the Plans &amp; upgrade screen in the hero to
                  brief finance: usage limits, top-ups, and commercial KPIs in one
                  narrative.
                </p>
              </div>
              <div className='transition duration-300 motion-safe:hover:-translate-y-1'>
                <InsightBrowserFrame chromeLabel='Sales analytics'>
                  <InsightProductShot
                    src='/images/insights/Sales_analytics.png'
                    alt='Doorear sales analytics dashboard — revenue and commercial KPIs'
                    sizes='(max-width: 1024px) 100vw, 40vw'
                  />
                </InsightBrowserFrame>
              </div>
            </div>
          </MotionInView>

          <MotionInView className='mt-16' delay={0.08}>
            <div className='overflow-hidden rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] shadow-sm'>
              <div className='overflow-x-auto'>
                <table className='w-full min-w-[640px] border-collapse text-left text-sm'>
                  <thead>
                    <tr className='border-b border-[var(--app-border)] bg-gradient-to-r from-[var(--app-surface)] to-[var(--app-card)]'>
                      <th className='px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--app-muted)]'>
                        Feature
                      </th>
                      <th className='px-4 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--app-muted)]'>
                        Free trial
                      </th>
                      <th className='px-4 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--app-muted)]'>
                        Standard
                      </th>
                      <th className='px-4 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--app-primary)]'>
                        Enterprise
                      </th>
                      <th className='px-4 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--app-muted)]'>
                        Custom
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row) => (
                      <tr
                        key={row.feature}
                        className='border-b border-[var(--app-border)] last:border-0'>
                        <td className='px-6 py-4 font-medium text-[var(--app-foreground)]'>
                          {row.feature}
                        </td>
                        <td className='px-4 py-4 text-[var(--app-muted)]'>
                          {row.trial}
                        </td>
                        <td className='px-4 py-4 text-[var(--app-muted)]'>
                          {row.standard}
                        </td>
                        <td className='bg-[var(--app-primary)]/[0.05] px-4 py-4 font-medium text-[var(--app-foreground)]'>
                          {row.enterprise}
                        </td>
                        <td className='px-4 py-4 text-[var(--app-muted)]'>
                          {row.custom}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </MotionInView>

          <MotionInView className='mt-12 grid gap-8 lg:grid-cols-2' delay={0.1}>
            <div className='rounded-2xl border border-[var(--app-border)] bg-gradient-to-br from-[var(--app-card)] to-[var(--app-surface)] p-8 shadow-sm'>
              <h3 className='text-lg font-semibold text-[var(--app-foreground)]'>
                How billing &amp; cycles work
              </h3>
              <ul className='mt-4 space-y-3 text-sm leading-relaxed text-[var(--app-muted)]'>
                <li className='flex gap-2'>
                  <Check className='mt-0.5 h-4 w-4 shrink-0 text-[var(--chart-emerald)]' />
                  Shipment balances reset on your billing cycle—teams always know
                  when the next refresh lands.
                </li>
                <li className='flex gap-2'>
                  <Check className='mt-0.5 h-4 w-4 shrink-0 text-[var(--chart-emerald)]' />
                  Plan changes apply after your team updates records post-payment
                  when you move tiers offline—no silent surprises mid-cycle.
                </li>
                <li className='flex gap-2'>
                  <Check className='mt-0.5 h-4 w-4 shrink-0 text-[var(--chart-emerald)]' />
                  Top-ups let you flex capacity without forcing an immediate tier
                  jump—ideal for seasonal peaks in Indian e‑commerce windows.
                </li>
              </ul>
            </div>
            <div className='relative overflow-hidden rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] shadow-md'>
              <Image
                src='/images/marketing/doorear-plans-upgrade.png'
                alt='Doorear Plans and upgrade screen — feature comparison'
                width={1200}
                height={720}
                className='h-auto w-full object-cover object-top'
              />
              <p className='border-t border-[var(--app-border)] px-4 py-3 text-center text-xs text-[var(--app-muted)]'>
                Full UI context: users, shipments, and top-up economics in one
                place.
              </p>
            </div>
          </MotionInView>

          <MotionInView className='mx-auto mt-12 max-w-3xl' delay={0.12}>
            <div className='rounded-2xl border border-amber-200/80 bg-amber-50/90 p-8 shadow-sm'>
              <h3 className='text-lg font-semibold text-[var(--app-foreground)]'>
                Billing honesty
              </h3>
              <p className='mt-2 text-sm leading-relaxed text-[var(--app-muted)]'>
                Doorear emphasizes{' '}
                <strong className='font-medium text-[var(--app-foreground)]'>
                  plan transparency, usage reminders, and finance coordination
                </strong>{' '}
                as implemented. Where automated checkout is not enabled for your
                tenant, procurement and offline approvals remain first-class—especially
                for Indian enterprises with PO workflows and multi-GST entities.
              </p>
            </div>
          </MotionInView>
        </div>
      </section>
      <CTABlock
        title='Need a quote in INR with the right tax treatment?'
        description='We align seat counts, shipment tiers, and top-up economics with your branches and finance team—book a demo or contact sales for a written proposal.'
      />
    </>
  )
}
