export type LocationPage = {
  slug: string
  city: string
  state: string
  titleQualifier: string
  painPoints: string[]
}

export const locationPages: LocationPage[] = [
  {
    slug: 'delhi',
    city: 'Delhi',
    state: 'Delhi NCR',
    titleQualifier: 'high-volume courier lanes and enterprise branch networks',
    painPoints: [
      'Control booking quality across multiple depots and franchise points.',
      'Track handoffs from hub sorting to last-mile delivery runs.',
      'Give ops and finance one source of truth for shipment and billing records.',
    ],
  },
  {
    slug: 'mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    titleQualifier: 'time-sensitive metro deliveries and dense PIN coverage',
    painPoints: [
      'Reduce route-level leakages with serviceable PIN validation.',
      'Manage branch throughput with real-time MIS snapshots.',
      'Scale users and shipment allowances with transparent plan controls.',
    ],
  },
  {
    slug: 'hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    titleQualifier: 'multi-branch fulfillment and regional linehaul coordination',
    painPoints: [
      'Unify booking, bagging, manifests, and delivery updates.',
      'Apply role-based controls for hub teams and central operations.',
      'Improve SLA tracking using shipment lifecycle stage visibility.',
    ],
  },
  {
    slug: 'bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    titleQualifier: 'e-commerce courier operations and rapid network scaling',
    painPoints: [
      'Prevent dispatch bottlenecks with branch-aware workflows.',
      'Run daily control tower standups on shared operational metrics.',
      'Align procurement and commercial teams with operational data.',
    ],
  },
  {
    slug: 'chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    titleQualifier: 'coastal logistics corridors and hub-to-hub reliability',
    painPoints: [
      'Standardize operations across city and intercity routes.',
      'Minimize rework from invalid bookings and unclear handoffs.',
      'Improve accountability from first mile through POD.',
    ],
  },
  {
    slug: 'pune',
    city: 'Pune',
    state: 'Maharashtra',
    titleQualifier: 'manufacturing corridors and industrial outbound logistics',
    painPoints: [
      'Coordinate plant dispatch with regional hub and linehaul partners.',
      'Validate PIN coverage before committing capacity on new lanes.',
      'Give finance and ops shared visibility on shipment and billing records.',
    ],
  },
  {
    slug: 'kolkata',
    city: 'Kolkata',
    state: 'West Bengal',
    titleQualifier: 'eastern India distribution and intercity linehaul',
    painPoints: [
      'Unify booking discipline across branches and franchise partners.',
      'Track hub inward queues and delivery run performance in one MIS view.',
      'Scale users and shipment allowances with transparent subscription controls.',
    ],
  },
  {
    slug: 'ahmedabad',
    city: 'Ahmedabad',
    state: 'Gujarat',
    titleQualifier: 'textile, pharma, and SME freight networks',
    painPoints: [
      'Reduce booking errors across multi-branch SME courier operations.',
      'Apply role-based access for hub teams and central dispatch.',
      'Align GST-oriented billing artifacts with operational shipment activity.',
    ],
  },
  {
    slug: 'jaipur',
    city: 'Jaipur',
    state: 'Rajasthan',
    titleQualifier: 'regional distribution and retail freight corridors',
    painPoints: [
      'Unify booking and hub ops across expanding Rajasthan lanes.',
      'Validate PIN serviceability before peak retail seasons.',
      'Give leadership MIS without overnight spreadsheet exports.',
    ],
  },
  {
    slug: 'kochi',
    city: 'Kochi',
    state: 'Kerala',
    titleQualifier: 'coastal inbound logistics and southern lane coordination',
    painPoints: [
      'Coordinate hub inward queues with intercity linehaul partners.',
      'Track last-mile delivery runs with stage-level accountability.',
      'Scale users and shipment allowances as southern volumes grow.',
    ],
  },
  {
    slug: 'indore',
    city: 'Indore',
    state: 'Madhya Pradesh',
    titleQualifier: 'central India hub routing and multi-branch rollouts',
    painPoints: [
      'Standardize bookings across franchise and owned branch mix.',
      'Improve SLA tracking with operational dashboards for hub supervisors.',
      'Align procurement and ops when commercial modules are enabled.',
    ],
  },
]

export function getLocationBySlug(slug: string) {
  return locationPages.find((item) => item.slug === slug)
}
