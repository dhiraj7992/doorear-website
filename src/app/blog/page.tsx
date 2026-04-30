import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts'
import BlogPostList from '@/components/marketing/BlogPostList'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import { MotionInView } from '@/components/marketing/MotionInView'
import { SITE_NAME } from '@/components/marketing/site-config'

export const metadata: Metadata = {
  title: 'Blog — Logistics, Courier & Cost Optimization',
  description:
    'Articles on logistics management software, courier branch management, shipment booking, MIS dashboards, GST invoicing support, and multi-tenant SaaS for Indian operators.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: `Blog | ${SITE_NAME}`,
    description:
      'SEO-friendly guides on logistics operations, tracking discipline, and cost control for courier networks.',
    url: '/blog',
  },
}

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) =>
    a.datePublished < b.datePublished ? 1 : -1
  )

  return (
    <>
      <MarketingPageHero
        eyebrow='Resources · Blog'
        title={
          <>
            Insights for{' '}
            <span className='bg-gradient-to-r from-[var(--app-primary)] to-blue-600 bg-clip-text text-transparent'>
              logistics &amp; courier
            </span>{' '}
            leaders
          </>
        }
        description={
          <>
            Practical articles on{' '}
            <strong className='font-semibold text-[var(--app-foreground)]'>
              logistics cost optimization
            </strong>
            , branch operations, PIN validation, MIS discipline, GST-oriented
            invoicing support, procurement RFQs, and subscription economics
            (including shipment top-ups)—grounded in how Doorear modules actually
            work for Indian courier and 3PL operators.
          </>
        }
        extra={
          <>
            Use these posts alongside our{' '}
            <Link
              href='/features'
              className='font-semibold text-[var(--app-primary)] hover:underline'>
              Features
            </Link>{' '}
            and{' '}
            <Link
              href='/pricing'
              className='font-semibold text-[var(--app-primary)] hover:underline'>
              Pricing
            </Link>{' '}
            pages to evaluate fit before you book a demo.
          </>
        }
        image={{
          src: '/images/marketing/web-ops-6.jpg',
          alt: 'Desk with analytics and planning — strategy and writing',
        }}
        imagePresentation='default'
        imageCaption='Long-form guides aligned to real modules: bookings, hubs, MIS, procurement, and billing transparency.'
        cta={{ href: '/contact', label: 'Suggest a topic' }}
        secondaryCta={{ href: '/pricing', label: 'View pricing' }}
      />

      <section className='border-b border-[var(--app-border)] bg-[var(--app-surface)] py-16 md:py-24'>
        <div className='marketing-container'>
          <MotionInView>
            <BlogPostList posts={sorted} />
          </MotionInView>
          <MotionInView className='mt-14 text-center' delay={0.1}>
            <p className='text-sm text-[var(--app-muted)]'>
              {SITE_NAME} — logistics software for Indian courier &amp; 3PL
              networks ·{' '}
              <span className='font-medium text-[var(--app-foreground)]'>
                doorear.com
              </span>
            </p>
          </MotionInView>
        </div>
      </section>
    </>
  )
}
