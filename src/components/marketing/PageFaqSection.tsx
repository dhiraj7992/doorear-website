import FAQSection from '@/components/marketing/FAQSection'
import { getPageFaqs } from '@/lib/solution-faqs'
import { safeJsonLdStringify } from '@/lib/safe-jsonld'
import { faqJsonLdFromItems } from '@/lib/seo-jsonld'

type Props = {
  slug: string
  title?: string
}

export default function PageFaqSection({ slug, title = 'FAQ' }: Props) {
  const items = getPageFaqs(slug)
  if (items.length === 0) return null

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(faqJsonLdFromItems(items)) }}
      />
      <FAQSection items={items} title={title} />
    </>
  )
}
