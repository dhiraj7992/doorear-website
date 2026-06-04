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
    metaTitle: 'RFQ Management Software | Logistics India',
    description:
      'RFQ management software for logistics teams on Doorear—structured RFQs, proposals, agreements, and public quotes in the same tenant as bookings, hub ops, and MIS.',
    keywords: [
      'RFQ management software',
      'RFQ management software logistics',
      'logistics RFQ software India',
      'procurement RFQ logistics',
    ],
    eyebrow: 'Features · RFQ management',
    title: 'RFQ management software from',
    titleHighlight: 'request to signed agreement',
    intro:
      'RFQ management software should sit next to the shipments and lanes it governs—not in a disconnected procurement portal. When enabled, Doorear runs RFQs, proposals, and agreements alongside operational data so commercial and ops teams share one workspace.',
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
    relatedBlogSlugs: [
      'rfq-management-software-logistics-india',
      'procurement-rfq-proposals-agreements-logistics',
    ],
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
  {
    slug: 'shipment-tracking',
    metaTitle: 'Shipment Tracking Software | B2B India',
    description:
      'Shipment tracking software for Indian logistics operators—stage-aware AWB lifecycle, hub and OFD visibility, POD records, and branch-scoped MIS on Doorear.',
    keywords: [
      'shipment tracking software',
      'shipment tracking software India',
      'B2B shipment tracking platform',
      'AWB tracking software logistics',
    ],
    eyebrow: 'Features · Shipment tracking',
    title: 'Shipment tracking software with',
    titleHighlight: 'ops-grade lifecycle visibility',
    intro:
      'Shipment tracking software for operators means more than a customer-facing status page—it means supervisors see booking, inward, OFD, and POD stages with audit discipline. Doorear tracks consignments through hub handoffs and delivery runs in one tenant.',
    painPoints: [
      'Tracking updates lag because hubs and dispatch use different tools.',
      'Customer-facing status does not match internal hub reality.',
      'Exceptions and POD gaps discovered only after billing disputes.',
    ],
    benefits: [
      'Stage-aware shipment lifecycle from booking through proof of delivery.',
      'Operational MIS for delays, OFD, and branch throughput—not only pings.',
      'Single consignment record for CS, hubs, finance, and leadership.',
    ],
    relatedBlogSlugs: [
      'shipment-tracking-software-b2b-operators',
      'booking-to-delivery-shipment-lifecycle-doorear',
      'logistics-mis-dashboard-operations-teams',
    ],
    heroImage: '/images/marketing/web-ops-5.jpg',
  },
]

export function getFeatureBySlug(slug: string) {
  return featurePages.find((page) => page.slug === slug)
}
