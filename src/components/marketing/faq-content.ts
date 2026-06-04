import { SITE_NAME } from './site-config'

export const marketingFaqs = [
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
] as const

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: marketingFaqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}
