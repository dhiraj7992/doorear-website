import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getAllSlugs,
  getPostBySlug,
  type BlogPost,
} from '@/lib/blog-posts'
import BlogArticleHero from '@/components/marketing/BlogArticleHero'
import { ScrollReveal, SectionShell } from '@/components/marketing/primitives'
import { getSiteUrl, SITE_NAME } from '@/components/marketing/site-config'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Not found' }
  const url = `${getSiteUrl()}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.datePublished,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

function ArticleJsonLd({ post }: { post: BlogPost }) {
  const base = getSiteUrl()
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    mainEntityOfPage: `${base}/blog/${post.slug}`,
  }
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <>
      <ArticleJsonLd post={post} />
      <BlogArticleHero post={post} />
      <SectionShell tone='surface' bordered spacing='default'>
        <div className='marketing-container max-w-3xl'>
          <ScrollReveal>
            <div className='premium-glass-panel rounded-3xl border border-[var(--app-border)] p-8 shadow-sm md:p-10'>
              <div className='space-y-10'>
                {post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className='text-2xl font-bold tracking-tight text-[var(--app-foreground)]'>
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((p, i) => (
                      <p
                        key={`${section.heading}-${i}`}
                        className='mt-4 text-base leading-relaxed text-[var(--app-muted)]'>
                        {p}
                      </p>
                    ))}
                  </section>
                ))}
              </div>
              <div className='mt-12 rounded-2xl border border-[var(--app-border)] bg-gradient-to-br from-[var(--app-surface)] to-white/80 p-6'>
                <h3 className='text-lg font-semibold text-[var(--app-foreground)]'>
                  Next steps
                </h3>
                <p className='mt-2 text-sm leading-relaxed text-[var(--app-muted)]'>
                  Want this operational model for your network?{' '}
                  <Link
                    href='/contact'
                    className='font-semibold text-[var(--app-primary)] hover:underline'>
                    Book a demo
                  </Link>{' '}
                  or explore{' '}
                  <Link
                    href='/features'
                    className='font-semibold text-[var(--app-primary)] hover:underline'>
                    features
                  </Link>
                  .
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionShell>
    </>
  )
}
