export type GlossaryTerm = {
  slug: string
  term: string
  shortDefinition: string
  definition: string
  relatedSlugs?: string[]
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'logistics-operating-system',
    term: 'Logistics Operating System (LOS)',
    shortDefinition:
      'A unified software layer where bookings, hub execution, analytics, and commercial workflows run for a logistics network.',
    definition:
      'A logistics operating system (LOS) is the operational system of record for courier and 3PL networks—bookings, hub handoffs, delivery runs, MIS, roles, and billing context in one tenant. Doorear is built as a LOS for branch-heavy Indian operators, not as a standalone consumer tracking portal.',
    relatedSlugs: ['logistics-marketplace', 'tms'],
  },
  {
    slug: 'logistics-marketplace',
    term: 'Logistics Marketplace',
    shortDefinition:
      'A platform connecting shippers and logistics providers with shared operational discipline.',
    definition:
      'A logistics marketplace connects demand (shippers, brands, manufacturers) with capacity (couriers, transporters, 3PLs). Doorear combines marketplace positioning with an operator workspace so execution does not fall back to spreadsheets after introductions.',
    relatedSlugs: ['logistics-operating-system', 'courier-aggregator'],
  },
  {
    slug: 'courier-management-software',
    term: 'Courier Management Software',
    shortDefinition: 'Software for courier companies to book, execute, and manage shipments across branches.',
    definition:
      'Courier management software covers forward booking, hub operations, manifests, delivery runs, branch hierarchy, and operational MIS. Doorear targets mid-market Indian networks with GST-oriented billing support and multi-branch RBAC.',
    relatedSlugs: ['multi-branch-courier-software', 'awb'],
  },
  {
    slug: 'multi-branch-courier-software',
    term: 'Multi-Branch Courier Software',
    shortDefinition: 'Courier software where each branch sees scoped bookings, hubs, and KPIs.',
    definition:
      'Multi-branch courier software mirrors parent/child branch structures so hub managers, dispatchers, and finance see the right data. Doorear uses branch-scoped users and permissions aligned to real franchise and hub networks.',
    relatedSlugs: ['courier-management-software', 'branch-hierarchy'],
  },
  {
    slug: 'awb',
    term: 'AWB (Air Waybill / Consignment Reference)',
    shortDefinition: 'A structured consignment identifier used in courier booking workflows.',
    definition:
      'In Indian courier operations, AWB-style orders are the system of record for a consignment. Doorear supports forward booking screens where revisions stay auditable for customer service, hubs, and finance.',
    relatedSlugs: ['shipment-booking', 'shipment-lifecycle'],
  },
  {
    slug: 'shipment-booking',
    term: 'Shipment Booking',
    shortDefinition: 'Creating and revising consignments before hub execution.',
    definition:
      'Shipment booking is the first mile of the operational lifecycle—capture lanes, parties, and service expectations before bags and manifests. Doorear validates serviceable PINs before capacity is committed.',
    relatedSlugs: ['awb', 'serviceable-pin'],
  },
  {
    slug: 'serviceable-pin',
    term: 'Serviceable PIN',
    shortDefinition: 'A destination PIN your network can actually serve before booking is locked.',
    definition:
      'Serviceable PIN validation uses a location/PIN master so dispatchers do not book lanes you cannot serve—reducing RTO, rescans, and margin leakage. It is a core Doorear discipline for Indian networks.',
    relatedSlugs: ['pin-validation', 'shipment-booking'],
  },
  {
    slug: 'pin-validation',
    term: 'PIN Validation',
    shortDefinition: 'Checking coverage rules before a booking consumes hub capacity.',
    definition:
      'PIN validation prevents invalid routes at booking time rather than after sortation. Doorear ties validation to your serviceable location master used by frontline booking teams.',
    relatedSlugs: ['serviceable-pin'],
  },
  {
    slug: 'hub-operations',
    term: 'Hub Operations',
    shortDefinition: 'Sortation, inward processing, and handoffs inside a courier hub.',
    definition:
      'Hub operations include inward queues, bagging, manifests, and handoffs to linehaul or last mile. Doorear models stages so supervisors see where freight sits—not only “in transit.”',
    relatedSlugs: ['inward-leg', 'manifest', 'bag'],
  },
  {
    slug: 'inward-leg',
    term: 'Inward Leg',
    shortDefinition: 'Hub processing stage when freight arrives for sortation.',
    definition:
      'An inward leg represents freight entering a hub for processing. Delays here often cause downstream OFD drift—Doorear surfaces inward lag in operational MIS and AI risk signals.',
    relatedSlugs: ['hub-operations', 'delivery-run'],
  },
  {
    slug: 'delivery-run',
    term: 'Delivery Run (OFD)',
    shortDefinition: 'Last-mile execution from hub to proof of delivery.',
    definition:
      'Delivery runs schedule and track last-mile execution. OFD (out for delivery) progress is a daily KPI for hub supervisors—visible in Doorear operational dashboards.',
    relatedSlugs: ['pod', 'ofd'],
  },
  {
    slug: 'manifest',
    term: 'Manifest',
    shortDefinition: 'A document grouping consignments for a lane or vehicle movement.',
    definition:
      'Manifests group bags/consignments for linehaul or hub transfers. They make handoffs auditable when something slips between first mile, hub sort, and last mile.',
    relatedSlugs: ['bag', 'hub-operations'],
  },
  {
    slug: 'bag',
    term: 'Bag',
    shortDefinition: 'A physical grouping of consignments moving together between stages.',
    definition:
      'Bags model how freight is grouped before manifests and linehaul. Doorear ties bags to shipment stages for accountability across hubs.',
    relatedSlugs: ['manifest'],
  },
  {
    slug: 'pod',
    term: 'POD (Proof of Delivery)',
    shortDefinition: 'Confirmation that delivery was completed.',
    definition:
      'Proof of delivery closes the shipment lifecycle. Doorear tracks stage progression toward POD so ops and customer service share one story.',
    relatedSlugs: ['delivery-run', 'shipment-lifecycle'],
  },
  {
    slug: 'ofd',
    term: 'OFD (Out for Delivery)',
    shortDefinition: 'Shipments currently on last-mile delivery runs.',
    definition:
      'OFD is a core daily metric for courier standups. Doorear MIS highlights OFD progress and drift by branch and lane.',
    relatedSlugs: ['delivery-run'],
  },
  {
    slug: 'shipment-lifecycle',
    term: 'Shipment Lifecycle',
    shortDefinition: 'Stages from booking through hub handoffs to POD.',
    definition:
      'The shipment lifecycle spans booking, bagging, manifests, inward, linehaul, delivery runs, and POD. Doorear uses stage-aware records so AI and supervisors can explain delays.',
    relatedSlugs: ['awb', 'pod'],
  },
  {
    slug: 'logistics-mis',
    term: 'Logistics MIS',
    shortDefinition: 'Management information dashboards for daily courier operations.',
    definition:
      'Logistics MIS covers pipeline volume, delays, OFD, and branch throughput for control-room standups. Doorear provides operational dashboards—not only monthly spreadsheet exports.',
    relatedSlugs: ['control-tower', 'supply-chain-visibility'],
  },
  {
    slug: 'control-tower',
    term: 'Control Tower (Logistics)',
    shortDefinition: 'A single view of network health, delays, and exceptions.',
    definition:
      'A logistics control tower unifies operational signals for leadership and hub heads. Doorear supply chain visibility positioning maps to in-product MIS and exception prioritization.',
    relatedSlugs: ['logistics-mis', 'supply-chain-visibility'],
  },
  {
    slug: 'supply-chain-visibility',
    term: 'Supply Chain Visibility',
    shortDefinition: 'Seeing where freight is and what is at risk across the network.',
    definition:
      'Supply chain visibility for mid-market operators means operational truth in minutes—bookings, hub stages, delays, and branch KPIs. Doorear focuses on B2B execution visibility, not consumer tracking alone.',
    relatedSlugs: ['control-tower', 'logistics-mis'],
  },
  {
    slug: '3pl',
    term: '3PL (Third-Party Logistics)',
    shortDefinition: 'A provider operating logistics on behalf of shippers.',
    definition:
      '3PL operators run multi-branch networks with mixed hub, partner, and linehaul models. Doorear is positioned for 3PL and courier companies running their own operator workspace.',
    relatedSlugs: ['courier-management-software'],
  },
  {
    slug: 'tms',
    term: 'TMS (Transport Management System)',
    shortDefinition: 'Software focused on transport planning and execution.',
    definition:
      'A TMS often emphasizes fleet, routes, and linehaul. Doorear includes transport execution (manifests, inward, delivery runs) inside a broader courier/3PL operating system with marketplace and procurement depth.',
    relatedSlugs: ['logistics-operating-system', 'transport-management'],
  },
  {
    slug: 'transport-management',
    term: 'Transport Management',
    shortDefinition: 'Coordinating linehaul, hubs, and last mile across a network.',
    definition:
      'Transport management in courier networks spans hubs, bags, manifests, and delivery runs—not only trucks. Doorear maps TMS-style execution to branch-heavy Indian operations.',
    relatedSlugs: ['tms', 'hub-operations'],
  },
  {
    slug: 'courier-aggregator',
    term: 'Courier Aggregator (B2B)',
    shortDefinition: 'A platform coordinating multiple courier partners for enterprise shippers or 3PLs.',
    definition:
      'B2B courier aggregation is not the same as consumer shipping aggregators. Doorear aggregates partner execution inside an operator workspace with branch hierarchy and MIS—not only rate shopping.',
    relatedSlugs: ['logistics-marketplace', 'multi-carrier-shipping'],
  },
  {
    slug: 'multi-carrier-shipping',
    term: 'Multi-Carrier Shipping',
    shortDefinition: 'Operating multiple logistics partners from one system of record.',
    definition:
      'Multi-carrier shipping requires consistent booking discipline and hub handoffs across partners. Doorear keeps execution and MIS unified while commercial teams negotiate lanes.',
    relatedSlugs: ['courier-aggregator'],
  },
  {
    slug: 'rfq',
    term: 'RFQ (Request for Quotation)',
    shortDefinition: 'A structured procurement request to vendors or partners.',
    definition:
      'Logistics RFQs structure vendor collaboration before agreements. Doorear supports RFQ → proposal → agreement flows when procurement modules are enabled.',
    relatedSlugs: ['procurement', 'agreement'],
  },
  {
    slug: 'procurement',
    term: 'Procurement (Logistics)',
    shortDefinition: 'Commercial workflows to buy capacity and services from partners.',
    definition:
      'Procurement in logistics includes RFQs, proposals, and agreements—often trapped in email. Doorear optional modules keep commercial artifacts in the same tenant as operations.',
    relatedSlugs: ['rfq', 'agreement'],
  },
  {
    slug: 'agreement',
    term: 'Logistics Agreement',
    shortDefinition: 'Commercial terms governing lanes, SLAs, or partner capacity.',
    definition:
      'Agreements should stay visible to ops and finance—not only legal folders. Doorear links agreements to procurement history and operational context when modules are on.',
    relatedSlugs: ['rfq', 'contract-management'],
  },
  {
    slug: 'contract-management',
    term: 'Contract Management (Logistics)',
    shortDefinition: 'Managing commercial contracts alongside operational activity.',
    definition:
      'Contract management for 3PLs includes renewals, SLAs, and lane economics. Doorear agreements module supports commercial records inside the logistics operating system.',
    relatedSlugs: ['agreement'],
  },
  {
    slug: 'gst-logistics-invoicing',
    term: 'GST Logistics Invoicing',
    shortDefinition: 'GST-oriented company and invoicing fields for Indian logistics billing.',
    definition:
      'GST logistics invoicing software provides structures for tax invoices and vouchers tied to shipment activity—software support, not tax advice. Doorear keeps finance artifacts in the same tenant as ops.',
    relatedSlugs: ['courier-management-software'],
  },
  {
    slug: 'shipment-top-up',
    term: 'Shipment Top-Up',
    shortDefinition: 'Add-on shipment capacity beyond plan allowances.',
    definition:
      'Shipment top-ups let operators add capacity during peaks without immediate tier jumps—transparent economics on the Doorear pricing page.',
    relatedSlugs: ['subscription'],
  },
  {
    slug: 'branch-hierarchy',
    term: 'Branch Hierarchy',
    shortDefinition: 'Parent/child branch structure mirroring a logistics network.',
    definition:
      'Branch hierarchy configures hubs, franchises, and child sites. Doorear scopes users and data to branches so teams see only what they operate.',
    relatedSlugs: ['multi-branch-courier-software'],
  },
  {
    slug: 'rto',
    term: 'RTO (Return to Origin)',
    shortDefinition: 'Consignment returned when delivery cannot be completed.',
    definition:
      'RTO rates hurt margin—often linked to bad bookings or coverage gaps. PIN validation and booking discipline reduce RTO drivers upstream.',
    relatedSlugs: ['serviceable-pin'],
  },
]

export function getGlossaryBySlug(slug: string) {
  return glossaryTerms.find((t) => t.slug === slug)
}
