export type SolutionPage = {
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
  kind?: 'audience' | 'capability'
}

export const solutionPages: SolutionPage[] = [
  {
    slug: 'manufacturers',
    metaTitle: 'Logistics Software for Manufacturers',
    description:
      'Doorear helps manufacturers coordinate outbound freight, hub handoffs, and distributor deliveries on a unified logistics operating system—branch-aware bookings, MIS, and GST-oriented accounts.',
    keywords: [
      'logistics software for manufacturers',
      'manufacturer freight management',
      'supply chain logistics platform India',
    ],
    eyebrow: 'Solutions · Manufacturers',
    title: 'Logistics operating system for',
    titleHighlight: 'manufacturers & production networks',
    intro:
      'Connect plant dispatch, regional hubs, and distributor lanes in one workspace. Doorear gives manufacturing ops teams shipment booking discipline, PIN validation, and branch-scoped visibility without stitching spreadsheets across plants.',
    painPoints: [
      'Fragmented AWB tracking across plants and third-party transporters.',
      'No single MIS view for outbound volume, delays, and lane performance.',
      'Finance reconciliation gaps between production dispatch and billing artifacts.',
    ],
    benefits: [
      'Unified booking and hub execution across manufacturing locations.',
      'Role-based access for plant dispatch, central ops, and finance.',
      'GST-aware company profiles and invoicing support tied to shipment activity.',
    ],
    relatedBlogSlugs: [
      'booking-to-delivery-shipment-lifecycle-doorear',
      'gst-invoicing-accounts-logistics',
    ],
  },
  {
    slug: 'ecommerce-logistics',
    metaTitle: 'eCommerce Logistics & Last-Mile Software',
    description:
      'Doorear supports eCommerce logistics teams with multi-branch courier operations, last-mile delivery runs, SLA tracking, and operational MIS for high-volume Indian networks.',
    keywords: [
      'ecommerce logistics software India',
      'last mile delivery operations software',
      'courier management for ecommerce',
    ],
    eyebrow: 'Solutions · eCommerce',
    title: 'Last-mile and hub ops for',
    titleHighlight: 'eCommerce & D2C brands',
    intro:
      'Scale order fulfilment without losing control of hub throughput, delivery runs, or SLA adherence. Doorear is built for branch-heavy networks serving eCommerce lanes across Indian PIN codes.',
    painPoints: [
      'Peak-season volume spikes overwhelm manual booking and manifest workflows.',
      'Last-mile visibility gaps cause customer escalations and rework.',
      'Unclear shipment allowances and top-up economics during growth phases.',
    ],
    benefits: [
      'Structured booking-to-POD lifecycle with stage-aware audit trails.',
      'Operational dashboards for OFD, delays, and branch throughput.',
      'Transparent subscription plans with shipment top-ups when volumes spike.',
    ],
    relatedBlogSlugs: [
      'pin-coverage-booking-validation-logistics',
      'logistics-mis-dashboard-operations-teams',
    ],
  },
  {
    slug: 'transporters',
    metaTitle: 'Transporter & Fleet Operations Software',
    description:
      'Doorear gives transporters and linehaul operators a logistics operations platform for bookings, manifests, inward legs, delivery runs, and branch-scoped fleet coordination.',
    keywords: [
      'transporter management software India',
      'fleet and hub management logistics',
      'linehaul operations software',
    ],
    eyebrow: 'Solutions · Transporters',
    title: 'Run linehaul and delivery with',
    titleHighlight: 'transporter-grade control',
    intro:
      'Model bags, manifests, inward legs, and delivery runs the way your network actually moves freight. Doorear keeps hub supervisors and dispatch desks aligned on one system of record.',
    painPoints: [
      'Handoff confusion between first mile, hub sort, and last-mile teams.',
      'Invalid bookings waste capacity on unserviceable lanes.',
      'Limited accountability when consignments stall between stages.',
    ],
    benefits: [
      'PIN validation and serviceable location master before booking.',
      'Clear stage-level status from booking through proof of delivery.',
      'Branch hierarchy that mirrors depots, hubs, and franchise points.',
    ],
    relatedBlogSlugs: [
      'booking-to-delivery-shipment-lifecycle-doorear',
      'multi-branch-courier-operations-one-dashboard',
    ],
  },
  {
    slug: '3pl-operators',
    metaTitle: '3PL Operations Platform for Multi-Branch Networks',
    description:
      'Doorear is a 3PL operations platform for Indian courier and logistics providers—multi-branch execution, RBAC, MIS, procurement RFQs, and GST-oriented accounts in one tenant.',
    keywords: [
      '3PL operations platform',
      'multi branch courier software',
      'courier company admin software',
    ],
    eyebrow: 'Solutions · 3PL',
    title: 'Multi-branch workspace for',
    titleHighlight: '3PL & courier operators',
    intro:
      'Mid-market 3PLs need software that respects branch reality, PIN coverage, and how finance closes the month. Doorear connects ops, commercial, and procurement in one multi-tenant workspace.',
    painPoints: [
      'Branch teams see cross-network noise instead of scoped operational data.',
      'Procurement and ops data live in separate tools and email threads.',
      'Subscription and shipment limit surprises during month-end reviews.',
    ],
    benefits: [
      'Branch-scoped users with granular roles and permissions.',
      'Optional procurement RFQ-to-agreement workflows in the same tenant.',
      'Usage reminders and honest subscription economics with shipment top-ups.',
    ],
    relatedBlogSlugs: [
      'multi-branch-courier-operations-one-dashboard',
      'procurement-rfq-proposals-agreements-logistics',
    ],
  },
  {
    slug: 'logistics-marketplace',
    metaTitle: 'Logistics Marketplace & Network Platform',
    description:
      'Doorear is a logistics marketplace and operating system connecting manufacturers, eCommerce companies, distributors, couriers, transporters, and 3PL providers on one unified platform.',
    keywords: [
      'logistics marketplace India',
      'logistics operating system',
      'supply chain platform',
    ],
    eyebrow: 'Solutions · Marketplace',
    title: 'A logistics marketplace &',
    titleHighlight: 'operating system for India',
    intro:
      'DoorEar connects shippers and logistics providers on a unified platform—bookings, hub execution, partner coordination, MIS, and commercial workflows in one secure, multi-tenant environment.',
    painPoints: [
      'Shippers and carriers coordinate through disconnected tools and WhatsApp threads.',
      'No shared operational truth across partners, branches, and finance teams.',
      'Network growth outpaces spreadsheet-based booking and billing discipline.',
    ],
    benefits: [
      'Single workspace for shippers, 3PLs, transporters, and hub operators.',
      'Partner and branch management with role-scoped visibility.',
      'Operational and commercial analytics aligned to Indian supply chain workflows.',
    ],
    relatedBlogSlugs: [
      'roles-permissions-bookings-billing-safety',
      'logistics-marketplace-vs-courier-software',
      'what-is-logistics-operating-system',
    ],
    kind: 'audience',
  },
  {
    slug: 'courier-aggregation',
    metaTitle: 'Courier Aggregation Platform for B2B Networks',
    description:
      'Doorear is a B2B courier aggregation platform for Indian operators—onboard partner carriers, run branch-scoped bookings, and manage hub handoffs from one logistics operating system.',
    keywords: [
      'courier aggregator platform India',
      'courier aggregation software B2B',
      'connect multiple courier partners one platform',
    ],
    eyebrow: 'Solutions · Courier aggregation',
    title: 'Aggregate courier partners on a',
    titleHighlight: 'single operator workspace',
    intro:
      'Enterprise shippers and 3PLs need more than a consumer shipping widget—they need branch-aware booking, manifests, and MIS across partner networks. Doorear aggregates courier execution inside your operating system, not just rate shopping.',
    painPoints: [
      'Partner bookings scattered across WhatsApp, email, and partner portals.',
      'No unified MIS when multiple courier brands serve the same network.',
      'Finance cannot reconcile partner volumes against a single allowance model.',
    ],
    benefits: [
      'One workspace for bookings, hub ops, and partner-scoped visibility.',
      'Branch hierarchy and RBAC that mirror how your network actually runs.',
      'Operational analytics alongside subscription and shipment top-up controls.',
    ],
    relatedBlogSlugs: [
      'multi-branch-courier-operations-one-dashboard',
      'booking-to-delivery-shipment-lifecycle-doorear',
    ],
    heroImage: '/images/marketing/page-solutions-ai.jpg',
    kind: 'capability',
  },
  {
    slug: 'multi-carrier-shipping',
    metaTitle: 'Multi Carrier Shipping Software India',
    description:
      'Run multi carrier shipping from one logistics platform—AWB-style bookings, hub execution, PIN validation, and branch-scoped MIS for Indian courier and 3PL networks.',
    keywords: [
      'multi carrier shipping software India',
      'multi carrier shipping platform',
      'multi carrier AWB booking system',
    ],
    eyebrow: 'Solutions · Multi-carrier',
    title: 'Multi-carrier shipping with',
    titleHighlight: 'one operational system of record',
    intro:
      'Compare carriers in planning conversations—but execute in one disciplined workspace. Doorear keeps bookings, inward legs, delivery runs, and billing artifacts aligned when you ship across multiple logistics partners.',
    painPoints: [
      'Each carrier workflow lives in a different tool or spreadsheet tab.',
      'Hub teams lose visibility when freight switches between partner lanes.',
      'Invalid bookings slip through when coverage rules differ by partner.',
    ],
    benefits: [
      'Serviceable PIN validation before capacity is committed.',
      'Stage-aware shipment lifecycle from booking through POD.',
      'Branch-scoped users see the right consignments for their hub or lane.',
    ],
    relatedBlogSlugs: [
      'pin-coverage-booking-validation-logistics',
      'booking-to-delivery-shipment-lifecycle-doorear',
    ],
    heroImage: '/images/marketing/web-logistics-hub.jpg',
    kind: 'capability',
  },
  {
    slug: 'supply-chain-visibility',
    metaTitle: 'Supply Chain Visibility Platform India',
    description:
      'Doorear supply chain visibility for mid-market Indian networks—operational MIS, branch throughput, OFD progress, and commercial analytics in one logistics control tower.',
    keywords: [
      'supply chain visibility platform India',
      'logistics control tower software',
      'operational visibility courier network',
    ],
    eyebrow: 'Solutions · Visibility',
    title: 'Supply chain visibility for',
    titleHighlight: 'branch-heavy logistics networks',
    intro:
      'Visibility fails when data lives in exports and status meetings. Doorear gives ops heads and hub managers in-product MIS—pipeline health, delays, delivery performance, and branch KPIs without waiting on analyst turnaround.',
    painPoints: [
      'Leadership discovers delays after customers escalate, not from dashboards.',
      'Branch managers and central ops use different spreadsheet versions.',
      'Commercial teams lack operational context for lane and partner decisions.',
    ],
    benefits: [
      'Operational dashboards tuned for daily standups and control-room rhythm.',
      'Shared metrics across hubs, dispatch, and leadership.',
      'Optional sales & purchase analytics when commercial modules are enabled.',
    ],
    relatedBlogSlugs: [
      'logistics-mis-dashboard-operations-teams',
      'multi-branch-courier-operations-one-dashboard',
    ],
    heroImage: '/images/marketing/page-features-ai.jpg',
    kind: 'capability',
  },
  {
    slug: 'transport-management',
    metaTitle: 'Transport Management System for Courier & 3PL',
    description:
      'Doorear transport management for Indian courier and 3PL operators—bookings, manifests, inward legs, delivery runs, hub coordination, and fleet-aware branch workflows in one TMS-aligned workspace.',
    keywords: [
      'transport management system India',
      'TMS software India courier',
      'transport management software logistics companies',
    ],
    eyebrow: 'Solutions · Transport management',
    title: 'Transport management built for',
    titleHighlight: 'courier & 3PL reality',
    intro:
      'Generic TMS tools ignore branch hierarchy, AWB discipline, and GST-oriented billing contexts Indian networks need. Doorear maps transport execution to how hubs, linehaul, and last-mile teams actually hand off freight.',
    painPoints: [
      'Linehaul and last-mile teams work from disconnected status lists.',
      'Hub inward queues bottleneck without stage-level accountability.',
      'TMS rollouts fail when software ignores PIN coverage and franchise branches.',
    ],
    benefits: [
      'Bags, manifests, inward legs, and delivery runs in one audit trail.',
      'Hub and branch hierarchy that matches depots, franchises, and partners.',
      'Finance artifacts tied to the same tenant as transport activity.',
    ],
    relatedBlogSlugs: [
      'booking-to-delivery-shipment-lifecycle-doorear',
      'roles-permissions-bookings-billing-safety',
    ],
    heroImage: '/images/marketing/hero-logistics-hub.jpg',
    kind: 'capability',
  },
]

export const audienceSolutionPages = solutionPages.filter(
  (p) => p.kind !== 'capability'
)

export const capabilitySolutionPages = solutionPages.filter(
  (p) => p.kind === 'capability'
)

export function getSolutionBySlug(slug: string) {
  return solutionPages.find((page) => page.slug === slug)
}
