'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CreditCard,
  GitBranch,
  LineChart,
  MapPinned,
  Radio,
  Truck,
} from 'lucide-react'
import { APP_SIGNUP_URL } from './site-config'

export function IndiaMarketSection() {
  const reduceMotion = useReducedMotion()
  return (
    <section className='border-y border-[var(--app-border)] bg-[var(--app-card)] py-16 md:py-20'>
      <div className='marketing-container'>
        <div className='grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16'>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className='text-[10px] font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
              India logistics context
            </p>
            <h2 className='mt-2 text-3xl font-bold tracking-tight text-[var(--app-foreground)] md:text-4xl'>
              Built for branch-heavy courier &amp; 3PL realities
            </h2>
            <p className='mt-5 text-base leading-relaxed text-[var(--app-muted)]'>
              India&apos;s courier, express and parcel segment is expanding as
              e‑commerce and B2B freight digitize. Networks compete on lane
              coverage, SLA adherence, and cost per shipment—yet many mid-market
              operators still juggle AWBs in spreadsheets, disconnected WhatsApp
              threads, and legacy billing tools. Doorear aligns{' '}
              <strong className='font-semibold text-[var(--app-foreground)]'>
                bookings, hub execution, MIS, and finance artifacts
              </strong>{' '}
              so leadership sees one operational truth.
            </p>
            <p className='mt-4 text-base leading-relaxed text-[var(--app-muted)]'>
              GST registration, PIN-level serviceability, and multi-city hubs are
              not edge cases—they are the default. Doorear reflects branch
              hierarchy, validates coverage before you book, and keeps
              subscription usage (shipments, seats, top-ups) transparent inside the
              product.
            </p>
            <Link
              href='/solutions'
              className='mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--app-primary)] hover:underline'>
              See who we serve
              <ArrowRight className='h-4 w-4' />
            </Link>
          </motion.div>
          <div className='grid gap-4 sm:grid-cols-2'>
            {[
              {
                icon: LineChart,
                title: 'Growth & pressure on SLAs',
                text: 'Volumes and customer expectations push networks to instrument first-mile → last-mile handoffs—not just track a single AWB in isolation.',
              },
              {
                icon: MapPinned,
                title: 'Coverage as a moat',
                text: 'PIN masters and route discipline protect margin; booking validation reduces rescans and emergency linehaul spend.',
              },
              {
                icon: CreditCard,
                title: 'Finance wants alignment',
                text: 'Controllers need invoices and vouchers tied to operational activity—not monthly reconciliation fire drills.',
              },
              {
                icon: Radio,
                title: 'Visibility beats heroics',
                text: 'Dashboards for OFD, delays, and branch throughput beat status meetings that start with “let me check the sheet.”',
              },
            ].map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduceMotion ? 0 : 0.06 * i, duration: 0.4 }}
                  className='rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-5 shadow-sm'>
                  <Icon className='h-5 w-5 text-[var(--app-primary)]' strokeWidth={2} />
                  <h3 className='mt-3 text-sm font-semibold text-[var(--app-foreground)]'>
                    {card.title}
                  </h3>
                  <p className='mt-2 text-xs leading-relaxed text-[var(--app-muted)]'>
                    {card.text}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    n: '01',
    title: 'Book & validate',
    icon: Boxes,
    body: 'Create forward bookings and AWB-style orders against your serviceable PIN / location master—stop bad routes before they consume capacity.',
  },
  {
    n: '02',
    title: 'Execute network handoffs',
    icon: Truck,
    body: 'Run bags, manifests, inward legs, and delivery runs so supervisors see where consignments sit from first mile to POD.',
  },
  {
    n: '03',
    title: 'Measure & improve',
    icon: BarChart3,
    body: 'Use operational MIS for pipeline health and delays; add sales & purchase analytics when your org enables those modules.',
  },
  {
    n: '04',
    title: 'Govern access & billing',
    icon: GitBranch,
    body: 'Branch-scoped users, granular roles, subscription allowances, and optional offline finance coordination—aligned to how Indian enterprises buy.',
  },
]

export function WorkflowSection() {
  const reduceMotion = useReducedMotion()
  return (
    <section className='py-16 md:py-20'>
      <div className='marketing-container'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='text-[10px] font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
            End-to-end flow
          </p>
          <h2 className='mt-2 text-3xl font-bold tracking-tight text-[var(--app-foreground)] md:text-4xl'>
            From booking intent to proof of delivery
          </h2>
          <p className='mt-4 text-base text-[var(--app-muted)]'>
            Doorear connects operational steps your teams already perform—now with
            a single audit trail, fewer manual exports, and permissions that match
            responsibility.
          </p>
        </div>
        <div className='mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.article
                key={s.n}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduceMotion ? 0 : 0.07 * i }}
                className='relative rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-6 shadow-sm'>
                <span className='text-xs font-bold tabular-nums text-[var(--app-primary)]'>
                  {s.n}
                </span>
                <div className='mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--app-primary)]/15 to-transparent'>
                  <Icon className='h-5 w-5 text-[var(--app-primary)]' />
                </div>
                <h3 className='mt-4 text-lg font-semibold text-[var(--app-foreground)]'>
                  {s.title}
                </h3>
                <p className='mt-2 text-sm leading-relaxed text-[var(--app-muted)]'>
                  {s.body}
                </p>
              </motion.article>
            )
          })}
        </div>
        <div className='mt-12 flex flex-wrap justify-center gap-4'>
          <Link
            href={APP_SIGNUP_URL}
            className='inline-flex rounded-xl bg-[var(--app-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95'>
            Get Started
          </Link>
          <Link
            href='/pricing'
            className='inline-flex rounded-xl border border-[var(--app-border)] bg-[var(--app-surface)] px-6 py-3 text-sm font-semibold text-[var(--app-foreground)] hover:bg-[var(--app-card)]'>
              View plans &amp; limits
          </Link>
        </div>
      </div>
    </section>
  )
}
