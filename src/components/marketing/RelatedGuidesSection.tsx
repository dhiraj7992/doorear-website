import Link from 'next/link'
import { ScrollReveal, SectionShell } from '@/components/marketing/primitives'
import { blogPosts } from '@/lib/blog-posts'

const FEATURE_GUIDE_SLUGS = [
  'multi-branch-courier-operations-one-dashboard',
  'booking-to-delivery-shipment-lifecycle-doorear',
  'pin-coverage-booking-validation-logistics',
  'logistics-mis-dashboard-operations-teams',
]

export default function RelatedGuidesSection({
  slugs = FEATURE_GUIDE_SLUGS,
  title = 'Related guides',
}: {
  slugs?: string[]
  title?: string
}) {
  const guides = slugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean)

  if (guides.length === 0) return null

  return (
    <SectionShell tone='card' bordered spacing='default'>
      <div className='marketing-container max-w-3xl'>
        <ScrollReveal>
          <h2 className='text-2xl font-bold text-[var(--app-foreground)]'>{title}</h2>
          <ul className='mt-6 space-y-4'>
            {guides.map((post) =>
              post ? (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className='text-base font-semibold text-[var(--app-primary)] hover:underline'>
                    {post.title}
                  </Link>
                  <p className='mt-1 text-sm text-[var(--app-muted)]'>{post.description}</p>
                </li>
              ) : null
            )}
          </ul>
        </ScrollReveal>
      </div>
    </SectionShell>
  )
}
