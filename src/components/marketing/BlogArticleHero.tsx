'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { BookOpen, Calendar, Tag } from 'lucide-react'
import type { BlogPost } from '@/lib/blog-posts'
import MarketingHeroDecorations from './MarketingHeroDecorations'

type Props = { post: BlogPost }

export default function BlogArticleHero({ post }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <header className='relative overflow-hidden border-b border-[var(--app-border)] bg-[var(--app-surface)]'>
      <MarketingHeroDecorations />
      <div className='marketing-container relative z-10 py-12 md:py-16 lg:py-20'>
        <div className='grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12'>
          <div>
            <nav className='flex flex-wrap items-center gap-2 text-sm text-[var(--app-muted)]'>
              <Link
                href='/'
                className='transition hover:text-[var(--app-primary)]'>
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link
                href='/blog'
                className='inline-flex items-center gap-1 font-medium text-[var(--app-primary)] hover:underline'>
                <BookOpen className='h-3.5 w-3.5' />
                Blog
              </Link>
            </nav>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-[var(--app-foreground)] md:text-4xl lg:text-[2.35rem]'
            >
              {post.title}
            </motion.h1>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className='mt-5 text-lg leading-relaxed text-[var(--app-muted)]'
            >
              {post.description}
            </motion.p>
            <div className='mt-6 flex flex-wrap items-center gap-3 text-sm text-[var(--app-muted)]'>
              <span className='inline-flex items-center gap-1.5'>
                <Calendar className='h-4 w-4 text-[var(--app-primary)]' />
                <time dateTime={post.datePublished}>{post.datePublished}</time>
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs'>
                <Tag className='h-3.5 w-3.5 text-[var(--app-primary)]' />
                Article
              </span>
            </div>
            <div className='mt-6 flex flex-wrap gap-2'>
              {post.keywords.map((k) => (
                <span
                  key={k}
                  className='rounded-lg border border-[var(--app-border)] bg-[var(--app-card)]/90 px-2.5 py-1 text-xs font-medium text-[var(--app-muted)] shadow-sm backdrop-blur-sm'>
                  {k}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className='relative -mt-4 lg:-mt-[52px]'
          >
            <div className='hero-image-glow absolute -inset-2 rounded-2xl bg-gradient-to-br from-[var(--app-primary)]/20 to-amber-500/15 blur-2xl' />
            <div className='relative overflow-hidden rounded-2xl border border-[var(--app-border)] shadow-xl ring-1 ring-[var(--app-primary)]/10'>
              <Image
                src='/images/marketing/page-blog.jpg'
                alt='Planning and analytics workspace'
                width={640}
                height={420}
                className='h-auto w-full object-cover'
                sizes='(max-width: 1024px) 100vw, 38vw'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[var(--app-sidebar)]/70 via-transparent to-transparent' />
              <p className='absolute bottom-0 left-0 right-0 p-4 text-xs font-medium text-white/95'>
                Long-form guides aligned to Doorear modules—operations, finance &
                procurement.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
