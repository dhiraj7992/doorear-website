import Link from 'next/link'
import type { BlogPost } from '@/lib/blog-posts'
import { ScrollReveal } from '@/components/marketing/primitives'

type Props = {
  posts: BlogPost[]
  title?: string
}

export default function BlogRelatedPosts({
  posts,
  title = 'Related guides',
}: Props) {
  if (posts.length === 0) return null

  return (
    <ScrollReveal className='mt-12'>
      <h3 className='text-lg font-semibold text-[var(--app-foreground)]'>{title}</h3>
      <ul className='mt-4 space-y-3'>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className='text-sm font-semibold text-[var(--app-primary)] hover:underline'>
              {post.title}
            </Link>
            <p className='mt-1 text-sm text-[var(--app-muted)]'>{post.description}</p>
          </li>
        ))}
      </ul>
    </ScrollReveal>
  )
}
