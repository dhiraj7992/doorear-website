import type { Metadata } from 'next'
import {
  BarChart3,
  Building2,
  MapPinned,
  Package,
  Route,
  Shield,
  ShoppingCart,
  Users,
} from 'lucide-react'
import HeroSection from '@/components/marketing/HeroSection'
import SectionHeading from '@/components/marketing/SectionHeading'
import FeatureGrid from '@/components/marketing/FeatureGrid'
import CTABlock from '@/components/marketing/CTABlock'
import FAQSection, { faqJsonLd } from '@/components/marketing/FAQSection'
import {
  IndiaMarketSection,
  WorkflowSection,
} from '@/components/marketing/HomeSections'
import { SITE_NAME } from '@/components/marketing/site-config'

export const metadata: Metadata = {
  title: 'Logistics Management Software for Courier & 3PL Teams',
  description:
    'Doorear is a logistics operations platform and courier management software—book and track shipments, coordinate hubs and last-mile delivery, run MIS and GST-aware accounts for Indian operators.',
  alternates: { canonical: '/' },
  openGraph: {
    title: `${SITE_NAME} | Logistics operations platform & courier management software`,
    description:
      'Book and track shipments, coordinate hubs and last-mile delivery, and run operational analytics from one secure workspace at doorear.com.',
    url: '/',
  },
}

const homeFeatures = [
  {
    icon: Package,
    title: 'Forward booking & AWB-style orders',
    body: 'Capture consignments with structured booking screens instead of scattered forms. Every revision stays in one shipment booking software system of record so customer service, hubs, and finance reference the same AWB story.',
    bullets: [
      'Fewer duplicate or conflicting entries across branches',
      'Cleaner handoff to billing and customer communication',
      'Operational audit trail as bookings evolve',
    ],
  },
  {
    icon: Route,
    title: 'Bags, manifests, inward legs, delivery runs',
    body: 'Model how freight actually moves: group consignments into bags, attach manifests, run inward legs into hubs, and schedule delivery runs to POD. Supervisors see stage-level status—not only “in transit.”',
    bullets: [
      'Clear accountability between first mile, hub sort, and last mile',
      'Easier root-cause review when a lane slips',
      'Better alignment with last mile delivery operations software expectations',
    ],
  },
  {
    icon: Building2,
    title: 'Branch hierarchy & branch-scoped users',
    body: 'Configure parent branches, child sites, and user access that mirrors your org chart. Each team works inside multi branch courier software boundaries that match operational responsibility—not a single flat tenant.',
    bullets: [
      'Right data visibility for hub managers vs central ops',
      'Safer rollouts when you onboard new cities',
      'Cleaner delegation as you franchise or partner last-mile',
    ],
  },
  {
    icon: MapPinned,
    title: 'Serviceable PIN / location master',
    body: 'Validate whether a lane is truly serviceable before you burn capacity. Coupled with disciplined booking, you reduce emergency linehaul, return-to-origin noise, and margin leakage on “we thought we could deliver there” scenarios.',
    bullets: [
      'Pre-booking validation against your coverage model',
      'Fewer invalid routes entered by frontline teams',
      'Better network planning conversations with commercial',
    ],
  },
  {
    icon: BarChart3,
    title: 'Operational dashboard & MIS',
    body: 'Give leadership and hub heads a logistics MIS dashboard tuned for daily operations: pipeline volume, delays, OFD progress, and branch throughput—so standups start from data, not anecdotes.',
    bullets: [
      'Faster reaction to recurring choke points',
      'Shared metrics across ops and branch managers',
      'Foundation for continuous improvement programs',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Sales & purchase analytics (where enabled)',
    body: 'When your tenant enables commercial modules, procurement and revenue-side visibility can sit next to operations. Founders and finance controllers see margin and vendor performance in the same workspace as shipment activity.',
    bullets: [
      'Tighter alignment between ops reality and commercial decisions',
      'Less spreadsheet reconciliation for procurement RFQ logistics software flows',
    ],
  },
  {
    icon: Users,
    title: 'Roles, invites & secure access',
    body: 'Granular permissions separate who creates bookings, who edits company setup, who exports financials, and who administers users. Optional modern sign-in options support enterprise expectations without slowing branch onboarding.',
    bullets: [
      'Least-privilege access for mixed hub teams',
      'Audit-friendly change patterns for regulated customers',
    ],
  },
  {
    icon: Shield,
    title: 'Multi-tenant isolation & subscriptions',
    body: 'Each company operates in isolated tenancy with subscription plans that surface trials, usage, shipment allowances, seat limits, and top-ups—so finance and operations share the same transparent story.',
    bullets: [
      'Clear expectations on capacity vs purchased add-ons',
      'Honest enterprise buying: coordinate offline payments when checkout is not in-product',
    ],
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <HeroSection />
      <IndiaMarketSection />
      <section className='py-16 md:py-20'>
        <div className='marketing-container space-y-14'>
          <SectionHeading
            eyebrow='Platform depth'
            title='Courier management software that maps to your operating model'
            description='Doorear connects booking, network execution, analytics, procurement (when enabled), and GST-oriented account artifacts—so Indian courier and 3PL operators replace stitched spreadsheets with a disciplined operator workspace.'
          />
          <FeatureGrid items={homeFeatures} columns={2} />
        </div>
      </section>
      <WorkflowSection />
      <CTABlock
        title='See Doorear on your data model'
        description='Book a live walkthrough to map branches, permissions, MIS, and subscription allowances to your network. Use Get Started when you are ready to pilot with a defined hub set and success criteria.'
      />
      <FAQSection />
    </>
  )
}
