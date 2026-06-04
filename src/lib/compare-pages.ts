export type ComparePage = {
  slug: string
  metaTitle: string
  description: string
  h1: string
  summary: string
  whenDoorear: string[]
  whenAlternative: string[]
  comparisonRows: { aspect: string; los: string; tms: string }[]
  faqs: { q: string; a: string }[]
  leftColumnLabel?: string
  rightColumnLabel?: string
  relatedLinks?: { href: string; label: string }[]
}

export const comparePages: ComparePage[] = [
  {
    slug: 'logistics-operating-system-vs-tms',
    metaTitle: 'Logistics Operating System vs TMS — What to Choose',
    description:
      'Compare a logistics operating system (LOS) with a transport management system (TMS) for Indian courier and 3PL networks—and when Doorear fits.',
    h1: 'Logistics operating system vs TMS: what should your network buy?',
    summary:
      'A TMS often optimizes transport moves and fleet. A logistics operating system (LOS) unifies bookings, hub execution, MIS, commercial workflows, and branch hierarchy—the daily work of courier and 3PL operators in India.',
    whenDoorear: [
      'You run multi-branch courier or 3PL operations with hub sort and last mile.',
      'You need AWB-style booking discipline, PIN validation, and branch-scoped RBAC.',
      'Finance wants GST-oriented artifacts tied to the same tenant as shipments.',
      'You want optional procurement RFQs and agreements—not a separate portal.',
    ],
    whenAlternative: [
      'You only need fleet GPS and route optimization without hub/booking depth.',
      'You are a shipper buying labels from carriers (consumer-style aggregation).',
      'You require deep global TMS features not deployed for your tenant yet.',
    ],
    comparisonRows: [
      {
        aspect: 'Primary user',
        los: 'Courier/3PL operators, hub managers, finance',
        tms: 'Transport planners, fleet managers',
      },
      {
        aspect: 'Core unit of work',
        los: 'AWB/booking → bags → manifests → inward → delivery → POD',
        tms: 'Trips, routes, vehicles, loads',
      },
      {
        aspect: 'Branch reality',
        los: 'Native multi-branch hierarchy and scoped users',
        tms: 'Often flattened or fleet-centric',
      },
      {
        aspect: 'India context',
        los: 'PIN masters, GST billing support, INR plans',
        tms: 'Varies by vendor',
      },
      {
        aspect: 'Marketplace angle',
        los: 'Doorear connects shippers & providers on one OS',
        tms: 'Typically execution-only',
      },
      {
        aspect: 'Commercial workflows',
        los: 'Optional RFQ → agreement in same tenant',
        tms: 'Often separate procurement tools',
      },
    ],
    faqs: [
      {
        q: 'Is Doorear a TMS?',
        a: 'Doorear includes transport execution (manifests, inward legs, delivery runs) but is positioned as a logistics operating system and marketplace for branch-heavy courier/3PL networks—not a fleet-only TMS.',
      },
      {
        q: 'Can we use Doorear instead of spreadsheets?',
        a: 'Yes—that is a common mid-market starting point. Doorear replaces stitched spreadsheets for bookings, hub stages, and MIS with one system of record.',
      },
      {
        q: 'Do we still need a TMS if we have Doorear?',
        a: 'If your pain is hub/booking/MIS and branch accountability, an LOS may be sufficient. If you need specialized fleet telematics or global planning, evaluate integrations honestly with sales.',
      },
    ],
  },
  {
    slug: 'doorear-vs-shiprocket',
    metaTitle: 'Doorear vs Shiprocket — B2B Operators vs D2C Shipping',
    description:
      'Compare Doorear B2B logistics operating system with consumer-style shipping aggregators like Shiprocket—when operators need hub execution, not only labels.',
    h1: 'Doorear vs Shiprocket: operator workspace or label shopping?',
    summary:
      'Shiprocket-style tools help D2C brands buy labels from carriers. Doorear helps courier, 3PL, and enterprise networks run bookings, hubs, delivery, MIS, and finance workflows—with optional marketplace connectivity.',
    leftColumnLabel: 'Doorear (B2B LOS)',
    rightColumnLabel: 'Consumer aggregator (e.g. Shiprocket)',
    whenDoorear: [
      'You operate hubs, franchises, or partner networks—not only ship parcels.',
      'You need branch RBAC, PIN validation, and booking-to-POD discipline.',
      'Finance wants GST-oriented artifacts tied to shipment activity.',
    ],
    whenAlternative: [
      'You are a D2C brand optimizing label rates without running hubs.',
      'You do not need inward queues, manifests, or franchise-scoped MIS.',
    ],
    comparisonRows: [
      {
        aspect: 'Primary buyer',
        los: 'Courier/3PL ops, IT, finance at networks',
        tms: 'D2C brand shipping teams',
      },
      {
        aspect: 'Core workflow',
        los: 'Booking → hub → delivery → POD → billing context',
        tms: 'Rate shop → label → track',
      },
      {
        aspect: 'Branch hierarchy',
        los: 'Native multi-branch and franchise scoping',
        tms: 'Typically single-shipper focused',
      },
      {
        aspect: 'Partner execution',
        los: 'B2B partner coordination inside one tenant',
        tms: 'Carrier label purchase',
      },
      {
        aspect: 'MIS / control tower',
        los: 'Operational dashboards for supervisors',
        tms: 'Shipment status for brand CS',
      },
    ],
    relatedLinks: [
      { href: '/solutions/logistics-marketplace', label: 'Logistics marketplace' },
      { href: '/blog/logistics-marketplace-vs-courier-software', label: 'Marketplace vs courier software' },
    ],
    faqs: [
      {
        q: 'Is Doorear a Shiprocket competitor?',
        a: 'Doorear competes for operator budgets—not D2C label shopping. Many networks use both patterns for different parts of the business; confirm your rollout scope with sales.',
      },
      {
        q: 'Can Doorear buy labels from carriers?',
        a: 'Doorear emphasizes operator execution and visibility; carrier commercial mechanics depend on your deployment and partner model.',
      },
    ],
  },
  {
    slug: 'logistics-marketplace-vs-shipping-aggregator',
    metaTitle: 'Logistics Marketplace vs Shipping Aggregator',
    description:
      'Compare a B2B logistics marketplace and operating system with consumer shipping aggregators for Indian supply chain teams.',
    h1: 'Logistics marketplace vs shipping aggregator',
    summary:
      'A shipping aggregator optimizes label purchase for shippers. A logistics marketplace plus operating system connects partners and keeps execution—bookings, hubs, MIS—in one disciplined workspace.',
    leftColumnLabel: 'Marketplace + LOS (Doorear)',
    rightColumnLabel: 'Shipping aggregator',
    whenDoorear: [
      'You connect shippers, 3PLs, and transporters who need shared operational truth.',
      'Hub and branch teams must execute—not only compare rates.',
      'You want procurement and billing context beside shipments.',
    ],
    whenAlternative: [
      'You only need the cheapest label for a storefront SKU mix.',
      'No hub sort, franchise branches, or partner MIS requirements.',
    ],
    comparisonRows: [
      {
        aspect: 'Goal',
        los: 'Network execution + accountability',
        tms: 'Label cost optimization',
      },
      {
        aspect: 'Data model',
        los: 'AWB lifecycle, inward, OFD, POD',
        tms: 'Order → label → tracking link',
      },
      {
        aspect: 'Users',
        los: 'Ops, hubs, finance, commercial',
        tms: 'Brand shipping desk',
      },
      {
        aspect: 'India fit',
        los: 'PIN masters, GST billing support, INR plans',
        tms: 'Carrier catalog for eCommerce',
      },
    ],
    relatedLinks: [
      { href: '/learn/logistics-operating-system', label: 'LOS guide' },
      { href: '/solutions/courier-aggregation', label: 'Courier aggregation' },
    ],
    faqs: [
      {
        q: 'Can a marketplace be only introductions?',
        a: 'Introductions without execution discipline fail. Doorear combines marketplace positioning with an operator workspace so partners stay on one system of record.',
      },
    ],
  },
  {
    slug: 'courier-software-vs-tms',
    metaTitle: 'Courier Software vs TMS — What to Buy',
    description:
      'Compare courier management software with transport management systems (TMS) for Indian 3PL and courier operators.',
    h1: 'Courier software vs TMS for Indian networks',
    summary:
      'Courier software centers AWB booking, hub sort, and last mile. TMS often centers fleet, routes, and linehaul. Doorear spans courier execution inside a broader logistics operating system.',
    leftColumnLabel: 'Courier / LOS (Doorear)',
    rightColumnLabel: 'Typical TMS',
    whenDoorear: [
      'Hub inward queues and franchise branches define your day.',
      'You need booking validation, manifests, and OFD/POD accountability.',
      'Commercial and ops share one tenant for RFQs and MIS.',
    ],
    whenAlternative: [
      'Fleet telematics and route optimization dominate ROI.',
      'Minimal hub/booking depth—linehaul planning only.',
    ],
    comparisonRows: [
      {
        aspect: 'Unit of work',
        los: 'Consignment / AWB stages',
        tms: 'Trips and loads',
      },
      {
        aspect: 'Hub operations',
        los: 'Inward, bags, manifests, OFD',
        tms: 'Often light or absent',
      },
      {
        aspect: 'Branch model',
        los: 'Multi-branch RBAC native',
        tms: 'Often fleet-depot centric',
      },
      {
        aspect: 'Shipper vs operator',
        los: 'Operator-first with marketplace option',
        tms: 'Planner-first',
      },
    ],
    relatedLinks: [
      { href: '/compare/logistics-operating-system-vs-tms', label: 'LOS vs TMS' },
      { href: '/solutions/3pl-operators', label: '3PL operators' },
    ],
    faqs: [
      {
        q: 'Does Doorear replace a TMS?',
        a: 'For many courier/3PL networks, Doorear covers transport execution inside a logistics OS. Fleet-heavy TMS needs should be validated with sales.',
      },
    ],
  },
]

export function getCompareBySlug(slug: string) {
  return comparePages.find((p) => p.slug === slug)
}
