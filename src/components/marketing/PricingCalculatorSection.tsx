'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Check, LifeBuoy, PackagePlus, Users } from 'lucide-react'
import { MotionInView } from '@/components/marketing/MotionInView'
import SectionHeading from '@/components/marketing/SectionHeading'
import { APP_SIGNUP_URL } from '@/components/marketing/site-config'
import { LinkButton } from '@/components/ui'
import { cn } from '@/lib/cn'
import {
  ANNUAL_DISCOUNT_PERCENT,
  EXTRA_USER_OPTIONS,
  PRICING_PLANS,
  SHIPMENT_PACKS,
  SUPPORT_TIERS,
  type BillingCycle,
} from './pricing-calculator-config'

const currency = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

function formatInr(value: number) {
  return currency.format(Math.max(0, Math.round(value)))
}

export default function PricingCalculatorSection() {
  const selectablePlans = PRICING_PLANS.filter((plan) => !plan.isContactSales)
  const [selectedPlanId, setSelectedPlanId] = useState(selectablePlans[1]?.id ?? 'growth')
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly')
  const [extraUsers, setExtraUsers] = useState<number>(0)
  const [selectedPackId, setSelectedPackId] = useState<string>(SHIPMENT_PACKS[0]?.id ?? '')
  const [packQuantity, setPackQuantity] = useState<number>(0)
  const [supportTierId, setSupportTierId] = useState<string>('standard')

  const selectedPlan =
    PRICING_PLANS.find((plan) => plan.id === selectedPlanId) ?? selectablePlans[0]
  const selectedPack =
    SHIPMENT_PACKS.find((pack) => pack.id === selectedPackId) ?? SHIPMENT_PACKS[0]
  const selectedSupportTier =
    SUPPORT_TIERS.find((tier) => tier.id === supportTierId) ?? SUPPORT_TIERS[0]

  const pricing = useMemo(() => {
    const basePlanMonthlyFee = selectedPlan.monthlyFee
    const annualDiscountAmount =
      billingCycle === 'annual'
        ? (basePlanMonthlyFee * ANNUAL_DISCOUNT_PERCENT) / 100
        : 0
    const discountedBaseMonthly = basePlanMonthlyFee - annualDiscountAmount

    const extraUsersCostMonthly = extraUsers * selectedPlan.extraUserMonthlyFee
    const shipmentAddonMonthly = (selectedPack?.monthlyPrice ?? 0) * packQuantity
    const supportMonthly = selectedSupportTier.monthlyPrice

    const monthlyEstimate =
      discountedBaseMonthly +
      extraUsersCostMonthly +
      shipmentAddonMonthly +
      supportMonthly

    const annualTotal = monthlyEstimate * 12
    const annualSavings = annualDiscountAmount * 12

    const includedUsers = selectedPlan.includedUsers
    const includedShipments = selectedPlan.includedShipments
    const addonShipments = (selectedPack?.shipments ?? 0) * packQuantity

    return {
      basePlanMonthlyFee,
      annualDiscountAmount,
      discountedBaseMonthly,
      extraUsersCostMonthly,
      shipmentAddonMonthly,
      supportMonthly,
      monthlyEstimate,
      annualTotal,
      annualSavings,
      includedUsers,
      includedShipments,
      addonShipments,
      totalUsersCapacity: includedUsers + extraUsers,
      totalShipmentCapacity: includedShipments + addonShipments,
    }
  }, [billingCycle, extraUsers, packQuantity, selectedPack, selectedPlan, selectedSupportTier])

  return (
    <section className='relative border-b border-[var(--app-border)] bg-[var(--app-surface)] py-16 md:py-20'>
      <div className='marketing-container'>
        <MotionInView>
          <SectionHeading
            eyebrow='Pricing · Plan & usage calculator'
            title='Estimate your monthly or annual spend in seconds'
            description='Choose a plan, add expected users and shipment packs, then compare monthly vs annual billing. Calculations are instant and run fully on the client.'
          />
        </MotionInView>

        <MotionInView className='mt-10'>
          <div className='grid gap-6 lg:grid-cols-4'>
            {PRICING_PLANS.map((plan) => {
              const isSelected = selectedPlanId === plan.id
              return (
                <article
                  key={plan.id}
                  className={cn(
                    'rounded-2xl border bg-[var(--app-card)] p-6 shadow-sm transition',
                    plan.highlight
                      ? 'border-[var(--app-primary)] ring-2 ring-[var(--app-primary)]/15'
                      : 'border-[var(--app-border)]',
                    !plan.isContactSales &&
                      'cursor-pointer hover:-translate-y-0.5 hover:border-[var(--app-primary)]/30 hover:shadow-md',
                    isSelected && 'border-[var(--app-primary)] ring-2 ring-[var(--app-primary)]/20'
                  )}
                  onClick={() => {
                    if (!plan.isContactSales) setSelectedPlanId(plan.id)
                  }}>
                  {plan.badge ? (
                    <p className='mb-3 inline-flex rounded-full bg-[var(--app-surface)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--app-muted)]'>
                      {plan.badge}
                    </p>
                  ) : null}
                  <h3 className='text-xl font-bold text-[var(--app-foreground)]'>{plan.name}</h3>
                  <p className='mt-3 text-3xl font-bold tracking-tight text-[var(--app-foreground)]'>
                    {plan.isContactSales ? plan.startingFromLabel : formatInr(plan.monthlyFee)}
                    {!plan.isContactSales ? (
                      <span className='ml-1 text-sm font-medium text-[var(--app-muted)]'>/ month</span>
                    ) : null}
                  </p>
                  <p className='mt-3 text-sm leading-relaxed text-[var(--app-muted)]'>{plan.description}</p>
                  {!plan.isContactSales ? (
                    <ul className='mt-4 space-y-2 text-sm text-[var(--app-muted)]'>
                      <li className='flex items-center gap-2'>
                        <Check className='h-4 w-4 text-[var(--chart-emerald)]' />
                        {plan.includedUsers} users included
                      </li>
                      <li className='flex items-center gap-2'>
                        <Check className='h-4 w-4 text-[var(--chart-emerald)]' />
                        {plan.includedShipments.toLocaleString('en-IN')} shipments / month
                      </li>
                      <li className='flex items-center gap-2'>
                        <Check className='h-4 w-4 text-[var(--chart-emerald)]' />
                        Extra users {formatInr(plan.extraUserMonthlyFee)} / user / month
                      </li>
                    </ul>
                  ) : (
                    <p className='mt-4 text-sm text-[var(--app-muted)]'>
                      Custom users, shipment limits, onboarding, and governance aligned to your network.
                    </p>
                  )}
                  <div className='mt-5'>
                    {plan.isContactSales ? (
                      <LinkButton href='/contact' variant='primary' size='block'>
                        {plan.ctaLabel}
                      </LinkButton>
                    ) : (
                      <button
                        type='button'
                        className={cn(
                          'w-full rounded-xl border px-4 py-2.5 text-sm font-semibold transition',
                          isSelected
                            ? 'border-[var(--app-primary)] bg-[var(--app-primary)]/10 text-[var(--app-primary)]'
                            : 'border-[var(--app-border)] text-[var(--app-foreground)] hover:border-[var(--app-primary)]/40'
                        )}>
                        {isSelected ? 'Selected' : plan.ctaLabel}
                      </button>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </MotionInView>

        <MotionInView className='mt-10'>
          <div className='grid gap-6 xl:grid-cols-12'>
            <div className='xl:col-span-7 space-y-6'>
              <div className='rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-6 shadow-sm'>
                <div className='flex flex-wrap items-center justify-between gap-4'>
                  <h3 className='text-lg font-semibold text-[var(--app-foreground)]'>Billing cycle</h3>
                  <div className='inline-flex rounded-full border border-[var(--app-border)] bg-[var(--app-surface)] p-1'>
                    {(['monthly', 'annual'] as const).map((cycle) => {
                      const active = billingCycle === cycle
                      return (
                        <button
                          key={cycle}
                          type='button'
                          className={cn(
                            'rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition',
                            active
                              ? 'bg-[var(--app-primary)] text-white shadow-sm'
                              : 'text-[var(--app-muted)] hover:text-[var(--app-foreground)]'
                          )}
                          onClick={() => setBillingCycle(cycle)}>
                          {cycle}
                        </button>
                      )
                    })}
                  </div>
                </div>
                <p className='mt-3 text-sm text-[var(--app-muted)]'>
                  Annual billing applies a {ANNUAL_DISCOUNT_PERCENT}% discount on the platform fee and keeps top-up and support charges at listed monthly rates.
                </p>
              </div>

              <div className='rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-6 shadow-sm'>
                <div className='flex items-center gap-2'>
                  <Users className='h-5 w-5 text-[var(--app-primary)]' />
                  <h3 className='text-lg font-semibold text-[var(--app-foreground)]'>Extra users</h3>
                </div>
                <p className='mt-2 text-sm text-[var(--app-muted)]'>
                  Add named seats on top of your included users. Charges are based on your selected plan.
                </p>
                <select
                  value={extraUsers}
                  onChange={(event) => setExtraUsers(Number(event.target.value))}
                  className='mt-4 w-full rounded-xl border border-[var(--app-border)] bg-[var(--app-surface)] px-3 py-2.5 text-sm text-[var(--app-foreground)] outline-none transition focus:border-[var(--app-primary)] focus:ring-2 focus:ring-[var(--app-primary)]/20'>
                  {EXTRA_USER_OPTIONS.map((value) => (
                    <option key={value} value={value}>
                      +{value} {value === 1 ? 'user' : 'users'}
                    </option>
                  ))}
                </select>
                <p className='mt-2 text-xs text-[var(--app-muted)]'>
                  {formatInr(selectedPlan.extraUserMonthlyFee)} per additional user each month for the {selectedPlan.name} plan.
                </p>
              </div>

              <div className='rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-6 shadow-sm'>
                <div className='flex items-center gap-2'>
                  <PackagePlus className='h-5 w-5 text-[var(--app-primary)]' />
                  <h3 className='text-lg font-semibold text-[var(--app-foreground)]'>Shipment top-up packs</h3>
                </div>
                <p className='mt-2 text-sm text-[var(--app-muted)]'>
                  Select a top-up pack and quantity multiplier to expand shipment capacity for the billing period.
                </p>
                <div className='mt-4 grid gap-3 sm:grid-cols-2'>
                  <select
                    value={selectedPackId}
                    onChange={(event) => setSelectedPackId(event.target.value)}
                    className='w-full rounded-xl border border-[var(--app-border)] bg-[var(--app-surface)] px-3 py-2.5 text-sm text-[var(--app-foreground)] outline-none transition focus:border-[var(--app-primary)] focus:ring-2 focus:ring-[var(--app-primary)]/20'>
                    {SHIPMENT_PACKS.map((pack) => (
                      <option key={pack.id} value={pack.id}>
                        {pack.label} ({formatInr(pack.monthlyPrice)})
                      </option>
                    ))}
                  </select>
                  <input
                    type='number'
                    min={0}
                    value={packQuantity}
                    onChange={(event) => setPackQuantity(Math.max(0, Number(event.target.value) || 0))}
                    className='w-full rounded-xl border border-[var(--app-border)] bg-[var(--app-surface)] px-3 py-2.5 text-sm text-[var(--app-foreground)] outline-none transition focus:border-[var(--app-primary)] focus:ring-2 focus:ring-[var(--app-primary)]/20'
                    placeholder='Quantity'
                  />
                </div>
                <p className='mt-2 text-xs text-[var(--app-muted)]'>{selectedPack?.helperText}</p>
              </div>

              <div className='rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-6 shadow-sm'>
                <div className='flex items-center gap-2'>
                  <LifeBuoy className='h-5 w-5 text-[var(--app-primary)]' />
                  <h3 className='text-lg font-semibold text-[var(--app-foreground)]'>Support SLA tier</h3>
                </div>
                <p className='mt-2 text-sm text-[var(--app-muted)]'>
                  Choose the level of support coverage your operations team needs.
                </p>
                <div className='mt-4 space-y-2'>
                  {SUPPORT_TIERS.map((tier) => (
                    <label
                      key={tier.id}
                      className={cn(
                        'flex cursor-pointer items-center justify-between rounded-xl border px-3 py-2.5 transition',
                        supportTierId === tier.id
                          ? 'border-[var(--app-primary)] bg-[var(--app-primary)]/5'
                          : 'border-[var(--app-border)] hover:border-[var(--app-primary)]/35'
                      )}>
                      <span>
                        <span className='block text-sm font-medium text-[var(--app-foreground)]'>{tier.label}</span>
                        <span className='block text-xs text-[var(--app-muted)]'>{tier.slaText}</span>
                      </span>
                      <span className='text-sm font-semibold text-[var(--app-foreground)]'>
                        {tier.monthlyPrice === 0 ? 'Included' : `${formatInr(tier.monthlyPrice)} / month`}
                      </span>
                      <input
                        type='radio'
                        name='support-tier'
                        className='sr-only'
                        value={tier.id}
                        checked={supportTierId === tier.id}
                        onChange={() => setSupportTierId(tier.id)}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className='xl:col-span-5 space-y-6'>
              <div className='rounded-2xl border border-[var(--app-primary)]/30 bg-gradient-to-br from-[var(--app-card)] via-[var(--app-surface)] to-[var(--app-card)] p-6 shadow-sm'>
                <h3 className='text-lg font-semibold text-[var(--app-foreground)]'>Pricing calculator</h3>
                <p className='mt-2 text-sm text-[var(--app-muted)]'>
                  Real-time estimate based on your current selections.
                </p>

                <dl className='mt-5 space-y-3 text-sm'>
                  <div className='flex items-center justify-between text-[var(--app-muted)]'>
                    <dt>Base plan fee</dt>
                    <dd>{formatInr(pricing.basePlanMonthlyFee)} / month</dd>
                  </div>
                  <div className='flex items-center justify-between text-[var(--app-muted)]'>
                    <dt>Annual discount</dt>
                    <dd>{billingCycle === 'annual' ? `-${formatInr(pricing.annualDiscountAmount)} / month` : '—'}</dd>
                  </div>
                  <div className='flex items-center justify-between text-[var(--app-muted)]'>
                    <dt>Extra users cost</dt>
                    <dd>{formatInr(pricing.extraUsersCostMonthly)} / month</dd>
                  </div>
                  <div className='flex items-center justify-between text-[var(--app-muted)]'>
                    <dt>Shipment top-up cost</dt>
                    <dd>{formatInr(pricing.shipmentAddonMonthly)} / month</dd>
                  </div>
                  <div className='flex items-center justify-between text-[var(--app-muted)]'>
                    <dt>Support SLA cost</dt>
                    <dd>{formatInr(pricing.supportMonthly)} / month</dd>
                  </div>
                  <div className='my-1 border-t border-[var(--app-border)]' />
                  <div className='flex items-center justify-between text-base font-semibold text-[var(--app-foreground)]'>
                    <dt>Estimated total</dt>
                    <dd>{formatInr(pricing.monthlyEstimate)} / month</dd>
                  </div>
                </dl>

                {billingCycle === 'annual' ? (
                  <div className='mt-4 rounded-xl border border-[var(--chart-emerald)]/30 bg-[var(--chart-emerald)]/10 p-3 text-sm'>
                    <p className='font-medium text-[var(--app-foreground)]'>
                      Annual total: {formatInr(pricing.annualTotal)}
                    </p>
                    <p className='mt-1 text-[var(--app-muted)]'>
                      Monthly equivalent: {formatInr(pricing.monthlyEstimate)} with estimated savings of{' '}
                      {formatInr(pricing.annualSavings)} per year on plan fee.
                    </p>
                  </div>
                ) : null}

                <p className='mt-4 text-xs text-[var(--app-muted)]'>
                  Estimate only. Final invoice may vary by taxes, onboarding scope, and contract terms.
                </p>
                <div className='mt-5 flex flex-wrap gap-3'>
                  <LinkButton href={APP_SIGNUP_URL} variant='primary' size='section'>
                    Start free trial
                  </LinkButton>
                  <Link
                    href='/contact'
                    className='inline-flex items-center rounded-xl border border-[var(--app-border)] px-5 py-3 text-sm font-semibold text-[var(--app-foreground)] transition hover:border-[var(--app-primary)]/35'>
                    Talk to sales
                  </Link>
                </div>
              </div>

              <div className='rounded-2xl border border-[var(--app-border)] bg-[var(--app-card)] p-6 shadow-sm'>
                <h3 className='text-lg font-semibold text-[var(--app-foreground)]'>Usage overview</h3>
                <p className='mt-2 text-sm text-[var(--app-muted)]'>
                  Included limits plus selected top-ups for quick operational planning.
                </p>
                <div className='mt-4 space-y-3 text-sm'>
                  <div className='flex items-center justify-between'>
                    <span className='text-[var(--app-muted)]'>Plan selected</span>
                    <span className='font-medium text-[var(--app-foreground)]'>{selectedPlan.name}</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-[var(--app-muted)]'>Users included</span>
                    <span className='font-medium text-[var(--app-foreground)]'>{pricing.includedUsers}</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-[var(--app-muted)]'>Extra users selected</span>
                    <span className='font-medium text-[var(--app-foreground)]'>+{extraUsers}</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-[var(--app-muted)]'>Total user capacity</span>
                    <span className='font-medium text-[var(--app-foreground)]'>{pricing.totalUsersCapacity}</span>
                  </div>
                  <div className='my-1 border-t border-[var(--app-border)]' />
                  <div className='flex items-center justify-between'>
                    <span className='text-[var(--app-muted)]'>Shipments included</span>
                    <span className='font-medium text-[var(--app-foreground)]'>
                      {pricing.includedShipments.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-[var(--app-muted)]'>Shipment top-ups</span>
                    <span className='font-medium text-[var(--app-foreground)]'>
                      +{pricing.addonShipments.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-[var(--app-muted)]'>Total shipment capacity</span>
                    <span className='font-medium text-[var(--app-foreground)]'>
                      {pricing.totalShipmentCapacity.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className='my-1 border-t border-[var(--app-border)]' />
                  <div className='flex items-center justify-between'>
                    <span className='text-[var(--app-muted)]'>Support tier</span>
                    <span className='font-medium text-[var(--app-foreground)]'>
                      {selectedSupportTier.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionInView>
      </div>
    </section>
  )
}
