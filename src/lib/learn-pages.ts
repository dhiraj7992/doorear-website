import type { SolutionPage } from '@/lib/solution-pages'

export type LearnPage = SolutionPage

export const learnPages: LearnPage[] = [
  {
    slug: 'logistics-operating-system',
    metaTitle: 'Logistics Operating System Guide | India B2B',
    description:
      'What a logistics operating system (LOS) is, how it differs from TMS and courier apps, and how Doorear unifies marketplace, hub ops, and MIS for Indian networks.',
    keywords: [
      'logistics operating system',
      'logistics operating system India',
      'LOS logistics software',
    ],
    eyebrow: 'Learn · LOS',
    title: 'Logistics operating system guide for',
    titleHighlight: 'branch-heavy Indian networks',
    intro:
      'A logistics operating system (LOS) is the operational layer where bookings, hub handoffs, delivery runs, MIS, procurement, and billing context live in one tenant—not a consumer tracking app or a fleet-only TMS.',
    painPoints: [
      'Bookings, hubs, and finance run in disconnected tools after the sales demo.',
      'Leadership cannot see branch truth without analyst-built spreadsheets.',
      'Marketplace introductions fail when execution falls back to WhatsApp.',
    ],
    benefits: [
      'One workspace for shippers, 3PLs, transporters, and hub operators.',
      'Stage-aware shipment lifecycle from booking through POD.',
      'Optional RFQ and agreements beside operational data when modules are on.',
    ],
    relatedBlogSlugs: [
      'what-is-logistics-operating-system',
      'logistics-marketplace-vs-courier-software',
      'booking-to-delivery-shipment-lifecycle-doorear',
    ],
    heroImage: '/images/marketing/hero-logistics.jpg',
    kind: 'capability',
  },
  {
    slug: 'courier-operations',
    metaTitle: 'Courier Operations Software Guide | India',
    description:
      'How courier operations software should model AWB booking, hub inward queues, manifests, delivery runs, PIN validation, and branch RBAC on Doorear.',
    keywords: [
      'courier operations software',
      'courier management guide India',
      'hub operations software',
    ],
    eyebrow: 'Learn · Courier ops',
    title: 'Courier operations playbook for',
    titleHighlight: 'hub and branch networks',
    intro:
      'Courier operations software should mirror how freight moves—booking discipline, inward sort, OFD, and POD—with branch-scoped users and PIN validation before capacity is committed.',
    painPoints: [
      'Invalid bookings flood hubs because coverage rules are not enforced upstream.',
      'Supervisors lack stage-level visibility between inward and last mile.',
      'Franchise and hub teams see cross-network data they should not access.',
    ],
    benefits: [
      'Bags, manifests, inward legs, and delivery runs in one audit trail.',
      'Operational MIS for daily standups—not monthly exports.',
      'Multi-branch hierarchy aligned to franchises, hubs, and partners.',
    ],
    relatedBlogSlugs: [
      'multi-branch-courier-operations-one-dashboard',
      'pin-coverage-booking-validation-logistics',
      'logistics-mis-dashboard-operations-teams',
    ],
    heroImage: '/images/marketing/web-logistics-hub.jpg',
    kind: 'capability',
  },
  {
    slug: 'procurement-logistics',
    metaTitle: 'Logistics Procurement & RFQ Guide',
    description:
      'How logistics procurement software connects RFQs, proposals, and agreements to operational shipment data on Doorear—without a separate quoting portal.',
    keywords: [
      'logistics procurement software',
      'logistics RFQ guide',
      'freight procurement India',
    ],
    eyebrow: 'Learn · Procurement',
    title: 'Logistics procurement guide from',
    titleHighlight: 'RFQ to signed agreement',
    intro:
      'Logistics procurement should not live in email while ops runs elsewhere. When procurement modules are enabled, Doorear keeps RFQs, proposals, and agreements in the same tenant as bookings and hub execution.',
    painPoints: [
      'Commercial teams negotiate lanes without operational performance context.',
      'RFQ version chaos delays partner onboarding and renewals.',
      'Finance cannot tie agreements to shipment volumes in one system.',
    ],
    benefits: [
      'Structured RFQ → proposal → agreement flows with audit discipline.',
      'Public quotes when customers need shareable commercial artifacts.',
      'Foundation for SLA reviews using the same MIS dashboards ops uses.',
    ],
    relatedBlogSlugs: [
      'procurement-rfq-proposals-agreements-logistics',
      'rfq-management-software-logistics-india',
      'gst-invoicing-accounts-logistics',
    ],
    heroImage: '/images/marketing/web-ops-5.jpg',
    kind: 'capability',
  },
]

export function getLearnBySlug(slug: string) {
  return learnPages.find((page) => page.slug === slug)
}
