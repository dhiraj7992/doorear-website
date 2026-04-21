import type { Metadata } from 'next'
import FeaturesPageView from '@/components/marketing/FeaturesPageView'
import { SITE_NAME } from '@/components/marketing/site-config'

export const metadata: Metadata = {
  title: 'Features — Shipment Booking, Hubs, MIS & Accounts',
  description:
    'Explore Doorear capabilities: shipment booking software, hub and last-mile delivery operations, logistics MIS dashboard, GST logistics invoicing software support, procurement RFQ workflows, and shipment top-ups.',
  alternates: { canonical: '/features' },
  openGraph: {
    title: `Features | ${SITE_NAME} courier platform`,
    description:
      'Forward booking, manifests, branch hierarchy, PIN validation, analytics, accounts, procurement, and usage-based top-ups—aligned to real courier operations.',
    url: '/features',
  },
}

export default function FeaturesPage() {
  return <FeaturesPageView />
}
