import type { Metadata } from 'next'
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
      <section className='border-b border-[var(--app-border)] bg-[var(--app-surface)] py-14 md:py-20'>
        <div className='marketing-container max-w-4xl'>
          <h1 className='text-3xl font-bold tracking-tight text-[var(--app-foreground)] md:text-4xl'>
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
                Data Security and Retention
              </h2>
              <p className='mt-3 leading-relaxed'>
                We apply reasonable technical and organizational safeguards to
                protect data. Retention periods depend on account status, legal
                requirements, and legitimate business needs.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-[var(--app-foreground)]'>
                Your Rights
              </h2>
              <p className='mt-3 leading-relaxed'>
                You may request access, correction, or deletion of personal data,
                subject to applicable law and platform obligations. Contact us to
                submit privacy-related requests.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-[var(--app-foreground)]'>
                Contact
              </h2>
              <p className='mt-3 leading-relaxed'>
                For privacy questions or requests, contact us via the form on
                <a
                  href='/contact'
                  className='ml-1 font-medium text-[var(--app-primary)] hover:underline'>
                  /contact
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
