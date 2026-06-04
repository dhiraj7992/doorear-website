'use client'

import Link from 'next/link'
import type { BlogPost } from '@/lib/blog-posts'
import { ScrollReveal } from '@/components/marketing/primitives'

type Props = { posts: BlogPost[] }

export default function BlogPostList({ posts }: Props) {
  return (
    <ul className='space-y-6'>
      {posts.map((post, i) => (
        <li key={post.slug}>
          <ScrollReveal delay={Math.min(i * 0.06, 0.36)}>
            <article className='premium-glass-panel group rounded-2xl border border-[var(--app-border)] p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--app-primary)]/25 hover:shadow-md'>
              <p className='text-xs font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
                {post.datePublished}
              </p>
              <h2 className='mt-2 text-xl font-bold tracking-tight text-[var(--app-foreground)]'>
                <Link
                  href={`/blog/${post.slug}`}
                  className='transition group-hover:text-[var(--app-primary)]'>
                  {post.title}
                </Link>
              </h2>
              <p className='mt-2 text-sm leading-relaxed text-[var(--app-muted)]'>
                {post.description}
              </p>
              <div className='mt-4 flex flex-wrap gap-2'>
                {post.keywords.slice(0, 3).map((k) => (
                  <span
                    key={k}
                    className='rounded-lg border border-[var(--app-border)]/80 bg-white/60 px-2 py-1 text-xs text-[var(--app-muted)]'>
                    {k}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className='mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--app-primary)] hover:underline'>
                Read article
                <span aria-hidden>→</span>
              </Link>
            </article>
          </ScrollReveal>
        </li>
      ))}
    </ul>
  )
}
