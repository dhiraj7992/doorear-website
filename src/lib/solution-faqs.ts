/** Page-level FAQs for GEO — keyed by solution or feature slug */

export const solutionPageFaqs: Record<string, readonly { q: string; a: string }[]> = {
  'courier-aggregation': [
    {
      q: 'What is B2B courier aggregation on Doorear?',
      a: 'Partner carriers are coordinated inside one operator workspace—bookings, hub handoffs, manifests, and MIS—rather than separate portals per partner.',
    },
    {
      q: 'Is Doorear the same as Shiprocket?',
      a: 'No. Consumer shipping aggregators focus on label purchase. Doorear is for operators and enterprise networks running execution.',
    },
    {
      q: 'Can franchise branches use aggregation features?',
      a: 'Yes. Branch hierarchy scopes which partners and bookings each site sees.',
    },
    {
      q: 'How do finance teams reconcile partner volumes?',
      a: 'Shipment activity and billing artifacts stay in one tenant when accounts modules are enabled—reducing spreadsheet reconciliation.',
    },
    {
      q: 'Does aggregation include rate shopping?',
      a: 'Doorear emphasizes execution discipline and visibility; commercial lane decisions remain with your procurement and ops leaders.',
    },
  ],
  'transport-management': [
    {
      q: 'Does Doorear replace a TMS?',
      a: 'For many courier/3PL networks, Doorear covers hub, booking, and delivery execution inside a logistics OS. Fleet-heavy TMS needs should be validated with sales.',
    },
    {
      q: 'What transport stages does Doorear model?',
      a: 'Bags, manifests, inward legs, and delivery runs—with stage-level accountability to POD.',
    },
    {
      q: 'Can linehaul and last mile share one system?',
      a: 'Yes. Supervisors see handoffs across stages instead of disconnected status lists.',
    },
    {
      q: 'Is PIN validation part of transport management?',
      a: 'Yes. Serviceable PIN checks happen before booking to protect capacity on valid lanes.',
    },
    {
      q: 'How do hub supervisors use Doorear daily?',
      a: 'MIS dashboards highlight inward queues, OFD progress, and recurring delay patterns for standups.',
    },
  ],
  'multi-carrier-shipping': [
    {
      q: 'How does multi-carrier shipping work in Doorear?',
      a: 'All partners share one booking and execution model—AWB records, hub stages, and MIS—while commercial teams manage lane economics.',
    },
    {
      q: 'Do we need integrations per carrier?',
      a: 'Deployment-specific—confirm partner integrations with sales. Core value is unified operator execution.',
    },
    {
      q: 'Can eCommerce peaks be handled?',
      a: 'Yes. Shipment top-ups and branch throughput views support seasonal spikes—see Pricing.',
    },
    {
      q: 'How do we prevent invalid multi-carrier bookings?',
      a: 'PIN validation and role-scoped booking rules reduce bad routes before sortation.',
    },
    {
      q: 'Is there one AWB story per consignment?',
      a: 'Yes. Revisions stay in a single system of record for CS, hubs, and finance.',
    },
  ],
  'logistics-marketplace': [
    {
      q: 'What is a logistics marketplace India operators use?',
      a: 'Doorear connects shippers and logistics providers in a B2B workspace—bookings, hub execution, partners, and MIS—not a consumer label-shopping flow.',
    },
    {
      q: 'Who uses Doorear as a logistics marketplace?',
      a: 'Manufacturers, eCommerce ops, transporters, 3PLs, and hub operators running branch-heavy Indian networks.',
    },
    {
      q: 'Is Doorear a shipper-facing marketplace only?',
      a: 'No. It is an operator workspace where both shippers and carriers can coordinate execution with role-scoped access.',
    },
    {
      q: 'Does the marketplace include procurement?',
      a: 'When procurement modules are enabled, RFQs and agreements live in the same tenant as operational bookings.',
    },
    {
      q: 'How is pricing handled on the marketplace?',
      a: 'Subscription plans and shipment allowances are transparent—see Pricing. Offline billing may apply per deployment.',
    },
  ],
  'supply-chain-visibility': [
    {
      q: 'What does a supply chain visibility platform show in Doorear?',
      a: 'Operational MIS—pipeline health, OFD, delays, branch throughput, and optional commercial analytics when modules are enabled.',
    },
    {
      q: 'Is this real-time GPS fleet tracking?',
      a: 'Doorear focuses on operational execution visibility across hub stages. Confirm GPS or telematics integrations with sales for your tenant.',
    },
    {
      q: 'Can branch managers see only their KPIs?',
      a: 'Yes. Branch hierarchy and RBAC scope dashboards to the right hubs and franchises.',
    },
    {
      q: 'How often should ops review visibility dashboards?',
      a: 'Designed for daily standups and control-room rhythm—not monthly spreadsheet exports.',
    },
    {
      q: 'Does visibility connect to billing?',
      a: 'When accounts modules are on, finance can align shipment activity with billing artifacts in the same tenant.',
    },
  ],
  'logistics-partner-management': [
    {
      q: 'What is logistics partner management in Doorear?',
      a: 'Onboarding and coordinating carrier or 3PL partners with branch-scoped bookings, hub handoffs, and shared MIS.',
    },
    {
      q: 'Can partners have different access levels?',
      a: 'Role-based access and branch hierarchy limit what each user and site sees.',
    },
    {
      q: 'How do we review partner performance?',
      a: 'Use operational MIS and optional procurement history—lane economics stay with your commercial team.',
    },
    {
      q: 'Does partner management replace contracts?',
      a: 'Agreements can live in Doorear when procurement is enabled; legal compliance remains your counsel’s responsibility.',
    },
    {
      q: 'Is this the same as courier aggregation?',
      a: 'Partner management is the relationship layer; aggregation is executing multiple partners in one workspace—Doorear covers both.',
    },
  ],
  'courier-franchise': [
    {
      q: 'What is courier franchise software on Doorear?',
      a: 'Multi-branch workspace for franchise booking, hub execution, central MIS, and scoped permissions across franchise points.',
    },
    {
      q: 'Can franchises book independently?',
      a: 'Yes—with PIN validation and branch rules so invalid routes do not flood hubs.',
    },
    {
      q: 'Does head office see all franchise volumes?',
      a: 'Central roles can view network MIS; franchise users see scoped operational data.',
    },
    {
      q: 'How are shipment limits handled for franchises?',
      a: 'Subscription allowances and top-ups apply at tenant level—confirm branch allocation with sales.',
    },
    {
      q: 'Is franchise billing offline?',
      a: 'Billing may be offline per deployment—see Pricing and discuss rollout with sales.',
    },
  ],
  'last-mile-delivery': [
    {
      q: 'What is a last mile delivery platform in Doorear?',
      a: 'Delivery runs, OFD progress, POD, and hub-to-last-mile handoffs in one stage-aware lifecycle.',
    },
    {
      q: 'Does Doorear support eCommerce peaks?',
      a: 'Yes. Branch throughput views and shipment top-ups help during seasonal spikes.',
    },
    {
      q: 'How is POD captured?',
      a: 'Proof of delivery is part of the shipment lifecycle—confirm field workflows for your tenant with sales.',
    },
    {
      q: 'Can last mile and linehaul share one system?',
      a: 'Yes. Inward, sort, and delivery stages stay on one consignment record.',
    },
    {
      q: 'Is customer tracking included?',
      a: 'Operator visibility is primary; confirm customer-facing tracking features for your deployment.',
    },
  ],
  'shipment-tracking': [
    {
      q: 'What is shipment tracking software for operators?',
      a: 'Stage-aware AWB lifecycle—booking, inward, OFD, POD—with MIS for hubs and leadership.',
    },
    {
      q: 'Is Doorear only a tracking link generator?',
      a: 'No. It is B2B execution software where tracking reflects real hub and delivery activity.',
    },
    {
      q: 'Can CS teams see the same status as hubs?',
      a: 'Yes. One consignment record reduces conflicting updates across teams.',
    },
    {
      q: 'How do exceptions appear in tracking?',
      a: 'Stage-level accountability surfaces delays and rework before month-end surprises.',
    },
    {
      q: 'Does tracking integrate with partner systems?',
      a: 'Integration scope is deployment-specific—confirm with sales.',
    },
  ],
  'procurement-rfq': [
    {
      q: 'What logistics RFQ workflows does Doorear support?',
      a: 'RFQs, proposals, agreements, and public quotes when procurement modules are enabled—alongside operational bookings.',
    },
    {
      q: 'Can vendors respond in Doorear?',
      a: 'Structured RFQ flows reduce email version chaos; confirm deployed workflows for your tenant with sales.',
    },
    {
      q: 'Are RFQs linked to operations data?',
      a: 'When analytics modules are on, commercial teams can reference operational performance alongside procurement.',
    },
    {
      q: 'Is this a separate procurement portal?',
      a: 'No—it is inside the same multi-tenant workspace as bookings and hub execution.',
    },
    {
      q: 'Does Doorear provide legal contract templates?',
      a: 'Doorear provides software structures for agreements—not legal advice. Your counsel owns compliance decisions.',
    },
  ],
  'hub-operations': [
    {
      q: 'What hub stages does Doorear model?',
      a: 'Inward legs, bags, manifests, and handoffs toward linehaul or last mile—with operational MIS for backlog and delays.',
    },
    {
      q: 'Can hub managers see only their site?',
      a: 'Yes—branch hierarchy and RBAC scope inward queues and KPIs to the right hubs.',
    },
    {
      q: 'Does hub software include customer tracking only?',
      a: 'No—Doorear is operator-first with stage-level execution visibility, not only customer-facing pings.',
    },
  ],
  'multi-branch-rbac': [
    {
      q: 'How does multi-branch RBAC work?',
      a: 'Parent/child branches and role permissions limit which bookings, analytics, and setup each user can access.',
    },
    {
      q: 'Is franchise support included?',
      a: 'Yes—franchise points can book locally while headquarters sees network MIS when roles allow.',
    },
    {
      q: 'Can we delegate safely as we grow?',
      a: 'Granular roles reduce risk compared to flat tenants where every user sees the entire network.',
    },
  ],
  'gst-logistics-billing': [
    {
      q: 'Does Doorear provide tax advice?',
      a: 'No—Doorear provides software structures for invoices and vouchers; your advisors own GST compliance decisions.',
    },
    {
      q: 'Is billing tied to shipments?',
      a: 'Finance artifacts are designed to reference the same tenant and shipment activity ops manages.',
    },
    {
      q: 'Is checkout always in-product?',
      a: 'Plans and renewals may coordinate offline—see Pricing for transparent subscription economics.',
    },
  ],
  integrations: [
    {
      q: 'What can Doorear integrate with?',
      a: 'Scope depends on your deployment—ERP, WMS, carrier, and analytics integrations should be confirmed with sales.',
    },
    {
      q: 'Should we integrate before hub discipline?',
      a: 'Establish booking-to-POD truth in Doorear first; integrations extend the system of record rather than replace it.',
    },
    {
      q: 'Are APIs available?',
      a: 'Confirm API and partner connector availability for your tenant during rollout planning.',
    },
  ],
  'logistics-operating-system': [
    {
      q: 'What is a logistics operating system?',
      a: 'An LOS unifies bookings, hub execution, MIS, procurement, and billing context for operator networks—not only label purchase.',
    },
    {
      q: 'How is Doorear different from a TMS?',
      a: 'Doorear includes transport execution inside a broader courier/3PL OS with marketplace and branch depth.',
    },
    {
      q: 'Who should adopt an LOS?',
      a: 'Mid-market Indian courier, 3PL, and enterprise networks with multi-branch accountability.',
    },
  ],
  'courier-operations': [
    {
      q: 'What is courier operations software?',
      a: 'Software for AWB booking, hub sort, delivery runs, PIN validation, and branch-scoped MIS.',
    },
    {
      q: 'Does Doorear support POD?',
      a: 'Yes—POD is part of the stage-aware shipment lifecycle; confirm field workflows with sales.',
    },
    {
      q: 'Can eCommerce peaks be handled?',
      a: 'Branch throughput views and shipment top-ups help during seasonal spikes.',
    },
  ],
  'procurement-logistics': [
    {
      q: 'Is procurement required?',
      a: 'Procurement modules are optional—enable RFQs and agreements when commercial teams need them in the same tenant.',
    },
    {
      q: 'Can vendors respond in Doorear?',
      a: 'Structured RFQ flows reduce email chaos; confirm deployed workflows for your tenant.',
    },
    {
      q: 'Are agreements linked to ops?',
      a: 'When modules are on, commercial artifacts sit beside operational data for reviews.',
    },
  ],
}

export function getPageFaqs(slug: string): readonly { q: string; a: string }[] {
  return solutionPageFaqs[slug] ?? []
}
