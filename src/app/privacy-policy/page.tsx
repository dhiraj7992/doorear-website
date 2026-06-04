import type { Metadata } from 'next'
import { ScrollReveal, SectionShell } from '@/components/marketing/primitives'
import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read how Doorear collects, uses, and protects personal and operational data for courier and logistics teams.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      'Data handling, retention, security, and contact details for privacy-related requests.',
    url: '/privacy-policy',
    type: 'website',
  },
}

export default function PrivacyPolicyPage() {
  const siteUrl = getSiteUrl()
  const policyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${SITE_NAME} Privacy Policy`,
    description:
      'Privacy policy for Doorear logistics operations platform and courier management software.',
    url: `${siteUrl}/privacy-policy`,
    inLanguage: 'en',
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
                Privacy Policy
              </h1>
              <p className='mt-4 text-sm leading-relaxed text-[var(--app-muted)]'>
                Last updated: April 27, 2026
              </p>
              <p className='mt-6 text-base leading-relaxed text-[var(--app-muted)]'>
                This Privacy Policy explains how {SITE_NAME} collects, uses, stores,
                and protects information when you use doorear.com and related product
                services.
              </p>

              <div className='mt-10 space-y-8 text-[var(--app-muted)]'>
                <section>
                  <h2 className='text-xl font-semibold text-[var(--app-foreground)]'>
                    Information We Collect
                  </h2>
                  <p className='mt-3 leading-relaxed'>
                    We may collect contact information (name, email, phone), account
                    details, company profile data, usage telemetry, and operational
                    records needed to provide courier and logistics workflows.
                  </p>
                </section>

                <section>
                  <h2 className='text-xl font-semibold text-[var(--app-foreground)]'>
                    How We Use Information
                  </h2>
                  <p className='mt-3 leading-relaxed'>
                    Information is used to operate and secure the platform, support
                    onboarding and customer service, improve reliability, prevent abuse,
                    and meet legal or contractual obligations.
                  </p>
                </section>

                <section>
                  <h2 className='text-xl font-semibold text-[var(--app-foreground)]'>
                    Data Sharing
                  </h2>
                  <p className='mt-3 leading-relaxed'>
                    We do not sell personal information. Data may be shared with trusted
                    service providers for hosting, analytics, and support under
                    confidentiality and security obligations, or when required by law.
                  </p>
                </section>

                <section>
                  <h2 className='text-xl font-semibold text-[var(--app-foreground)]'>
                    Security & Retention
                  </h2>
                  <p className='mt-3 leading-relaxed'>
                    We apply administrative, technical, and organizational safeguards
                    appropriate to SaaS operations. Data is retained only as long as
                    needed for service delivery, legal compliance, and dispute
                    resolution.
                  </p>
                </section>

                <section>
                  <h2 className='text-xl font-semibold text-[var(--app-foreground)]'>
                    Contact
                  </h2>
                  <p className='mt-3 leading-relaxed'>
                    For privacy-related requests, contact us through{' '}
                    <a
                      href='/contact'
                      className='font-semibold text-[var(--app-primary)] hover:underline'>
                      doorear.com/contact
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
