export type FeaturePage = {
  slug: string
  metaTitle: string
  description: string
  keywords: string[]
  eyebrow: string
  title: string
  titleHighlight: string
  intro: string
  painPoints: string[]
  benefits: string[]
  relatedBlogSlugs: string[]
  heroImage?: string
}

export const featurePages: FeaturePage[] = [
  {
    slug: 'procurement-rfq',
    metaTitle: 'RFQ Management Software for Logistics',
    description:
      'Doorear RFQ management for logistics teams—structured RFQs, proposals, agreements, and public quotes in the same tenant as bookings, hubs, and MIS.',
    keywords: [
      'RFQ management software logistics',
      'procurement RFQ logistics software India',
      'logistics RFQ to agreement workflow',
    ],
    eyebrow: 'Features · Procurement & RFQ',
    title: 'RFQ management from',
    titleHighlight: 'request to signed agreement',
    intro:
      'Stop losing vendor negotiations in email threads. When procurement is enabled, Doorear runs RFQs, proposals, and agreements alongside operational shipment data—so commercial teams and ops share one workspace.',
    painPoints: [
      'RFQ versions scattered across inboxes with no audit trail.',
      'Commercial terms disconnected from operational lane performance.',
      'Separate quoting portals that finance and ops never fully adopt.',
    ],
    benefits: [
      'Structured RFQ → proposal → agreement flows inside your tenant.',
      'Public quote support when customers need shareable commercial artifacts.',
      'Operational context next to procurement when analytics modules are enabled.',
    ],
    relatedBlogSlugs: ['procurement-rfq-proposals-agreements-logistics'],
    heroImage: '/images/marketing/web-ops-5.jpg',
  },
  {
    slug: 'agreements-contracts',
    metaTitle: 'Logistics Contract Management Software',
    description:
      'Manage logistics agreements and commercial contracts in Doorear—link procurement outcomes to partner lanes, branches, and billing context within your logistics operating system.',
    keywords: [
      'logistics contract management software India',
      'transport contract management system',
      'freight agreement management software',
    ],
    eyebrow: 'Features · Contracts & agreements',
    title: 'Contract management aligned to',
    titleHighlight: 'how logistics networks buy',
    intro:
      'Contracts should not live in a folder while ops runs elsewhere. Doorear keeps agreements in the same multi-tenant workspace as bookings and hub execution—so commercial commitments stay visible to teams who execute them.',
    painPoints: [
      'Signed agreements disconnected from day-to-day booking rules.',
      'SLA discussions without operational data to back them up.',
      'Renewals tracked manually while volumes shift branch by branch.',
    ],
    benefits: [
      'Agreement records alongside RFQ and proposal history when procurement is on.',
      'Role-scoped access so commercial and ops see appropriate contract context.',
      'Foundation for SLA reviews using the same MIS dashboards ops uses daily.',
    ],
    relatedBlogSlugs: [
      'procurement-rfq-proposals-agreements-logistics',
      'subscription-plans-offline-billing-transparency',
    ],
    heroImage: '/images/marketing/page-about-ai.jpg',
  },
]

export function getFeatureBySlug(slug: string) {
  return featurePages.find((page) => page.slug === slug)
}
