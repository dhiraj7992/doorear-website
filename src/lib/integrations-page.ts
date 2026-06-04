import type { FeaturePage } from '@/lib/feature-pages'

export const integrationsPage: FeaturePage = {
  slug: 'integrations',
  metaTitle: 'Logistics Software Integrations | Doorear',
  description:
    'How Doorear integrates with ERP, WMS, carrier systems, and finance tools for Indian courier and 3PL deployments—confirm scope with sales for your tenant.',
  keywords: [
    'logistics software integrations',
    'courier software API India',
    'ERP logistics integration',
  ],
  eyebrow: 'Platform · Integrations',
  title: 'Logistics integrations built for',
  titleHighlight: 'operator rollouts',
  intro:
    'Integrations should extend your system of record—not replace hub discipline. Doorear is designed as the operator workspace for bookings, hub execution, and MIS; ERP, carrier, and analytics connections depend on what is deployed for your tenant.',
  painPoints: [
    'Ops teams re-key bookings from ERP into courier tools every morning.',
    'Partner carrier status never matches internal hub reality.',
    'Finance exports shipment data manually for GST-oriented billing artifacts.',
  ],
  benefits: [
    'Single tenant for operational truth before you integrate outward.',
    'Structured shipment lifecycle data partners and APIs can reference.',
    'Honest scoping with sales on which connectors are live for your rollout.',
  ],
  relatedBlogSlugs: [
    'booking-to-delivery-shipment-lifecycle-doorear',
    'roles-permissions-bookings-billing-safety',
    'gst-invoicing-accounts-logistics',
  ],
  heroImage: '/images/marketing/page-features-ai.jpg',
}
