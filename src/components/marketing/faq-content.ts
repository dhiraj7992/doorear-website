import { SITE_NAME } from './site-config'

export const marketingFaqs = [
  {
    q: `What is ${SITE_NAME}?`,
    a: `${SITE_NAME} is a logistics marketplace and logistics operating system (LOS) that connects manufacturers, eCommerce companies, distributors, courier companies, transporters, and 3PL providers on one unified platform—bookings, hub ops, MIS, procurement, and GST-aware accounts for Indian supply chains.`,
  },
  {
    q: `What is ${SITE_NAME} used for?`,
    a: `${SITE_NAME} is a cloud logistics operations platform for courier and logistics companies: book and track shipments, coordinate hubs and last-mile delivery, run operational and commercial analytics, and manage branches, coverage, fleet, partners, users, and roles in one workspace.`,
  },
  {
    q: `Does ${SITE_NAME} support multiple branches?`,
    a: `Yes. Branch hierarchy and branch-scoped users mirror real networks so each site sees the right bookings, manifests, and delivery runs—core to multi branch courier software.`,
  },
  {
    q: 'Can we control who books shipments vs. who sees analytics?',
    a: 'Yes. Roles and granular permissions let you separate operational actions from sensitive analytics and company setup—reducing risk across teams.',
  },
  {
    q: 'How does billing work for the subscription?',
    a: 'Plans include trials, usage reminders, and renewal transparency. Where in-product payment checkout is not the default, teams coordinate offline with finance—see Pricing for details.',
  },
  {
    q: 'Is Doorear a logistics marketplace or only courier software?',
    a: 'Both. Doorear operates as a logistics marketplace connecting shippers and logistics providers, and as a logistics operating system where each tenant runs bookings, hubs, delivery, MIS, and finance workflows in one secure workspace.',
  },
  {
    q: 'Who should use Doorear?',
    a: 'Manufacturers, eCommerce brands, distributors, courier companies, transporters, and 3PL operators in India who need branch-aware execution, PIN validation, GST-oriented billing support, and operational visibility across their network.',
  },
  {
    q: 'Does Doorear support supply chain and procurement workflows?',
    a: 'Yes. Where enabled, procurement modules cover RFQs, proposals, agreements, and public quotes—alongside operational booking and hub execution in the same tenant.',
  },
] as const

export const featuresFaqs = [
  {
    q: 'What shipment booking features does Doorear include?',
    a: 'Forward booking with AWB-style orders, bags, manifests, inward legs, and delivery runs—giving operators a single system of record from first mile to proof of delivery.',
  },
  {
    q: 'Does Doorear include a logistics MIS dashboard?',
    a: 'Yes. Operational dashboards cover pipeline volume, delays, OFD progress, and branch throughput. Sales and purchase analytics are available where your tenant enables commercial modules.',
  },
  {
    q: 'How does PIN validation work?',
    a: 'A serviceable PIN and location master validates coverage before booking is locked in—reducing invalid routes and margin leakage on lanes you do not serve.',
  },
] as const

export const pricingFaqs = [
  {
    q: 'Are Doorear plans priced in INR?',
    a: 'Yes. Plans are listed in Indian Rupees with monthly and annual billing options. Use the pricing calculator to estimate users, shipment top-ups, and support tiers.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. The Free plan includes a trial window with limited seats and shipment volume so teams can evaluate fit before upgrading to Launch, Growth, Scale, or Enterprise.',
  },
  {
    q: 'What happens when we exceed shipment allowances?',
    a: 'Shipment top-up packs can be added to your plan. Usage reminders inside the product keep finance and operations aligned on capacity vs purchased add-ons.',
  },
] as const

export function faqJsonLd(items: readonly { q: string; a: string }[] = marketingFaqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}