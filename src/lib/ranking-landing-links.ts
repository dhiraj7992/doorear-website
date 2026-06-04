/** Homepage + internal linking for priority SEO landing pages */

export type RankingLandingLink = {
  label: string
  href: string
  description: string
  blogSlug: string
}

export function getRankingLinkByBlogSlug(
  blogSlug: string
): RankingLandingLink | undefined {
  return rankingLandingLinks.find((item) => item.blogSlug === blogSlug)
}

export const rankingLandingLinks: RankingLandingLink[] = [
  {
    label: 'Multi carrier shipping software',
    href: '/solutions/multi-carrier-shipping',
    description:
      'Run AWB bookings, hub execution, and partner lanes from one operational system of record.',
    blogSlug: 'multi-carrier-shipping-software-india',
  },
  {
    label: 'Courier aggregator platform',
    href: '/solutions/courier-aggregation',
    description:
      'Coordinate B2B partner carriers with branch-scoped bookings, manifests, and MIS.',
    blogSlug: 'courier-aggregator-platform-b2b-india',
  },
  {
    label: 'Logistics marketplace India',
    href: '/solutions/logistics-marketplace',
    description:
      'Connect shippers, 3PLs, transporters, and hub operators on one B2B workspace.',
    blogSlug: 'logistics-marketplace-india-b2b-guide',
  },
  {
    label: 'Transport management platform',
    href: '/solutions/transport-management',
    description:
      'Bookings, manifests, inward legs, and delivery runs aligned to courier & 3PL reality.',
    blogSlug: 'transport-management-platform-courier-3pl',
  },
  {
    label: 'Shipment tracking software',
    href: '/features/shipment-tracking',
    description:
      'Stage-aware AWB lifecycle visibility for hubs, dispatch, and leadership—not only pings.',
    blogSlug: 'shipment-tracking-software-b2b-operators',
  },
  {
    label: 'RFQ management software',
    href: '/features/procurement-rfq',
    description:
      'RFQs, proposals, and agreements in the same tenant as bookings and hub ops.',
    blogSlug: 'rfq-management-software-logistics-india',
  },
  {
    label: 'Logistics partner management',
    href: '/solutions/logistics-partner-management',
    description:
      'Onboard partners, scope branch access, and align MIS with commercial relationships.',
    blogSlug: 'logistics-partner-management-software-guide',
  },
  {
    label: 'Courier franchise software',
    href: '/solutions/courier-franchise',
    description:
      'Franchise booking discipline with central MIS across franchise points and hubs.',
    blogSlug: 'courier-franchise-software-multi-branch',
  },
  {
    label: 'Last mile delivery platform',
    href: '/solutions/last-mile-delivery',
    description:
      'Delivery runs, OFD progress, POD, and hub handoffs in one stage-aware lifecycle.',
    blogSlug: 'last-mile-delivery-platform-india-b2b',
  },
  {
    label: 'Supply chain visibility platform',
    href: '/solutions/supply-chain-visibility',
    description:
      'Operational control tower MIS for branch throughput, delays, and OFD performance.',
    blogSlug: 'supply-chain-visibility-platform-india',
  },
]
