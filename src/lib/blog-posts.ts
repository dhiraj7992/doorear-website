/** Blog posts for SEO — topics from docs/product-seo.md */
export type BlogPost = {
  slug: string
  title: string
  description: string
  datePublished: string
  dateModified?: string
  heroImage?: string
  keywords: string[]
  sections: { heading: string; paragraphs: string[] }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'multi-branch-courier-operations-one-dashboard',
    title: 'How to run multi-branch courier operations from one dashboard',
    description:
      'Courier branch management and multi branch courier software practices for ops heads—users, permissions, and daily KPIs in one logistics operations platform.',
    datePublished: '2026-01-15',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/web-ops-1.jpg',
    keywords: [
      'multi branch courier software',
      'courier branch management',
      'logistics operations platform',
    ],
    sections: [
      {
        heading: 'Why branch hierarchy matters',
        paragraphs: [
          'Growing courier and 3PL networks mirror real-world sites: hubs, branches, and last-mile units. When your software reflects that hierarchy, each team sees the right bookings, bags, and delivery runs—without cross-branch noise.',
          'Doorear is built as a multi-tenant logistics SaaS with branch-scoped users so operations heads and hub managers stay aligned with how work actually flows.',
        ],
      },
      {
        heading: 'Permissions that match responsibility',
        paragraphs: [
          'Granular roles reduce risk: only authorized users change bookings, user access, or billing-related setup. That is essential for courier company admin software used by mixed teams across India.',
        ],
      },
      {
        heading: 'Operational visibility',
        paragraphs: [
          'Pair branch structure with your logistics MIS dashboard to see today’s pipeline, delays, and delivery performance fast—without exporting spreadsheets for every standup.',
        ],
      },
    ],
  },
  {
    slug: 'booking-to-delivery-shipment-lifecycle-doorear',
    title: 'Booking to delivery: shipment lifecycle in a courier workspace',
    description:
      'From forward shipment booking and AWB-style orders to inward legs and delivery runs—what operators track in shipment booking software.',
    datePublished: '2026-01-22',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/web-logistics-hub.jpg',
    keywords: [
      'shipment booking software',
      'AWB booking system India',
      'last mile delivery operations software',
    ],
    sections: [
      {
        heading: 'A single system of record',
        paragraphs: [
          'Forward booking with AWB-style orders gives teams one place to create and revise consignments. Fewer errors mean fewer disputes with customers and partners.',
        ],
      },
      {
        heading: 'Handoffs you can explain',
        paragraphs: [
          'Bags, manifests, inward legs, and delivery runs model how freight moves from first mile to proof of delivery. Clear stages make handoffs auditable when something slips.',
        ],
      },
      {
        heading: 'Not a consumer tracking portal',
        paragraphs: [
          'The core B2B story is the operator workspace. Utility tracking and coverage routes support operations; positioning stays on teams running the network—not a standalone consumer parcel app.',
        ],
      },
    ],
  },
  {
    slug: 'pin-coverage-booking-validation-logistics',
    title: 'PIN coverage and booking validation for logistics networks',
    description:
      'Serviceable PIN and location master validation before booking—fewer invalid routes and better cost control for Indian courier networks.',
    datePublished: '2026-02-03',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/web-ops-3.jpg',
    keywords: [
      'logistics management software',
      'courier management software',
      '3PL operations platform',
    ],
    sections: [
      {
        heading: 'Validate before you commit',
        paragraphs: [
          'A serviceable PIN / location master helps teams confirm coverage before a booking is locked in. That reduces rework and protects margin on lanes you do not actually serve.',
        ],
      },
      {
        heading: 'Operational discipline',
        paragraphs: [
          'When dispatchers work inside shipment booking software that respects your network rules, you spend less time undoing bad bookings and more time moving freight.',
        ],
      },
    ],
  },
  {
    slug: 'logistics-mis-dashboard-operations-teams',
    title: 'Analytics for operations teams: MIS, deliveries, and commercial insight',
    description:
      'Logistics MIS dashboard patterns for courier operators—pipeline health, delivery performance, and sales & purchase analytics where enabled.',
    datePublished: '2026-02-12',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/page-features-ai.jpg',
    keywords: [
      'logistics MIS dashboard',
      'logistics operations platform',
      'courier management software',
    ],
    sections: [
      {
        heading: 'See today’s reality quickly',
        paragraphs: [
          'An operational dashboard helps teams answer: what is booked, what is delayed, and what completed with POD. That speed matters for daily control-room style standups.',
        ],
      },
      {
        heading: 'Commercial context alongside ops',
        paragraphs: [
          'Where enabled, sales and purchase analytics add procurement and revenue-side visibility next to operations—useful for founders and finance controllers who want one workspace.',
        ],
      },
    ],
  },
  {
    slug: 'roles-permissions-bookings-billing-safety',
    title: 'Roles and permissions: keeping bookings and billing safe',
    description:
      'RBAC, user invites, and optional enterprise sign-in—why multi-tenant isolation matters for 3PL and courier operators.',
    datePublished: '2026-02-20',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/page-solutions-ai.jpg',
    keywords: [
      'multi tenant logistics SaaS',
      'courier company admin software',
      '3PL operations platform',
    ],
    sections: [
      {
        heading: 'Least privilege by design',
        paragraphs: [
          'Separate who can book shipments from who can change company setup or view sensitive analytics. That reduces accidental changes and limits blast radius if credentials are misused.',
        ],
      },
      {
        heading: 'Onboarding that scales',
        paragraphs: [
          'User invites and optional modern identity options help enterprises adopt without forcing every branch through a manual IT ticket for every new hire.',
        ],
      },
    ],
  },
  {
    slug: 'gst-invoicing-accounts-logistics',
    title: 'Accounts and GST-oriented documents for logistics companies',
    description:
      'GST logistics invoicing software support: company profile fields, invoicing terms, AWB products, tax invoices, and vouchers tied to the same tenant as operations.',
    datePublished: '2026-03-01',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/page-pricing-ai.jpg',
    keywords: [
      'GST logistics invoicing software',
      'logistics management software',
      'courier management software',
    ],
    sections: [
      {
        heading: 'One tenant for ops and finance artifacts',
        paragraphs: [
          'Company profile, GST-oriented fields, and invoicing terms help documents stay consistent with how you bill customers. Finance sees artifacts linked to the same shipment activity operations teams manage.',
        ],
      },
      {
        heading: 'Software support, not tax advice',
        paragraphs: [
          'Doorear provides software structures for invoices and vouchers; your advisors remain responsible for compliance decisions in your jurisdictions.',
        ],
      },
    ],
  },
  {
    slug: 'procurement-rfq-proposals-agreements-logistics',
    title: 'Procurement workflows: RFQs, proposals, and agreements',
    description:
      'Procurement RFQ logistics software for vendor collaboration—RFQs, proposals, agreements, and public quotes without extra portals.',
    datePublished: '2026-03-10',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/web-ops-5.jpg',
    keywords: [
      'procurement RFQ logistics software',
      '3PL operations platform',
      'logistics operations platform',
    ],
    sections: [
      {
        heading: 'Faster vendor and customer collaboration',
        paragraphs: [
          'Structured RFQs and proposals reduce email threads and version chaos. When agreements follow the same workspace, commercial teams spend less time reconciling documents.',
        ],
      },
      {
        heading: 'Public quotes when you need them',
        paragraphs: [
          'Public quote flows can support scenarios where customers need a clear, shareable commercial artifact—without building a separate quoting portal.',
        ],
      },
    ],
  },
  {
    slug: 'subscription-plans-offline-billing-transparency',
    title: 'Subscription, usage, and transparent offline billing',
    description:
      'How plans, trials, limits, and offline payment intimation work—an honest enterprise-friendly story aligned with the product.',
    datePublished: '2026-03-18',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/doorear-plans-upgrade.png',
    keywords: [
      'Doorear logistics software',
      'multi tenant logistics SaaS',
      'courier management software',
    ],
    sections: [
      {
        heading: 'Clarity for finance teams',
        paragraphs: [
          'Subscription plans and usage reminders keep teams aware of trial status, limits, and renewal timing. Where checkout is not in-product, coordination happens offline—transparent copy builds trust with enterprise buyers.',
        ],
      },
      {
        heading: 'What we do not imply',
        paragraphs: [
          'Avoid promising a fully automated payment gateway checkout unless that is deployed for your tenant. Doorear emphasizes plan transparency and finance coordination as implemented.',
        ],
      },
    ],
  },
  {
    slug: 'what-is-logistics-operating-system',
    title: 'What is a logistics operating system (LOS)?',
    description:
      'A logistics operating system unifies bookings, hub execution, MIS, procurement, and billing for Indian supply chains—how Doorear differs from courier apps and generic TMS tools.',
    datePublished: '2026-04-01',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/hero-logistics.jpg',
    keywords: [
      'logistics operating system',
      'logistics operating system India',
      'logistics SaaS platform',
    ],
    sections: [
      {
        heading: 'Definition: more than tracking',
        paragraphs: [
          'A logistics operating system (LOS) is the operational layer where bookings, hub handoffs, delivery runs, analytics, and commercial workflows run in one multi-tenant workspace. It is not a consumer parcel tracker or a spreadsheet with a login screen.',
          'Doorear is built as a LOS for mid-market Indian networks—branch hierarchy, PIN validation, GST-oriented billing support, and optional procurement modules when you enable them.',
        ],
      },
      {
        heading: 'LOS vs TMS vs courier software',
        paragraphs: [
          'Transport management systems often focus on fleet and linehaul. Courier software may stop at AWB creation. A LOS connects operator execution, finance artifacts, and partner coordination—the daily work dispatchers and hub managers actually perform.',
        ],
      },
      {
        heading: 'When you need a LOS',
        paragraphs: [
          'If you operate multiple branches, negotiate lane capacity with partners, and close the month with finance asking for shipment-level truth, a LOS reduces reconciliation drag. Start with a defined hub set and success criteria—not a big-bang rip-and-replace.',
        ],
      },
    ],
  },
  {
    slug: 'logistics-marketplace-vs-courier-software',
    title: 'Logistics marketplace vs courier software: which do you need?',
    description:
      'Compare a logistics marketplace and operating system with standalone courier management software—when shippers, 3PLs, and transporters should choose Doorear\'s unified model.',
    datePublished: '2026-04-08',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/page-solutions.jpg',
    keywords: [
      'logistics marketplace India',
      'logistics marketplace vs courier software',
      'B2B logistics marketplace',
    ],
    sections: [
      {
        heading: 'Courier software alone',
        paragraphs: [
          'Courier management software excels when one operator runs bookings, hubs, and billing inside their own network. The buyer is usually an ops head or IT lead at a 3PL or courier company.',
        ],
      },
      {
        heading: 'Marketplace + operating system',
        paragraphs: [
          'A logistics marketplace connects shippers and logistics providers—but execution still needs discipline. Doorear combines network positioning with an operator workspace so partners do not fall back to WhatsApp and spreadsheets after the intro call.',
        ],
      },
      {
        heading: 'Practical decision guide',
        paragraphs: [
          'Choose courier software positioning when you are a single tenant scaling branches. Choose marketplace + LOS when you connect manufacturers, eCommerce brands, transporters, and 3PL partners who all need role-scoped visibility on shared lanes.',
        ],
      },
    ],
  },
  {
    slug: 'multi-carrier-shipping-software-india',
    title: 'Multi carrier shipping software: one workspace for Indian B2B networks',
    description:
      'How multi carrier shipping software reduces portal sprawl—AWB discipline, hub execution, PIN validation, and branch MIS when you ship across partners.',
    datePublished: '2026-05-01',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/web-logistics-hub.jpg',
    keywords: [
      'multi carrier shipping software',
      'multi carrier shipping software India',
      'multi carrier logistics software',
    ],
    sections: [
      {
        heading: 'Why multi-carrier breaks without a system of record',
        paragraphs: [
          'Each carrier portal trains teams to work differently—bookings, status language, and exception handling diverge. Finance then reconciles volumes that ops cannot explain lane by lane.',
          'Multi carrier shipping software should unify execution: one AWB story, hub stages, and MIS. See the Doorear solution page for multi-carrier shipping.',
        ],
      },
      {
        heading: 'Validate before you commit capacity',
        paragraphs: [
          'PIN validation and branch-scoped booking rules prevent bad routes from entering sortation—especially when partner coverage rules differ.',
        ],
      },
      {
        heading: 'Rollout without big-bang risk',
        paragraphs: [
          'Start with a defined hub set, success criteria for booking-to-POD, and permission boundaries per branch. Expand partner lanes once supervisors trust daily MIS.',
        ],
      },
    ],
  },
  {
    slug: 'courier-aggregator-platform-b2b-india',
    title: 'Courier aggregator platform for B2B operators (not consumer label shopping)',
    description:
      'What a courier aggregator platform should deliver for 3PLs and enterprise shippers—partner coordination, manifests, and hub accountability in India.',
    datePublished: '2026-05-03',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/page-solutions-ai.jpg',
    keywords: [
      'courier aggregator platform',
      'courier aggregator platform India',
      'courier aggregation software',
    ],
    sections: [
      {
        heading: 'Aggregation is execution, not only rates',
        paragraphs: [
          'Consumer aggregators optimize label purchase. B2B operators need branch-aware bookings, inward queues, delivery runs, and partner-scoped visibility.',
          'Doorear positions courier aggregation inside a logistics operating system—explore the courier aggregator platform solution page.',
        ],
      },
      {
        heading: 'Partner MIS finance can trust',
        paragraphs: [
          'When partner volumes share one tenant, month-end conversations reference shipment activity and billing artifacts—not parallel spreadsheets.',
        ],
      },
    ],
  },
  {
    slug: 'logistics-marketplace-india-b2b-guide',
    title: 'Logistics marketplace India: B2B networks vs consumer shipping',
    description:
      'How a logistics marketplace India teams can use connects shippers and carriers with bookings, hub ops, and role-scoped visibility.',
    datePublished: '2026-05-06',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/page-solutions.jpg',
    keywords: [
      'logistics marketplace India',
      'logistics marketplace platform',
      'B2B logistics network India',
    ],
    sections: [
      {
        heading: 'Marketplace without execution discipline fails',
        paragraphs: [
          'Introductions between shippers and 3PLs are easy; shared operational truth is hard. A marketplace layer needs bookings, hub handoffs, and MIS in one workspace.',
        ],
      },
      {
        heading: 'Who benefits from a B2B marketplace model',
        paragraphs: [
          'Manufacturers, eCommerce ops, transporters, and 3PL partners running branch-heavy Indian networks—see the logistics marketplace India solution page on Doorear.',
        ],
      },
    ],
  },
  {
    slug: 'transport-management-platform-courier-3pl',
    title: 'Transport management platform for courier & 3PL execution',
    description:
      'Transport management platform capabilities that matter for Indian courier networks—bags, manifests, inward legs, delivery runs, and branch hierarchy.',
    datePublished: '2026-05-08',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/hero-logistics-hub.jpg',
    keywords: [
      'transport management platform',
      'transport management platform India',
      'TMS software India courier',
    ],
    sections: [
      {
        heading: 'TMS language vs courier reality',
        paragraphs: [
          'Fleet-heavy TMS marketing often underserves hub sort, franchise branches, and AWB-style booking discipline. Courier-first transport management maps stages operators actually run.',
        ],
      },
      {
        heading: 'Stages supervisors can audit',
        paragraphs: [
          'Bags, manifests, inward legs, and delivery runs create accountability from booking through POD—review the transport management platform solution on Doorear.',
        ],
      },
    ],
  },
  {
    slug: 'shipment-tracking-software-b2b-operators',
    title: 'Shipment tracking software for operators—not only customer pings',
    description:
      'B2B shipment tracking software ties AWB lifecycle stages to hub and OFD MIS so CS, dispatch, and leadership share one consignment record.',
    datePublished: '2026-05-10',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/web-ops-5.jpg',
    keywords: [
      'shipment tracking software',
      'shipment tracking software India',
      'B2B shipment tracking platform',
    ],
    sections: [
      {
        heading: 'Tracking that matches hub reality',
        paragraphs: [
          'Customer-facing status pages help CS—but supervisors need inward queues, OFD progress, and POD gaps before escalations arrive.',
        ],
      },
      {
        heading: 'One record across teams',
        paragraphs: [
          'Doorear shipment tracking software keeps booking, hub, and delivery stages in one tenant. See the shipment tracking feature page for rollout questions.',
        ],
      },
    ],
  },
  {
    slug: 'rfq-management-software-logistics-india',
    title: 'RFQ management software inside your logistics workspace',
    description:
      'RFQ management software for logistics procurement—structured RFQs, proposals, and agreements next to operational shipment data.',
    datePublished: '2026-05-12',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/web-ops-5.jpg',
    keywords: [
      'RFQ management software',
      'RFQ management software logistics',
      'logistics RFQ software India',
    ],
    sections: [
      {
        heading: 'Stop losing versions in email',
        paragraphs: [
          'RFQ threads without audit trails delay lane decisions. Software structures reduce chaos—but procurement modules must be enabled for your tenant.',
        ],
      },
      {
        heading: 'Commercial + ops alignment',
        paragraphs: [
          'When analytics modules are on, commercial teams reference operational performance beside RFQs. Explore RFQ management software on Doorear.',
        ],
      },
    ],
  },
  {
    slug: 'logistics-partner-management-software-guide',
    title: 'Logistics partner management: onboard carriers without WhatsApp chaos',
    description:
      'Logistics partner management software patterns—branch-scoped access, hub accountability, and MIS for multi-partner courier networks in India.',
    datePublished: '2026-05-15',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/page-solutions-ai.jpg',
    keywords: [
      'logistics partner management',
      'logistics partner management software',
      'carrier partner management platform',
    ],
    sections: [
      {
        heading: 'Relationships need operational truth',
        paragraphs: [
          'Partner SLAs discussed without shared data become arguments. Partner management ties bookings, hub handoffs, and volume visibility to one workspace.',
        ],
      },
      {
        heading: 'RBAC for partner-heavy networks',
        paragraphs: [
          'Branch hierarchy limits cross-network noise while central ops retains control-tower views—see logistics partner management on Doorear.',
        ],
      },
    ],
  },
  {
    slug: 'courier-franchise-software-multi-branch',
    title: 'Courier franchise software for central ops and local branches',
    description:
      'Courier franchise software that balances franchise booking autonomy with headquarters MIS, PIN validation, and permission boundaries.',
    datePublished: '2026-05-18',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/web-logistics-hub.jpg',
    keywords: [
      'courier franchise software',
      'courier franchise management software India',
      'franchise courier operations platform',
    ],
    sections: [
      {
        heading: 'Franchise scale needs validation upstream',
        paragraphs: [
          'Local booking freedom without PIN and branch rules creates hub rework. Franchise software should enforce discipline before sortation.',
        ],
      },
      {
        heading: 'Central MIS without micromanaging every scan',
        paragraphs: [
          'Head office needs throughput, OFD, and delay patterns by franchise point—review the courier franchise software solution page.',
        ],
      },
    ],
  },
  {
    slug: 'last-mile-delivery-platform-india-b2b',
    title: 'Last mile delivery platform: from hub sort to POD',
    description:
      'Last mile delivery platform capabilities for Indian B2B networks—delivery runs, OFD tracking, POD, and hub handoffs in one lifecycle.',
    datePublished: '2026-05-20',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/page-features-ai.jpg',
    keywords: [
      'last mile delivery platform',
      'last mile delivery platform India',
      'last mile logistics software B2B',
    ],
    sections: [
      {
        heading: 'Last mile is a stage, not a bolt-on link',
        paragraphs: [
          'Platforms that only generate tracking URLs miss inward bottlenecks and OFD planning. Execution software connects hub sort to delivery runs and POD.',
        ],
      },
      {
        heading: 'Peak season readiness',
        paragraphs: [
          'Branch throughput views and shipment top-ups help supervisors during spikes—see the last mile delivery platform solution on Doorear.',
        ],
      },
    ],
  },
  {
    slug: 'supply-chain-visibility-platform-india',
    title: 'Supply chain visibility platform for branch-heavy logistics',
    description:
      'Supply chain visibility platform MIS for Indian networks—pipeline health, OFD, delays, and branch KPIs without monthly spreadsheet exports.',
    datePublished: '2026-05-22',
    dateModified: '2026-06-04',
    heroImage: '/images/marketing/page-features-ai.jpg',
    keywords: [
      'supply chain visibility platform',
      'supply chain visibility platform India',
      'logistics control tower software',
    ],
    sections: [
      {
        heading: 'Visibility for daily standups',
        paragraphs: [
          'Leadership should discover delays from dashboards—not only after customer escalations. Operational MIS tuned for control-room rhythm beats analyst turnaround.',
        ],
      },
      {
        heading: 'Branch-scoped truth',
        paragraphs: [
          'Hub managers and central ops need the same metrics language with scoped data—explore the supply chain visibility platform solution page.',
        ],
      },
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug)
  if (!current) return []

  const scored = blogPosts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const overlap = p.keywords.filter((k) => current.keywords.includes(k)).length
      return { post: p, score: overlap }
    })
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, limit).map((item) => item.post)
}
