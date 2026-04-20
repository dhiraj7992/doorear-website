'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import type { BlogPost } from '@/lib/blog-posts'

type Props = { posts: BlogPost[] }

export default function BlogPostList({ posts }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <ul className='space-y-6'>
      {posts.map((post, i) => (
        <motion.li
          key={post.slug}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-24px' }}
          transition={{
            duration: 0.4,
            delay: reduceMotion ? 0 : Math.min(i * 0.06, 0.42),
          }}>
          <article className='group rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-6 shadow-sm transition hover:border-[var(--app-primary)]/20 hover:shadow-md'>
            <p className='text-xs font-medium uppercase tracking-wider text-[var(--app-muted)]'>
              {post.datePublished}
            </p>
            <h2 className='mt-2 text-xl font-semibold text-[var(--app-foreground)]'>
              <Link
                href={`/blog/${post.slug}`}
                className='transition group-hover:text-[var(--app-primary)]'>
                {post.title}
              </Link>
            </h2>
            <p className='mt-2 text-sm text-[var(--app-muted)]'>{post.description}</p>
            <div className='mt-4 flex flex-wrap gap-2'>
              {post.keywords.slice(0, 3).map((k) => (
                <span
                  key={k}
                  className='rounded-lg bg-[var(--app-surface)] px-2 py-1 text-xs text-[var(--app-muted)]'>
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
        </motion.li>
      ))}
    </ul>
  )
}
