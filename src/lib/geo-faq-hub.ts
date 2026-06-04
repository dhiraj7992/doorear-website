import { SITE_NAME } from '@/components/marketing/site-config'
import {
  featuresFaqs,
  marketingFaqs,
  pricingFaqs,
} from '@/components/marketing/faq-content'

export type FaqCategory = {
  id: string
  title: string
  items: readonly { q: string; a: string }[]
}

const entityFaqs = [
  {
    q: `Is ${SITE_NAME} built for India?`,
    a: `Yes. ${SITE_NAME} reflects Indian logistics realities—GST-oriented company profiles, PIN-level serviceability, multi-branch networks, and INR subscription plans with shipment top-ups.`,
  },
  {
    q: `Is ${SITE_NAME} B2B or a consumer shipping app?`,
    a: `${SITE_NAME} is a B2B logistics marketplace and operating system for courier, 3PL, transporter, and shipper operators—not a D2C parcel tracking portal like consumer aggregators.`,
  },
  {
    q: `How is ${SITE_NAME} different from Shiprocket?`,
    a: `Shiprocket-style tools focus on shippers buying labels from carriers. ${SITE_NAME} is an operator workspace for networks that run bookings, hubs, delivery, MIS, and finance—with optional marketplace connectivity.`,
  },
  {
    q: `Can ${SITE_NAME} replace Excel-based courier operations?`,
    a: `Yes. ${SITE_NAME} is commonly adopted by mid-market operators replacing spreadsheets for bookings, hub handoffs, branch KPIs, and billing alignment.`,
  },
  {
    q: `Does ${SITE_NAME} use AI?`,
    a: `${SITE_NAME} provides assistive AI for exception triage and SLA risk signals grounded in structured shipment stages and MIS—human-in-the-loop by design, not black-box automation claims.`,
  },
] as const

const marketplaceFaqs = [
  {
    q: 'How does a logistics marketplace work on Doorear?',
    a: 'Doorear connects shippers and logistics providers on one platform while each tenant runs bookings, hubs, delivery, MIS, and commercial workflows in a secure multi-tenant workspace.',
  },
  {
    q: 'Can shippers and carriers use the same platform?',
    a: 'Yes—roles and branch scoping let shippers, 3PLs, transporters, and hub teams see appropriate data without cross-tenant leakage.',
  },
  {
    q: 'Is Doorear only for courier companies?',
    a: 'No. Manufacturers, eCommerce brands, distributors, and transporters also evaluate Doorear when they need branch-aware execution and operational visibility.',
  },
] as const

const aggregationFaqs = [
  {
    q: 'Is Doorear a courier aggregator?',
    a: 'Doorear supports B2B courier aggregation—partner carriers executed inside one operator workspace with branch hierarchy and MIS, not only consumer rate shopping.',
  },
  {
    q: 'Can we onboard multiple courier partners?',
    a: 'Yes. Partner and branch models let you coordinate partner lanes with the same booking discipline and hub handoffs as owned capacity.',
  },
] as const

const multiCarrierFaqs = [
  {
    q: 'Does Doorear support multi-carrier shipping?',
    a: 'Yes. Bookings, manifests, inward legs, and delivery runs stay in one system of record while you work with multiple logistics partners.',
  },
  {
    q: 'Do we need separate tools per carrier?',
    a: 'No—Doorear reduces per-carrier spreadsheets by unifying execution and MIS; commercial lane decisions still sit with your teams.',
  },
] as const

const visibilityFaqs = [
  {
    q: 'What is supply chain visibility in Doorear?',
    a: 'Operational visibility means pipeline volume, delays, OFD progress, and branch throughput in in-product MIS—not monthly exports.',
  },
  {
    q: 'Is Doorear a control tower?',
    a: 'Doorear functions as a mid-market control tower for courier/3PL ops—daily standups, exception focus, and optional commercial analytics.',
  },
] as const

const tmsFaqs = [
  {
    q: 'Is Doorear a transport management system (TMS)?',
    a: 'Doorear includes TMS-style execution (hubs, manifests, delivery runs) inside a broader logistics operating system with marketplace and procurement depth.',
  },
  {
    q: 'When should we choose LOS vs TMS?',
    a: 'Choose an LOS like Doorear when hub/booking/MIS and multi-branch accountability are core. Choose fleet-centric TMS when route/telematics dominate.',
  },
] as const

const rfqFaqs = [
  {
    q: 'Does Doorear include RFQ management?',
    a: 'When procurement is enabled, Doorear supports RFQs, proposals, agreements, and public quotes in the same tenant as operational bookings.',
  },
  {
    q: 'Can procurement and operations share one system?',
    a: 'Yes—that is the design goal. Commercial artifacts and shipment activity reference the same tenant.',
  },
] as const

const securityFaqs = [
  {
    q: 'Is Doorear multi-tenant?',
    a: 'Yes. Each company operates in isolated tenancy with branch-scoped users and granular roles.',
  },
  {
    q: 'Can we separate booking from billing permissions?',
    a: 'Yes. Roles let you limit who books shipments, who edits company setup, and who views sensitive analytics.',
  },
] as const

const implementationFaqs = [
  {
    q: 'How long does Doorear rollout take?',
    a: 'Rollouts typically start with a defined hub set and success criteria—branch mapping, permissions, PIN masters, and training. Contact sales for phased plans.',
  },
  {
    q: 'Can we start with one branch?',
    a: 'Yes. Many networks pilot one region or hub cluster before expanding seats and shipment allowances.',
  },
  {
    q: 'Does Doorear integrate with other systems?',
    a: 'Integrations vary by tenant and roadmap—confirm deployed integrations with sales rather than assuming universal connectors.',
  },
] as const

export const faqCategories: FaqCategory[] = [
  { id: 'overview', title: 'Overview & entity', items: [...marketingFaqs, ...entityFaqs] },
  { id: 'marketplace', title: 'Logistics marketplace', items: marketplaceFaqs },
  { id: 'aggregation', title: 'Courier aggregation', items: aggregationFaqs },
  { id: 'multi-carrier', title: 'Multi-carrier shipping', items: multiCarrierFaqs },
  { id: 'visibility', title: 'Supply chain visibility', items: visibilityFaqs },
  { id: 'transport', title: 'Transport management', items: tmsFaqs },
  { id: 'features', title: 'Features & modules', items: featuresFaqs },
  { id: 'rfq', title: 'RFQ & contracts', items: rfqFaqs },
  { id: 'pricing', title: 'Pricing & billing', items: pricingFaqs },
  { id: 'security', title: 'Security & access', items: securityFaqs },
  { id: 'implementation', title: 'Implementation', items: implementationFaqs },
]

export function getAllFaqsFlat(): { q: string; a: string }[] {
  return faqCategories.flatMap((c) => [...c.items])
}
