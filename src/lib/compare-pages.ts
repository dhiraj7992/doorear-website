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
]

export function getCompareBySlug(slug: string) {
  return comparePages.find((p) => p.slug === slug)
}
