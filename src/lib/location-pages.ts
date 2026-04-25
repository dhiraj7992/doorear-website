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
]

export function getLocationBySlug(slug: string) {
  return locationPages.find((item) => item.slug === slug)
}
