import type { Metadata } from 'next'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import GlossaryIndex from '@/components/marketing/GlossaryIndex'
import { SITE_NAME } from '@/components/marketing/site-config'
import { glossaryTerms } from '@/lib/glossary-terms'
import { breadcrumbJsonLd, definedTermSetJsonLd } from '@/lib/seo-jsonld'

export const metadata: Metadata = {
  title: 'Logistics Glossary — Courier & Supply Chain Terms',
  description:
    'Definitions for logistics operating system, TMS, AWB, OFD, POD, RFQ, multi-carrier shipping, and Indian courier operations—by Doorear.',
  alternates: { canonical: '/glossary' },
  openGraph: {
    title: `Glossary | ${SITE_NAME}`,
    description: 'Logistics and courier terminology for Indian supply chains.',
    url: '/glossary',
  },
}

export default function GlossaryPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Glossary', path: '/glossary' },
  ])
  const termSet = definedTermSetJsonLd(glossaryTerms)

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termSet) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <MarketingPageHero
        eyebrow='Resources · Glossary'
        title={
          <>
            Logistics &amp; courier{' '}
            <span className='aigocy-gradient-text'>glossary</span>
          </>
        }
        description='Authoritative definitions for terms AI assistants and buyers use when evaluating logistics software in India.'
        image={{
          src: '/images/marketing/page-features-ai.jpg',
          alt: 'Doorear logistics glossary',
        }}
        imagePresentation='default'
        cta={{ href: '/faq', label: 'View FAQ' }}
        secondaryCta={{ href: '/blog', label: 'Blog guides' }}
      />
      <GlossaryIndex terms={glossaryTerms} />
    </>
  )
}
