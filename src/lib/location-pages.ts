export type LocationPage = {
  slug: string
  city: string
  state: string
  titleQualifier: string
  /** Unique SEO intro — local logistics context, not a city-name template swap */
  intro: string
  localHooks: string[]
  painPoints: string[]
  relatedSolutionSlugs: string[]
  relatedGuides: { href: string; label: string }[]
}

export const locationPages: LocationPage[] = [
  {
    slug: 'delhi',
    city: 'Delhi',
    state: 'Delhi NCR',
    titleQualifier: 'high-volume courier lanes and enterprise branch networks',
    intro:
      'Delhi NCR concentrates enterprise shippers, franchise booking points, and dense hub-to-hub transfers across Noida, Gurugram, and Faridabad. Operators here need booking quality control at scale—not another spreadsheet for every depot.',
    localHooks: [
      'NCR franchise and owned-branch mix with overlapping PIN coverage',
      'High AWB volume with tight SLA expectations from enterprise accounts',
      'Hub sorting to last-mile OFD handoffs across satellite cities',
    ],
    painPoints: [
      'Control booking quality across multiple depots and franchise points.',
      'Track handoffs from hub sorting to last-mile delivery runs.',
      'Give ops and finance one source of truth for shipment and billing records.',
    ],
    relatedSolutionSlugs: ['courier-franchise', 'ecommerce-logistics', '3pl-operators'],
    relatedGuides: [
      { href: '/learn/courier-operations', label: 'Courier operations guide' },
      { href: '/compare/logistics-operating-system-vs-tms', label: 'LOS vs TMS' },
      { href: '/features/hub-operations', label: 'Hub operations module' },
    ],
  },
  {
    slug: 'mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    titleQualifier: 'time-sensitive metro deliveries and dense PIN coverage',
    intro:
      'Mumbai’s metro density, island geography, and e-commerce peaks punish weak PIN discipline. Mid-market courier and 3PL teams win when serviceability is validated before capacity is committed—and MIS shows OFD drift the same day.',
    localHooks: [
      'Island / suburb PIN complexity with frequent micro-zone changes',
      'Same-day and next-day pressure from marketplace sellers',
      'Dense hub throughput with limited dock and cage space',
    ],
    painPoints: [
      'Reduce route-level leakages with serviceable PIN validation.',
      'Manage branch throughput with real-time MIS snapshots.',
      'Scale users and shipment allowances with transparent plan controls.',
    ],
    relatedSolutionSlugs: ['last-mile-delivery', 'ecommerce-logistics', 'multi-carrier-shipping'],
    relatedGuides: [
      { href: '/features/shipment-tracking', label: 'Shipment tracking' },
      { href: '/solutions/last-mile-delivery', label: 'Last-mile delivery' },
      { href: '/blog', label: 'Logistics ops blog' },
    ],
  },
  {
    slug: 'hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    titleQualifier: 'multi-branch fulfillment and regional linehaul coordination',
    intro:
      'Hyderabad pairs IT/pharma outbound with expanding regional linehaul into Telangana and Andhra. Networks here need unified booking → bagging → manifest → delivery updates with role-scoped hub teams—not chat threads as the system of record.',
    localHooks: [
      'Pharma and electronics-sensitive handling corridors',
      'Growing intercity linehaul to coastal and Rayalaseema lanes',
      'Multi-branch fulfillment with central ops oversight',
    ],
    painPoints: [
      'Unify booking, bagging, manifests, and delivery updates.',
      'Apply role-based controls for hub teams and central operations.',
      'Improve SLA tracking using shipment lifecycle stage visibility.',
    ],
    relatedSolutionSlugs: ['3pl-operators', 'transport-management', 'supply-chain-visibility'],
    relatedGuides: [
      { href: '/learn/logistics-operating-system', label: 'What is a logistics OS?' },
      { href: '/features/multi-branch-rbac', label: 'Multi-branch RBAC' },
      { href: '/solutions/transport-management', label: 'Transport management' },
    ],
  },
  {
    slug: 'bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    titleQualifier: 'e-commerce courier operations and rapid network scaling',
    intro:
      'Bengaluru’s e-commerce and D2C density forces courier networks to scale branches and seats faster than legacy tools allow. Doorear helps ops run control-tower standups on shared metrics while procurement and commercial teams stay aligned when modules are enabled.',
    localHooks: [
      'Rapid branch and dark-store adjacent courier growth',
      'Tech-native shippers expecting digital POD and stage visibility',
      'Peak-season seat and shipment allowance pressure',
    ],
    painPoints: [
      'Prevent dispatch bottlenecks with branch-aware workflows.',
      'Run daily control tower standups on shared operational metrics.',
      'Align procurement and commercial teams with operational data.',
    ],
    relatedSolutionSlugs: ['ecommerce-logistics', 'logistics-marketplace', 'courier-aggregation'],
    relatedGuides: [
      { href: '/solutions/ecommerce-logistics', label: 'eCommerce logistics' },
      { href: '/compare/doorear-vs-shiprocket', label: 'Doorear vs Shiprocket' },
      { href: '/features/procurement-rfq', label: 'Procurement RFQ' },
    ],
  },
  {
    slug: 'chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    titleQualifier: 'coastal logistics corridors and hub-to-hub reliability',
    intro:
      'Chennai anchors coastal inbound and TN/AP corridor freight where hub-to-hub reliability beats heroics. Operators standardize city and intercity routes, cut invalid bookings, and keep first-mile → POD accountability visible to supervisors.',
    localHooks: [
      'Port-adjacent inbound and industrial outbound mix',
      'Corridor reliability into interior Tamil Nadu',
      'Franchise and owned hub combinations on coastal lanes',
    ],
    painPoints: [
      'Standardize operations across city and intercity routes.',
      'Minimize rework from invalid bookings and unclear handoffs.',
      'Improve accountability from first mile through POD.',
    ],
    relatedSolutionSlugs: ['transporters', '3pl-operators', 'supply-chain-visibility'],
    relatedGuides: [
      { href: '/features/hub-operations', label: 'Hub operations' },
      { href: '/solutions/transporters', label: 'For transporters' },
      { href: '/glossary', label: 'Logistics glossary' },
    ],
  },
  {
    slug: 'pune',
    city: 'Pune',
    state: 'Maharashtra',
    titleQualifier: 'manufacturing corridors and industrial outbound logistics',
    intro:
      'Pune’s auto, engineering, and industrial belts need plant dispatch coordinated with regional hubs and linehaul partners. PIN validation before new lanes, plus shared ops–finance visibility, keeps margin intact as corridors expand.',
    localHooks: [
      'Plant and warehouse outbound into Maharashtra corridors',
      'B2B freight with appointment and SLA sensitivity',
      'Partner linehaul mixed with owned hub capacity',
    ],
    painPoints: [
      'Coordinate plant dispatch with regional hub and linehaul partners.',
      'Validate PIN coverage before committing capacity on new lanes.',
      'Give finance and ops shared visibility on shipment and billing records.',
    ],
    relatedSolutionSlugs: ['manufacturers', 'logistics-partner-management', 'transport-management'],
    relatedGuides: [
      { href: '/solutions/manufacturers', label: 'For manufacturers' },
      { href: '/solutions/logistics-partner-management', label: 'Partner management' },
      { href: '/features/gst-logistics-billing', label: 'GST logistics billing' },
    ],
  },
  {
    slug: 'kolkata',
    city: 'Kolkata',
    state: 'West Bengal',
    titleQualifier: 'eastern India distribution and intercity linehaul',
    intro:
      'Kolkata remains a gateway for eastern India distribution into Bengal, Odisha, and the Northeast approaches. Booking discipline across branches and franchise partners, plus hub inward and delivery-run MIS, replaces overnight spreadsheet exports.',
    localHooks: [
      'Eastern distribution gateway with long-haul dependency',
      'Franchise-heavy booking networks in city and districts',
      'Inward queue pressure during festive retail peaks',
    ],
    painPoints: [
      'Unify booking discipline across branches and franchise partners.',
      'Track hub inward queues and delivery run performance in one MIS view.',
      'Scale users and shipment allowances with transparent subscription controls.',
    ],
    relatedSolutionSlugs: ['courier-franchise', '3pl-operators', 'supply-chain-visibility'],
    relatedGuides: [
      { href: '/solutions/courier-franchise', label: 'Courier franchise ops' },
      { href: '/solutions/supply-chain-visibility', label: 'Supply chain visibility' },
      { href: '/pricing', label: 'Plans & allowances' },
    ],
  },
  {
    slug: 'ahmedabad',
    city: 'Ahmedabad',
    state: 'Gujarat',
    titleQualifier: 'textile, pharma, and SME freight networks',
    intro:
      'Ahmedabad’s textile, pharma, and SME freight fabric runs on multi-branch courier habits. Reducing booking errors, applying hub RBAC, and aligning GST-oriented billing with shipment activity are table stakes for operators competing on reliability.',
    localHooks: [
      'SME courier networks with high SKU and document mix',
      'Pharma and textile lane sensitivity',
      'GST-aligned billing expectations from commercial teams',
    ],
    painPoints: [
      'Reduce booking errors across multi-branch SME courier operations.',
      'Apply role-based access for hub teams and central dispatch.',
      'Align GST-oriented billing artifacts with operational shipment activity.',
    ],
    relatedSolutionSlugs: ['manufacturers', '3pl-operators', 'courier-aggregation'],
    relatedGuides: [
      { href: '/features/gst-logistics-billing', label: 'GST logistics billing' },
      { href: '/features/multi-branch-rbac', label: 'Multi-branch RBAC' },
      { href: '/learn/procurement-logistics', label: 'Procurement in logistics' },
    ],
  },
  {
    slug: 'jaipur',
    city: 'Jaipur',
    state: 'Rajasthan',
    titleQualifier: 'regional distribution and retail freight corridors',
    intro:
      'Jaipur hubs regional retail and handicraft-adjacent freight across Rajasthan corridors. Expanding lanes need unified booking and hub ops, PIN checks before peak retail seasons, and MIS leadership can trust without waiting for exports.',
    localHooks: [
      'State-wide retail freight with seasonal peaks',
      'Regional distribution expanding beyond metro pins',
      'Lean teams needing shared operational dashboards',
    ],
    painPoints: [
      'Unify booking and hub ops across expanding Rajasthan lanes.',
      'Validate PIN serviceability before peak retail seasons.',
      'Give leadership MIS without overnight spreadsheet exports.',
    ],
    relatedSolutionSlugs: ['ecommerce-logistics', 'courier-franchise', 'last-mile-delivery'],
    relatedGuides: [
      { href: '/faq', label: 'Operator FAQ' },
      { href: '/solutions/last-mile-delivery', label: 'Last-mile delivery' },
      { href: '/features/shipment-tracking', label: 'Shipment tracking' },
    ],
  },
  {
    slug: 'kochi',
    city: 'Kochi',
    state: 'Kerala',
    titleQualifier: 'coastal inbound logistics and southern lane coordination',
    intro:
      'Kochi coordinates coastal inbound with southern intercity lanes where hub inward queues and linehaul partners must stay in sync. Stage-level last-mile accountability and clear seat/shipment allowances matter as volumes grow.',
    localHooks: [
      'Coastal inbound meeting inland Kerala distribution',
      'Intercity southern lane partnerships',
      'Growing volumes with lean supervisory benches',
    ],
    painPoints: [
      'Coordinate hub inward queues with intercity linehaul partners.',
      'Track last-mile delivery runs with stage-level accountability.',
      'Scale users and shipment allowances as southern volumes grow.',
    ],
    relatedSolutionSlugs: ['transporters', 'last-mile-delivery', '3pl-operators'],
    relatedGuides: [
      { href: '/solutions/transporters', label: 'For transporters' },
      { href: '/compare/marketplace-vs-aggregator', label: 'Marketplace vs aggregator' },
      { href: '/contact', label: 'Book a Kochi-fit demo' },
    ],
  },
  {
    slug: 'indore',
    city: 'Indore',
    state: 'Madhya Pradesh',
    titleQualifier: 'central India hub routing and multi-branch rollouts',
    intro:
      'Indore sits on central India hub routing where franchise and owned-branch mixes are common. Standardizing bookings, giving hub supervisors SLA dashboards, and aligning procurement when commercial modules are on accelerates multi-branch rollouts.',
    localHooks: [
      'Central India cross-dock and hub routing role',
      'Franchise + owned branch rollout patterns',
      'Commercial modules layered after ops stability',
    ],
    painPoints: [
      'Standardize bookings across franchise and owned branch mix.',
      'Improve SLA tracking with operational dashboards for hub supervisors.',
      'Align procurement and ops when commercial modules are enabled.',
    ],
    relatedSolutionSlugs: ['courier-franchise', 'logistics-marketplace', '3pl-operators'],
    relatedGuides: [
      { href: '/solutions/courier-franchise', label: 'Courier franchise' },
      { href: '/features/agreements-contracts', label: 'Agreements & contracts' },
      { href: '/learn/logistics-operating-system', label: 'Logistics OS primer' },
    ],
  },
]

export function getLocationBySlug(slug: string) {
  return locationPages.find((item) => item.slug === slug)
}
