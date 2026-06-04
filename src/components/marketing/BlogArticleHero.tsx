'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { BookOpen, Calendar, Sparkles, Tag } from 'lucide-react'
import type { BlogPost } from '@/lib/blog-posts'
import MarketingHeroDecorations from './MarketingHeroDecorations'

type Props = { post: BlogPost }

export default function BlogArticleHero({ post }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <section className='aigocy-hero-shell relative overflow-hidden border-b border-[var(--app-border)]/50'>
      <MarketingHeroDecorations intense />
      <div className='marketing-container relative z-10 pb-14 pt-8 md:pb-18 md:pt-12 lg:pb-20 lg:pt-14'>
        <nav className='flex flex-wrap items-center gap-2 text-sm text-[var(--app-muted)]'>
          <Link href='/' className='transition hover:text-[var(--app-primary)]'>
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

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className='aigocy-eyebrow-pill mt-6 inline-flex w-fit max-w-full items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold text-[var(--app-foreground)]'>
          <span className='aigocy-pulse-dot h-2 w-2 shrink-0 rounded-full bg-[var(--app-primary)]' />
          <Sparkles className='h-3.5 w-3.5 shrink-0 text-amber-600' aria-hidden />
          <span>Article · {post.datePublished}</span>
        </motion.div>

        <div className='mt-7 grid items-start gap-10 lg:mt-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-x-12 xl:gap-x-16'>
          <div className='max-w-2xl'>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04 }}
              className='text-[2rem] font-extrabold leading-[1.1] tracking-tight text-[var(--app-foreground)] sm:text-4xl md:text-[2.35rem] md:leading-[1.12]'>
              {post.title}
            </motion.h1>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className='mt-6 text-lg leading-relaxed text-[var(--app-muted)] md:text-xl md:leading-[1.6]'>
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
                  className='rounded-lg border border-[var(--app-border)] bg-white/70 px-2.5 py-1 text-xs font-medium text-[var(--app-muted)] shadow-sm backdrop-blur-sm'>
                  {k}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className='aigocy-visual-frame relative lg:sticky lg:top-28'>
            <div className='hero-image-glow absolute -inset-3 rounded-3xl bg-gradient-to-br from-[var(--app-primary)]/25 to-amber-500/15 blur-2xl' />
            <div className='relative overflow-hidden rounded-2xl border border-[var(--app-border)] shadow-xl ring-1 ring-[var(--app-primary)]/10'>
              <Image
                src='/images/marketing/web-ops-2.jpg'
                alt='Planning and analytics workspace'
                width={640}
                height={420}
                className='hero-image-modern h-auto w-full object-cover'
                sizes='(max-width: 1024px) 100vw, 38vw'
                priority
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[var(--app-sidebar)]/70 via-transparent to-transparent' />
              <p className='absolute bottom-0 left-0 right-0 p-4 text-xs font-medium text-white/95'>
                Long-form guides aligned to Doorear modules—operations, finance
                &amp; procurement.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
