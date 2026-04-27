import type { Metadata } from 'next'
import { Compass, HeartHandshake, Layers, Sparkles } from 'lucide-react'
import CTABlock from '@/components/marketing/CTABlock'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import { MotionInView } from '@/components/marketing/MotionInView'
import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'

export const metadata: Metadata = {
  title: 'About Doorear — Courier & Logistics Platform',
  description:
    'Learn why Doorear exists: a logistics operations platform and courier management software for branch-heavy Indian networks—transparent, operational, and enterprise-ready.',
  keywords: [
    'about doorear',
    'courier management software India',
    'logistics operations platform',
    'multi branch courier software',
    '3PL SaaS platform',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: `About | ${SITE_NAME} courier platform`,
    description:
      'Professional, trustworthy product DNA—primary blue, operational clarity, and honest subscription positioning.',
    url: '/about',
    type: 'website',
  },
  twitter: {
    title: `About | ${SITE_NAME}`,
    description:
      'Why Doorear exists and how it supports branch-heavy courier and 3PL operations.',
  },
}

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

export default function AboutPage() {
  const siteUrl = getSiteUrl()
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${SITE_NAME}`,
    description:
      'About page for Doorear logistics operations platform and courier management software.',
    url: `${siteUrl}/about`,
    inLanguage: 'en',
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <MarketingPageHero
        eyebrow='Company · About'
        title={
          <>
            Why{' '}
            <span className='bg-gradient-to-r from-[var(--app-primary)] to-blue-600 bg-clip-text text-transparent'>
              {SITE_NAME}
            </span>{' '}
            exists
          </>
        }
        description={
          <>
            {SITE_NAME} is a cloud operations platform for courier and logistics
            companies—helping teams{' '}
            <strong className='font-semibold text-[var(--app-foreground)]'>
              book and track shipments
            </strong>
            , coordinate hubs and last-mile delivery, run analytics, and manage
            branches, coverage, fleet, partners, users, and roles in one secure
            workspace.
          </>
        }
        extra='Our mission: give mid-market and growing Indian networks operational discipline without rigid tools that ignore branch reality, PIN coverage, or how finance closes the month.'
        image={{
          src: '/images/marketing/page-about.jpg',
          alt: 'Business team collaboration — strategy and partnership',
        }}
        imageCaption='Transparent partnerships with operators: software that respects how your network actually runs.'
        cta={{ href: '/contact', label: 'Talk to us' }}
      />

      <section className='border-b border-[var(--app-border)] bg-[var(--app-surface)] py-16 md:py-20'>
        <MotionInView className='marketing-container'>
          <h2 className='text-center text-2xl font-bold text-[var(--app-foreground)] md:text-3xl'>
            Principles behind the product
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-center text-[var(--app-muted)]'>
            These pillars keep {SITE_NAME} aligned with courier operations on the
            ground—and with how enterprises in India evaluate and buy software.
          </p>
          <div className='mt-14 grid gap-6 sm:grid-cols-2'>
            {pillars.map((p) => {
              const Icon = p.icon
              return (
                <article
                  key={p.title}
                  className='group rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-8 shadow-sm transition hover:border-[var(--app-primary)]/20 hover:shadow-md'>
                  <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--app-primary)]/10 text-[var(--app-primary)] transition group-hover:bg-[var(--app-primary)]/15'>
                    <Icon className='h-5 w-5' strokeWidth={2} />
                  </div>
                  <h3 className='mt-5 text-lg font-semibold text-[var(--app-foreground)]'>
                    {p.title}
                  </h3>
                  <p className='mt-3 text-sm leading-relaxed text-[var(--app-muted)]'>
                    {p.body}
                  </p>
                </article>
              )
            })}
          </div>
        </MotionInView>
      </section>

      <section className='relative overflow-hidden border-b border-[var(--app-border)] bg-[var(--app-card)] py-16 md:py-20'>
        <div
          className='pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl'
          aria-hidden
        />
        <MotionInView className='marketing-container relative max-w-3xl space-y-10'>
          <div>
            <h2 className='text-2xl font-bold text-[var(--app-foreground)]'>
              What we believe
            </h2>
            <p className='mt-4 text-base leading-relaxed text-[var(--app-muted)]'>
              Courier networks win when software matches{' '}
              <strong className='font-medium text-[var(--app-foreground)]'>
                how freight actually moves
              </strong>
              —not when teams fight generic tools built for unrelated industries.
              We speak confidently to dispatchers and hub managers, stay
              India-aware on GST and PIN realities, and stay transparent where
              workflows still include manual finance steps.
            </p>
          </div>
          <div>
            <h2 className='text-2xl font-bold text-[var(--app-foreground)]'>
              What we are not positioning as
            </h2>
            <p className='mt-4 text-base leading-relaxed text-[var(--app-muted)]'>
              Consumer parcel tracking as a standalone product is not the core
              story—utility tracking supports operators, but the buyer value is the{' '}
              <strong className='font-medium text-[var(--app-foreground)]'>
                B2B workspace
              </strong>
              . We also avoid implying real-time carrier integrations unless they
              are deployed for your tenant.
            </p>
          </div>
          <div>
            <h2 className='text-2xl font-bold text-[var(--app-foreground)]'>
              Brand &amp; experience
            </h2>
            <p className='mt-4 text-base leading-relaxed text-[var(--app-muted)]'>
              Our interface follows a professional operations aesthetic: primary
              blue for actions, dark sidebar idiom for navigation, stroke icons,
              and restrained motion—so prospects recognize {SITE_NAME} on
              doorear.com before they ever sign in to the application shell.
            </p>
          </div>
        </MotionInView>
      </section>
      <CTABlock
        title='Meet the team behind your rollout'
        description='Book a demo to validate fit across branches, analytics, accounts, and subscription allowances—then Get Started when you are ready to pilot with a defined hub set.'
      />
    </>
  )
}
