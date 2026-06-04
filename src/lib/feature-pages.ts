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
  {
    slug: 'hub-operations',
    metaTitle: 'Hub Operations Software | Courier India',
    description:
      'Hub operations software for inward queues, bagging, manifests, and handoffs to linehaul or last mile—on Doorear with stage-level accountability.',
    keywords: [
      'hub operations software',
      'courier hub management',
      'inward operations logistics',
    ],
    eyebrow: 'Features · Hub operations',
    title: 'Hub operations software for',
    titleHighlight: 'sortation and handoffs',
    intro:
      'Hub operations fail when inward lag is invisible until customers complain. Doorear models inward legs, bags, and manifests so supervisors see bottlenecks before SLAs slip.',
    painPoints: [
      'Inward queues tracked on whiteboards while CS uses a different status story.',
      'Bag and manifest discipline inconsistent across branches.',
      'No shared MIS for recurring inward delay patterns.',
    ],
    benefits: [
      'Stage-aware records from booking through hub sort and onward legs.',
      'Operational dashboards highlight inward backlog and OFD drift.',
      'Branch-scoped visibility for hub managers vs central ops.',
    ],
    relatedBlogSlugs: [
      'hub-inward-queue-bottlenecks',
      'booking-to-delivery-shipment-lifecycle-doorear',
    ],
    heroImage: '/images/marketing/hero-logistics-hub.jpg',
  },
  {
    slug: 'multi-branch-rbac',
    metaTitle: 'Multi Branch Courier Software | RBAC',
    description:
      'Multi branch courier software with branch hierarchy, scoped users, and granular roles—how Doorear mirrors franchise and hub networks in India.',
    keywords: [
      'multi branch courier software',
      'courier branch management',
      'logistics RBAC India',
    ],
    eyebrow: 'Features · Multi-branch',
    title: 'Multi-branch courier software with',
    titleHighlight: 'scoped access and hierarchy',
    intro:
      'Multi-branch courier software should limit noise—franchise teams see their bookings and hubs, while headquarters retains control-tower MIS without micromanaging every scan.',
    painPoints: [
      'Flat tenants expose cross-branch data and create booking mistakes.',
      'Permission changes require IT tickets for every new hub.',
      'Franchise performance reviews lack branch-scoped KPIs.',
    ],
    benefits: [
      'Parent/child branch hierarchy aligned to real sites.',
      'Granular roles separate booking, analytics, and company setup.',
      'Safer rollouts as you add cities and franchise points.',
    ],
    relatedBlogSlugs: [
      'multi-branch-courier-operations-one-dashboard',
      'courier-franchise-software-multi-branch',
      'logistics-software-security-rbac',
    ],
    heroImage: '/images/marketing/page-solutions-ai.jpg',
  },
  {
    slug: 'gst-logistics-billing',
    metaTitle: 'GST Logistics Invoicing Software | India',
    description:
      'GST logistics invoicing software structures for Indian courier and 3PL tenants—tax invoices, vouchers, and company profiles tied to shipment activity on Doorear.',
    keywords: [
      'GST logistics invoicing software',
      'courier billing software India',
      'logistics tax invoice software',
    ],
    eyebrow: 'Features · GST billing',
    title: 'GST logistics invoicing software with',
    titleHighlight: 'ops-aligned finance artifacts',
    intro:
      'GST logistics invoicing software should sit in the same tenant as shipments—not a finance tool that re-imports volumes monthly. Doorear provides software structures; your advisors own compliance decisions.',
    painPoints: [
      'Finance rebuilds shipment lists from ops exports every month.',
      'GST fields inconsistent across branches and products.',
      'Billing disputes lack a shared consignment record with ops.',
    ],
    benefits: [
      'Company profile and GST-oriented fields in one workspace.',
      'Invoicing terms and AWB products aligned to how you bill.',
      'Finance artifacts reference the same activity hubs manage daily.',
    ],
    relatedBlogSlugs: [
      'gst-invoicing-accounts-logistics',
      'subscription-plans-offline-billing-transparency',
    ],
    heroImage: '/images/marketing/page-pricing-ai.jpg',
  },
]

export function getFeatureBySlug(slug: string) {
  return featurePages.find((page) => page.slug === slug)
}
