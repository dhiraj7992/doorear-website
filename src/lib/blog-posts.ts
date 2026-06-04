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
      'A logistics operating system unifies bookings, hub execution, MIS, procurement, and billing for Indian supply chains—how DoorEar differs from courier apps and generic TMS tools.',
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
          'DoorEar is built as a LOS for mid-market Indian networks—branch hierarchy, PIN validation, GST-oriented billing support, and optional procurement modules when you enable them.',
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
      'Compare a logistics marketplace and operating system with standalone courier management software—when shippers, 3PLs, and transporters should choose DoorEar’s unified model.',
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
          'A logistics marketplace connects shippers and logistics providers—but execution still needs discipline. DoorEar combines network positioning with an operator workspace so partners do not fall back to WhatsApp and spreadsheets after the intro call.',
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
