import type { Metadata } from 'next'
import { Clock, Mail, MessageSquare } from 'lucide-react'
import MarketingContactForm from '@/components/marketing/MarketingContactForm'
import MarketingPageHero from '@/components/marketing/MarketingPageHero'
import { MotionInView } from '@/components/marketing/MotionInView'
import { APP_SIGNUP_URL, SITE_NAME } from '@/components/marketing/site-config'

export const metadata: Metadata = {
  title: 'Contact — Book a Demo or Talk to Sales',
  description:
    'Reach the Doorear team at doorear.com: book a demo, ask about multi branch courier software fit, or discuss procurement, accounts, and subscription plans for your network.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `Contact | ${SITE_NAME}`,
    description:
      'Talk to us about hubs, permissions, MIS, GST-oriented invoicing support, shipment top-ups, and honest billing.',
    url: '/contact',
  },
}

const bullets = [
  {
    icon: Mail,
    title: 'What to include',
    text: 'Branch count, average daily shipments, current tools, and whether you need procurement or deep finance modules in phase one.',
  },
  {
    icon: Clock,
    title: 'Response time',
    text: 'We prioritize operational detail: timelines for pilot hubs, training expectations, and how your finance team handles subscription approvals.',
  },
  {
    icon: MessageSquare,
    title: 'Conversation style',
    text: 'No scripted fluff—we walk real workflows (booking → hub → delivery → MIS) and align expectations on integrations that are actually live.',
  },
]

export default function ContactPage() {
  return (
    <>
      <MarketingPageHero
        eyebrow='Contact · Sales & onboarding'
        title={
          <>
            Let&apos;s map{' '}
            <span className='bg-gradient-to-r from-[var(--app-primary)] to-blue-600 bg-clip-text text-transparent'>
              your rollout
            </span>{' '}
            together
          </>
        }
        description={
          <>
            Book a demo or message {SITE_NAME}. Share branches, booking volumes,
            seat counts, and what “go-live” means—whether you are evaluating
            Standard vs Enterprise or need a Custom quote with unlimited
            shipments.
          </>
        }
        extra='We respond with concrete next steps and honest scope—not generic brochures or integration promises your tenant has not deployed.'
        image={{
          src: '/images/marketing/page-contact.jpg',
          alt: 'Open communication and partnership — contact Doorear',
        }}
        imageCaption='Sales & onboarding for Indian courier and 3PL operators—branch rollouts, MIS workshops, and finance alignment.'
        cta={{ href: '#contact-form', label: 'Send a message' }}
        secondaryCta={{ href: APP_SIGNUP_URL, label: 'Get Started' }}
      />

      <section className='relative border-b border-[var(--app-border)] bg-[var(--app-surface)] py-14 md:py-20'>
        <div className='marketing-container'>
          <MotionInView>
            <div className='grid gap-6 lg:grid-cols-3'>
              {bullets.map((b) => {
                const Icon = b.icon
                return (
                  <div
                    key={b.title}
                    className='rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-7 text-left shadow-sm transition hover:border-[var(--app-primary)]/20 hover:shadow-md'>
                    <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--app-primary)]/10 text-[var(--app-primary)]'>
                      <Icon className='h-5 w-5' strokeWidth={2} />
                    </div>
                    <h2 className='mt-5 text-sm font-semibold text-[var(--app-foreground)]'>
                      {b.title}
                    </h2>
                    <p className='mt-3 text-sm leading-relaxed text-[var(--app-muted)]'>
                      {b.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </MotionInView>

          <MotionInView className='mx-auto mt-16 max-w-2xl' delay={0.08}>
            <div
              id='contact-form'
              className='scroll-mt-28 rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-8 shadow-lg shadow-slate-900/5 md:p-10'
            >
              <h2 className='text-center text-xl font-bold text-[var(--app-foreground)]'>
                Send a message
              </h2>
              <p className='mt-2 text-center text-sm text-[var(--app-muted)]'>
                All fields help us route you to the right specialist.
              </p>
              <div className='mt-8'>
                <MarketingContactForm />
              </div>
            </div>
          </MotionInView>
        </div>
      </section>
    </>
  )
}
