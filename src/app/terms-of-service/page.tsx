import type { Metadata } from 'next'
import { ScrollReveal, SectionShell } from '@/components/marketing/primitives'
import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of service for using Doorear logistics marketplace and operating system at doorear.com.',
  alternates: { canonical: '/terms-of-service' },
  openGraph: {
    title: `Terms of Service | ${SITE_NAME}`,
    description: 'Terms governing use of Doorear marketing site and product services.',
    url: '/terms-of-service',
    type: 'website',
  },
}

export default function TermsOfServicePage() {
  const siteUrl = getSiteUrl()
  const policyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${SITE_NAME} Terms of Service`,
    description: 'Terms of service for Doorear logistics platform.',
    url: `${siteUrl}/terms-of-service`,
    inLanguage: 'en-IN',
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(policyJsonLd) }}
      />
      <SectionShell tone='surface' bordered spacing='default'>
        <div className='marketing-container max-w-4xl'>
          <ScrollReveal>
            <div className='premium-glass-panel rounded-3xl border border-[var(--app-border)] p-8 md:p-12'>
              <p className='text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--app-muted)]'>
                Legal
              </p>
              <h1 className='mt-3 text-3xl font-bold tracking-tight text-[var(--app-foreground)] md:text-4xl'>
                Terms of Service
              </h1>
              <p className='mt-4 text-sm leading-relaxed text-[var(--app-muted)]'>
                Last updated: June 4, 2026
              </p>
              <p className='mt-6 text-base leading-relaxed text-[var(--app-muted)]'>
                These Terms of Service govern your access to {SITE_NAME} at doorear.com
                and related product services. By using our website or platform, you agree
                to these terms.
              </p>

              <div className='mt-10 space-y-8 text-[var(--app-muted)]'>
                <section>
                  <h2 className='text-xl font-semibold text-[var(--app-foreground)]'>
                    Service description
                  </h2>
                  <p className='mt-3 leading-relaxed'>
                    {SITE_NAME} provides a logistics marketplace and logistics operating
                    system for bookings, hub operations, analytics, procurement (where
                    enabled), and account workflows. Features vary by subscription plan
                    and tenant configuration.
                  </p>
                </section>

                <section>
                  <h2 className='text-xl font-semibold text-[var(--app-foreground)]'>
                    Acceptable use
                  </h2>
                  <p className='mt-3 leading-relaxed'>
                    You agree not to misuse the platform, attempt unauthorized access,
                    interfere with service availability, or use the product in violation
                    of applicable laws or contractual obligations with your customers.
                  </p>
                </section>

                <section>
                  <h2 className='text-xl font-semibold text-[var(--app-foreground)]'>
                    Subscriptions & billing
                  </h2>
                  <p className='mt-3 leading-relaxed'>
                    Plan limits, trials, and billing terms are described on our Pricing
                    page. Where in-product checkout is not available, commercial terms
                    may be coordinated offline with finance teams as stated during
                    onboarding.
                  </p>
                </section>

                <section>
                  <h2 className='text-xl font-semibold text-[var(--app-foreground)]'>
                    Limitation of liability
                  </h2>
                  <p className='mt-3 leading-relaxed'>
                    {SITE_NAME} is provided on an as-is basis to the extent permitted by
                    law. Operational and compliance decisions remain your responsibility;
                    software supports workflows but does not replace professional or legal
                    advice.
                  </p>
                </section>

                <section>
                  <h2 className='text-xl font-semibold text-[var(--app-foreground)]'>
                    Contact
                  </h2>
                  <p className='mt-3 leading-relaxed'>
                    Questions about these terms? Contact us via{' '}
                    <a
                      href='/contact'
                      className='font-semibold text-[var(--app-primary)] hover:underline'>
                      doorear.com/contact
                    </a>
                    . See also our{' '}
                    <a
                      href='/privacy-policy'
                      className='font-semibold text-[var(--app-primary)] hover:underline'>
                      Privacy Policy
                    </a>
                    .
                  </p>
                </section>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionShell>
    </>
  )
}
