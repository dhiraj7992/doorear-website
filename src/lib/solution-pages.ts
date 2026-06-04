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
    metaTitle: 'Logistics Marketplace India | B2B Network Platform',
    description:
      'Doorear is a logistics marketplace India teams use to connect shippers, 3PLs, transporters, and hub operators—bookings, partner coordination, MIS, and GST-oriented accounts on one B2B platform.',
    keywords: [
      'logistics marketplace India',
      'logistics marketplace platform',
      'B2B logistics network India',
      'logistics operating system',
    ],
    eyebrow: 'Solutions · Marketplace',
    title: 'Logistics marketplace India for',
    titleHighlight: 'operators who run real networks',
    intro:
      'A logistics marketplace India can mean consumer label shopping—or a B2B workspace where shippers and carriers share bookings, hub execution, branch hierarchy, and commercial truth. Doorear is built for the latter: mid-market networks that need accountability, not just rate cards.',
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
      'logistics-marketplace-india-b2b-guide',
      'roles-permissions-bookings-billing-safety',
      'logistics-marketplace-vs-courier-software',
      'what-is-logistics-operating-system',
    ],
    kind: 'audience',
  },
  {
    slug: 'courier-aggregation',
    metaTitle: 'Courier Aggregator Platform | B2B India',
    description:
      'Doorear is a courier aggregator platform for Indian B2B operators—onboard partner carriers, run branch-scoped bookings, manifests, hub handoffs, and MIS from one logistics operating system.',
    keywords: [
      'courier aggregator platform',
      'courier aggregator platform India',
      'courier aggregation software',
      'B2B courier aggregator',
    ],
    eyebrow: 'Solutions · Courier aggregator',
    title: 'Courier aggregator platform for',
    titleHighlight: 'branch-heavy operator networks',
    intro:
      'A courier aggregator platform should unify execution—not only compare rates. Doorear lets 3PLs and enterprise shippers coordinate partner carriers with AWB discipline, inward queues, delivery runs, and branch-scoped visibility in one tenant.',
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
      'courier-aggregator-platform-b2b-india',
      'multi-branch-courier-operations-one-dashboard',
      'booking-to-delivery-shipment-lifecycle-doorear',
    ],
    heroImage: '/images/marketing/page-solutions-ai.jpg',
    kind: 'capability',
  },
  {
    slug: 'multi-carrier-shipping',
    metaTitle: 'Multi Carrier Shipping Software | India B2B',
    description:
      'Multi carrier shipping software for Indian courier and 3PL networks—one workspace for AWB bookings, hub execution, PIN validation, partner lanes, and branch-scoped MIS on Doorear.',
    keywords: [
      'multi carrier shipping software',
      'multi carrier shipping software India',
      'multi carrier shipping platform',
      'multi carrier logistics software',
    ],
    eyebrow: 'Solutions · Multi carrier shipping',
    title: 'Multi carrier shipping software with',
    titleHighlight: 'one system of record',
    intro:
      'Multi carrier shipping software fails when each partner lives in a different portal. Doorear keeps bookings, manifests, inward legs, delivery runs, and billing context aligned—so ops, hubs, and finance work from the same consignment story.',
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
      'multi-carrier-shipping-software-india',
      'pin-coverage-booking-validation-logistics',
      'booking-to-delivery-shipment-lifecycle-doorear',
    ],
    heroImage: '/images/marketing/web-logistics-hub.jpg',
    kind: 'capability',
  },
  {
    slug: 'supply-chain-visibility',
    metaTitle: 'Supply Chain Visibility Platform | India',
    description:
      'Doorear is a supply chain visibility platform for mid-market Indian logistics—operational MIS, branch throughput, OFD progress, delay patterns, and commercial analytics in one control tower.',
    keywords: [
      'supply chain visibility platform',
      'supply chain visibility platform India',
      'supply chain visibility software',
      'logistics control tower software',
    ],
    eyebrow: 'Solutions · Supply chain visibility',
    title: 'Supply chain visibility platform for',
    titleHighlight: 'hub and branch networks',
    intro:
      'A supply chain visibility platform should answer daily ops questions—not ship another spreadsheet export. Doorear surfaces pipeline health, OFD progress, inward bottlenecks, and branch KPIs so supervisors act before escalations reach customers.',
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
      'supply-chain-visibility-platform-india',
      'logistics-mis-dashboard-operations-teams',
      'multi-branch-courier-operations-one-dashboard',
    ],
    heroImage: '/images/marketing/page-features-ai.jpg',
    kind: 'capability',
  },
  {
    slug: 'transport-management',
    metaTitle: 'Transport Management Platform | Courier & 3PL India',
    description:
      'Doorear is a transport management platform for Indian courier and 3PL operators—bookings, manifests, inward legs, delivery runs, hub coordination, and branch workflows in one TMS-aligned workspace.',
    keywords: [
      'transport management platform',
      'transport management platform India',
      'transport management system India',
      'TMS software India courier',
    ],
    eyebrow: 'Solutions · Transport management',
    title: 'Transport management platform built for',
    titleHighlight: 'courier & 3PL execution',
    intro:
      'A transport management platform should mirror how freight actually moves—bags, manifests, inward legs, and delivery runs—not only fleet maps. Doorear aligns transport stages with branch hierarchy, PIN coverage, and GST-oriented billing for Indian networks.',
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
      'transport-management-platform-courier-3pl',
      'booking-to-delivery-shipment-lifecycle-doorear',
      'roles-permissions-bookings-billing-safety',
    ],
    heroImage: '/images/marketing/hero-logistics-hub.jpg',
    kind: 'capability',
  },
  {
    slug: 'logistics-partner-management',
    metaTitle: 'Logistics Partner Management Software | India',
    description:
      'Logistics partner management on Doorear—onboard carriers and 3PL partners, scope branch access, coordinate bookings and hub handoffs, and align MIS with commercial agreements.',
    keywords: [
      'logistics partner management',
      'logistics partner management software',
      'carrier partner management platform',
      '3PL partner management India',
    ],
    eyebrow: 'Solutions · Partner management',
    title: 'Logistics partner management for',
    titleHighlight: 'multi-partner courier networks',
    intro:
      'Logistics partner management breaks when each relationship runs on separate WhatsApp threads and spreadsheets. Doorear keeps partner onboarding, branch-scoped bookings, hub accountability, and volume visibility in one operator workspace.',
    painPoints: [
      'Partner SLAs discussed without shared operational data.',
      'Branch teams cannot see which partner owns which lane or consignment.',
      'Commercial renewals disconnected from hub performance and delay patterns.',
    ],
    benefits: [
      'Partner coordination inside the same tenant as bookings and hub ops.',
      'RBAC and branch hierarchy limit cross-network noise.',
      'MIS and optional procurement modules support partner reviews with facts.',
    ],
    relatedBlogSlugs: [
      'logistics-partner-management-software-guide',
      'multi-branch-courier-operations-one-dashboard',
      'roles-permissions-bookings-billing-safety',
      'procurement-rfq-proposals-agreements-logistics',
    ],
    heroImage: '/images/marketing/page-solutions-ai.jpg',
    kind: 'capability',
  },
  {
    slug: 'courier-franchise',
    metaTitle: 'Courier Franchise Software | Multi-Branch India',
    description:
      'Courier franchise software for Indian networks—franchise branches, hub supervisors, booking discipline, PIN validation, and central MIS without losing local execution control.',
    keywords: [
      'courier franchise software',
      'courier franchise management software India',
      'franchise courier operations platform',
      'multi branch courier franchise software',
    ],
    eyebrow: 'Solutions · Courier franchise',
    title: 'Courier franchise software for',
    titleHighlight: 'central ops & local branches',
    intro:
      'Courier franchise software must respect that franchises book locally while headquarters needs truth on volumes, delays, and billing. Doorear models branch hierarchy, scoped users, and hub workflows so franchise networks scale without spreadsheet chaos.',
    painPoints: [
      'Franchise bookings bypass validation, creating hub rework and billing disputes.',
      'Head office lacks timely MIS across franchise points and partner lanes.',
      'Permission sprawl lets franchise users see data outside their territory.',
    ],
    benefits: [
      'Branch-scoped bookings, manifests, and delivery runs per franchise point.',
      'Central dashboards for throughput, OFD, and recurring delay lanes.',
      'Subscription and shipment allowances aligned to honest network economics.',
    ],
    relatedBlogSlugs: [
      'courier-franchise-software-multi-branch',
      'multi-branch-courier-operations-one-dashboard',
      'booking-to-delivery-shipment-lifecycle-doorear',
      'subscription-plans-offline-billing-transparency',
    ],
    heroImage: '/images/marketing/web-logistics-hub.jpg',
    kind: 'capability',
  },
  {
    slug: 'last-mile-delivery',
    metaTitle: 'Last Mile Delivery Platform | India B2B',
    description:
      'Last mile delivery platform for Indian courier and 3PL networks—delivery runs, OFD tracking, POD discipline, hub handoffs, and branch-scoped MIS on Doorear.',
    keywords: [
      'last mile delivery platform',
      'last mile delivery platform India',
      'last mile delivery software',
      'last mile logistics software B2B',
    ],
    eyebrow: 'Solutions · Last mile',
    title: 'Last mile delivery platform for',
    titleHighlight: 'high-volume Indian networks',
    intro:
      'A last mile delivery platform should connect hub sort to OFD and proof of delivery—not stop at a tracking link. Doorear gives supervisors stage-level accountability, operational dashboards, and branch-scoped visibility from inward through POD.',
    painPoints: [
      'OFD progress invisible until customer complaints arrive.',
      'Delivery runs planned outside the same system as hub inward queues.',
      'POD and exception handling inconsistent across branches and partners.',
    ],
    benefits: [
      'Delivery runs and stage-aware lifecycle tied to booking records.',
      'MIS for OFD, delays, and branch throughput during peak seasons.',
      'PIN validation upstream so last mile does not inherit bad bookings.',
    ],
    relatedBlogSlugs: [
      'last-mile-delivery-platform-india-b2b',
      'booking-to-delivery-shipment-lifecycle-doorear',
      'logistics-mis-dashboard-operations-teams',
      'pin-coverage-booking-validation-logistics',
    ],
    heroImage: '/images/marketing/page-features-ai.jpg',
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
