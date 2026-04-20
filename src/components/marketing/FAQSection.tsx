import { SITE_NAME } from './site-config'

const faqs = [
  {
    q: `What is ${SITE_NAME} used for?`,
    a: `${SITE_NAME} is a cloud logistics operations platform for courier and logistics companies: book and track shipments, coordinate hubs and last-mile delivery, run operational and commercial analytics, and manage branches, coverage, fleet, partners, users, and roles in one workspace.`,
  },
  {
    q: `Does ${SITE_NAME} support multiple branches?`,
    a: `Yes. Branch hierarchy and branch-scoped users mirror real networks so each site sees the right bookings, manifests, and delivery runs—core to multi branch courier software.`,
  },
  {
    q: 'Can we control who books shipments vs. who sees analytics?',
    a: 'Yes. Roles and granular permissions let you separate operational actions from sensitive analytics and company setup—reducing risk across teams.',
  },
  {
    q: 'How does billing work for the subscription?',
    a: 'Plans include trials, usage reminders, and renewal transparency. Where in-product payment checkout is not the default, teams coordinate offline with finance—see Pricing for details.',
  },
]

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export default function FAQSection() {
  return (
    <section className='border-t border-[var(--app-border)] bg-[var(--app-card)] py-16 md:py-20'>
      <div className='marketing-container max-w-3xl'>
        <h2 className='text-3xl font-bold tracking-tight text-[var(--app-foreground)]'>
          Frequently asked questions
        </h2>
        <dl className='mt-10 space-y-8'>
          {faqs.map((item) => (
            <div key={item.q}>
              <dt className='text-lg font-semibold text-[var(--app-foreground)]'>
                {item.q}
              </dt>
              <dd className='mt-2 text-base leading-relaxed text-[var(--app-muted)]'>
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
