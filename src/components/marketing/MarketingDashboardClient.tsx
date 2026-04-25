'use client'

import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui'
import {
  DEFAULT_MARKETING_DASHBOARD_DATA,
  type ChannelMetrics,
  type MarketingDashboardData,
} from '@/lib/marketing-dashboard'
import { SITE_NAME } from './site-config'

const STORAGE_KEY = 'doorear-marketing-dashboard'

function asCurrency(value: number) {
  return `$${value.toFixed(2)}`
}

function safeDivide(a: number, b: number) {
  if (!b) return 0
  return a / b
}

export default function MarketingDashboardClient() {
  const [totalBudget, setTotalBudget] = useState(
    DEFAULT_MARKETING_DASHBOARD_DATA.totalBudget
  )
  const [google, setGoogle] = useState<ChannelMetrics>(
    DEFAULT_MARKETING_DASHBOARD_DATA.google
  )
  const [linkedin, setLinkedin] = useState<ChannelMetrics>(
    DEFAULT_MARKETING_DASHBOARD_DATA.linkedin
  )
  const [updatedAt, setUpdatedAt] = useState(DEFAULT_MARKETING_DASHBOARD_DATA.updatedAt)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')

  useEffect(() => {
    let active = true
    const load = async () => {
      try {
        const res = await fetch('/api/marketing-dashboard', { cache: 'no-store' })
        if (!res.ok) throw new Error('Server load failed')
        const data = (await res.json()) as MarketingDashboardData
        if (!active) return
        setTotalBudget(data.totalBudget)
        setGoogle(data.google)
        setLinkedin(data.linkedin)
        setUpdatedAt(data.updatedAt)
      } catch {
        if (!active || typeof window === 'undefined') return
        const fallback = window.localStorage.getItem(STORAGE_KEY)
        if (!fallback) return
        const data = JSON.parse(fallback) as MarketingDashboardData
        setTotalBudget(data.totalBudget)
        setGoogle(data.google)
        setLinkedin(data.linkedin)
        setUpdatedAt(data.updatedAt)
        setSaveMessage('Loaded from browser storage (Vercel-safe mode).')
      } finally {
        if (active) setIsLoading(false)
      }
    }
    load()
    return () => {
      active = false
    }
  }, [])

  async function saveDashboard() {
    setIsSaving(true)
    setSaveMessage('')
    const payload = { totalBudget, google, linkedin }
    try {
      const res = await fetch('/api/marketing-dashboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Server save failed')
      const data = (await res.json()) as MarketingDashboardData
      setUpdatedAt(data.updatedAt)
      setSaveMessage('Saved successfully.')
    } catch {
      if (typeof window !== 'undefined') {
        const localData: MarketingDashboardData = {
          ...payload,
          updatedAt: new Date().toISOString(),
        }
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(localData))
        setUpdatedAt(localData.updatedAt)
        setSaveMessage('Saved in browser storage (Vercel-safe mode).')
      } else {
        setSaveMessage('Could not save data. Try again.')
      }
    } finally {
      setIsSaving(false)
    }
  }

  const googleTargetSpend = useMemo(() => totalBudget * 0.8, [totalBudget])
  const linkedinTargetSpend = useMemo(() => totalBudget * 0.2, [totalBudget])

  const googleCpc = safeDivide(google.spend, google.clicks)
  const linkedinCpc = safeDivide(linkedin.spend, linkedin.clicks)
  const googleCpl = safeDivide(google.spend, google.leads)
  const linkedinCpl = safeDivide(linkedin.spend, linkedin.leads)
  const googleCvr = safeDivide(google.leads, google.clicks) * 100
  const linkedinCvr = safeDivide(linkedin.leads, linkedin.clicks) * 100

  const recommendations = useMemo(() => {
    const output: string[] = []
    if (google.spend < googleTargetSpend * 0.9) {
      output.push('Google spend is below target; deploy full 80% share weekly.')
    }
    if (linkedin.spend > linkedinTargetSpend * 1.2) {
      output.push('LinkedIn spend is above 20% cap; reduce low-intent audiences.')
    }
    if (googleCpl && linkedinCpl && linkedinCpl > googleCpl * 1.8) {
      output.push(
        'LinkedIn CPL is much higher than Google; keep LinkedIn focused on retargeting and decision-makers only.'
      )
    }
    if (googleCvr < 3) {
      output.push(
        'Google conversion rate is below 3%; improve ad-to-landing relevance and tighten keywords.'
      )
    }
    if (linkedin.leads > 0 && safeDivide(linkedin.qualifiedLeads, linkedin.leads) < 0.4) {
      output.push(
        'LinkedIn lead quality is low; narrow job titles and company size targeting.'
      )
    }
    if (!output.length) {
      output.push('Performance is stable. Keep testing one new ad copy variant per channel this month.')
    }
    return output
  }, [
    google.spend,
    googleTargetSpend,
    googleCpl,
    googleCvr,
    linkedin.spend,
    linkedinTargetSpend,
    linkedinCpl,
    linkedin.leads,
    linkedin.qualifiedLeads,
  ])

  return (
    <section className='border-b border-[var(--app-border)] bg-[var(--app-surface)] py-14 md:py-20'>
      <div className='marketing-container max-w-6xl'>
        <h1 className='text-3xl font-bold tracking-tight text-[var(--app-foreground)] md:text-4xl'>
          Marketing dashboard
        </h1>
        <p className='mt-3 text-sm leading-relaxed text-[var(--app-muted)]'>
          {SITE_NAME} paid strategy baseline: 80% Google Search and 20% LinkedIn.
          Update weekly to review CPL, CVR, and lead quality before reallocating spend.
        </p>
        <div className='mt-4 flex flex-wrap items-center gap-3'>
          <Button
            variant='primary'
            size='section'
            disabled={isSaving || isLoading}
            onClick={saveDashboard}>
            {isSaving ? 'Saving...' : 'Save dashboard data'}
          </Button>
          <p className='text-xs text-[var(--app-muted)]'>
            Last updated: {new Date(updatedAt).toLocaleString()}
          </p>
          {saveMessage ? (
            <p className='text-xs font-medium text-[var(--app-primary)]'>{saveMessage}</p>
          ) : null}
        </div>

        <div className='mt-8 grid gap-6 md:grid-cols-3'>
          <article className='rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-6 shadow-sm'>
            <p className='text-xs font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
              Total budget
            </p>
            <label className='mt-3 block text-sm text-[var(--app-muted)]'>
              Monthly spend (USD)
            </label>
            <input
              type='number'
              min={0}
              value={totalBudget}
              onChange={(e) => setTotalBudget(Number(e.target.value || 0))}
              className='mt-2 h-10 w-full rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] px-3 text-sm text-[var(--app-foreground)]'
            />
            <p className='mt-4 text-sm text-[var(--app-muted)]'>
              Google target: <span className='font-semibold'>{asCurrency(googleTargetSpend)}</span>
            </p>
            <p className='mt-1 text-sm text-[var(--app-muted)]'>
              LinkedIn target:{' '}
              <span className='font-semibold'>{asCurrency(linkedinTargetSpend)}</span>
            </p>
          </article>

          <ChannelCard
            title='Google Search'
            metrics={google}
            onChange={setGoogle}
            cpc={googleCpc}
            cpl={googleCpl}
            cvr={googleCvr}
          />
          <ChannelCard
            title='LinkedIn'
            metrics={linkedin}
            onChange={setLinkedin}
            cpc={linkedinCpc}
            cpl={linkedinCpl}
            cvr={linkedinCvr}
          />
        </div>

        <div className='mt-6 grid gap-6 lg:grid-cols-2'>
          <article className='rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-6 shadow-sm'>
            <h2 className='text-lg font-semibold text-[var(--app-foreground)]'>
              Key conversion events
            </h2>
            <ul className='mt-4 space-y-2 text-sm text-[var(--app-muted)]'>
              <li>- marketing_signup_click</li>
              <li>- marketing_demo_click</li>
              <li>- marketing_contact_submit</li>
              <li>- marketing_thank_you_view</li>
            </ul>
            <p className='mt-4 text-sm text-[var(--app-muted)]'>
              Use UTM tracking in ads: `utm_source`, `utm_medium`, `utm_campaign`,
              `utm_term`, `utm_content`.
            </p>
          </article>

          <article className='rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-6 shadow-sm'>
            <h2 className='text-lg font-semibold text-[var(--app-foreground)]'>
              Weekly recommendations
            </h2>
            <ul className='mt-4 space-y-2 text-sm text-[var(--app-muted)]'>
              {recommendations.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

type ChannelCardProps = {
  title: string
  metrics: ChannelMetrics
  onChange: (value: ChannelMetrics) => void
  cpc: number
  cpl: number
  cvr: number
}

function ChannelCard({ title, metrics, onChange, cpc, cpl, cvr }: ChannelCardProps) {
  const update = (key: keyof ChannelMetrics, value: number) =>
    onChange({ ...metrics, [key]: value })

  return (
    <article className='rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-6 shadow-sm'>
      <h2 className='text-lg font-semibold text-[var(--app-foreground)]'>{title}</h2>
      <div className='mt-4 grid gap-3 sm:grid-cols-2'>
        <MetricInput
          label='Spend (USD)'
          value={metrics.spend}
          onChange={(v) => update('spend', v)}
        />
        <MetricInput
          label='Clicks'
          value={metrics.clicks}
          onChange={(v) => update('clicks', v)}
        />
        <MetricInput
          label='Leads'
          value={metrics.leads}
          onChange={(v) => update('leads', v)}
        />
        <MetricInput
          label='Qualified leads'
          value={metrics.qualifiedLeads}
          onChange={(v) => update('qualifiedLeads', v)}
        />
      </div>
      <div className='mt-5 rounded-xl border border-[var(--app-border)] bg-[var(--app-surface)] p-4 text-sm text-[var(--app-muted)]'>
        <p>
          CPC: <span className='font-semibold'>{asCurrency(cpc)}</span>
        </p>
        <p className='mt-1'>
          CPL: <span className='font-semibold'>{asCurrency(cpl)}</span>
        </p>
        <p className='mt-1'>
          CVR: <span className='font-semibold'>{cvr.toFixed(2)}%</span>
        </p>
      </div>
    </article>
  )
}

type MetricInputProps = {
  label: string
  value: number
  onChange: (value: number) => void
}

function MetricInput({ label, value, onChange }: MetricInputProps) {
  return (
    <label className='block'>
      <span className='text-xs font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
        {label}
      </span>
      <input
        type='number'
        min={0}
        value={value}
        onChange={(e) => onChange(Number(e.target.value || 0))}
        className='mt-1 h-10 w-full rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] px-3 text-sm text-[var(--app-foreground)]'
      />
    </label>
  )
}
