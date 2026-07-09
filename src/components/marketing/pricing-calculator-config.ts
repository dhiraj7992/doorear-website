export type BillingCycle = 'monthly' | 'annual'

export type PlanConfig = {
  id: 'free' | 'launch' | 'growth' | 'scale' | 'enterprise'
  name: string
  monthlyFee: number
  includedUsers: number
  includedShipments: number
  extraUserMonthlyFee: number
  description: string
  badge?: string
  highlight?: boolean
  ctaLabel: string
  isContactSales?: boolean
  isFreePlan?: boolean
  /** Trial length in days (Free plan only). */
  trialDays?: number
  startingFromLabel?: string
}

/** Add-on rates aligned with Launch (used by Free trial). */
export const LAUNCH_EXTRA_USER_MONTHLY_FEE = 499

export type ShipmentPack = {
  id: string
  label: string
  shipments: number
  monthlyPrice: number
  helperText: string
}

export type SupportTier = {
  id: 'standard' | 'silver' | 'gold' | 'platinum'
  label: string
  monthlyPrice: number
  slaText: string
}

export const ANNUAL_DISCOUNT_PERCENT = 10

export const EXTRA_USER_OPTIONS = [0, 1, 5, 10, 15, 20] as const

export const PRICING_PLANS: PlanConfig[] = [
  {
    id: 'free',
    name: 'Free',
    monthlyFee: 0,
    includedUsers: 2,
    includedShipments: 100,
    extraUserMonthlyFee: LAUNCH_EXTRA_USER_MONTHLY_FEE,
    description:
      'Evaluate Doorear with two seats and trial shipment volume—upgrade before the 10-day window ends.',
    badge: 'Trial',
    ctaLabel: 'Start Free',
    isFreePlan: true,
    trialDays: 10,
  },
  {
    id: 'launch',
    name: 'Launch',
    monthlyFee: 499,
    includedUsers: 2,
    includedShipments: 500,
    extraUserMonthlyFee: LAUNCH_EXTRA_USER_MONTHLY_FEE,
    description: 'Best for teams starting structured branch-level operations.',
    badge: 'Starter',
    ctaLabel: 'Choose Launch',
  },
  {
    id: 'growth',
    name: 'Growth',
    monthlyFee: 9999,
    includedUsers: 15,
    includedShipments: 2500,
    extraUserMonthlyFee: 399,
    description: 'Built for growing courier networks with expanding throughput.',
    badge: 'Recommended',
    highlight: true,
    ctaLabel: 'Choose Growth',
  },
  {
    id: 'scale',
    name: 'Scale',
    monthlyFee: 24999,
    includedUsers: 40,
    includedShipments: 8000,
    extraUserMonthlyFee: 299,
    description: 'For high-volume operators needing strong control and coverage.',
    badge: 'High volume',
    ctaLabel: 'Choose Scale',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyFee: 45000,
    includedUsers: 0,
    includedShipments: 0,
    extraUserMonthlyFee: 0,
    description: 'Custom limits, commercials, rollout, and governance support.',
    ctaLabel: 'Contact Sales',
    isContactSales: true,
    startingFromLabel: 'Starting ₹45,000+',
  },
]

export const SHIPMENT_PACKS: ShipmentPack[] = [
  {
    id: 'pack-500',
    label: 'Top-up pack · 500 shipments',
    shipments: 500,
    monthlyPrice: 1200,
    helperText: 'Use top-ups when monthly usage starts crossing included plan limits.',
  },
  {
    id: 'pack-2000',
    label: 'Top-up pack · 2,000 shipments',
    shipments: 2000,
    monthlyPrice: 4200,
    helperText: 'Cost-efficient top-up option for steady mid-cycle demand spikes.',
  },
  {
    id: 'pack-5000',
    label: 'Top-up pack · 5,000 shipments',
    shipments: 5000,
    monthlyPrice: 9500,
    helperText: 'Ideal for seasonal surges and predictable high-throughput windows.',
  },
]

export const SUPPORT_TIERS: SupportTier[] = [
  {
    id: 'standard',
    label: 'Standard',
    monthlyPrice: 0,
    slaText: 'Included, 48 business hours',
  },
  {
    id: 'silver',
    label: 'Silver',
    monthlyPrice: 7500,
    slaText: 'Priority queue, faster issue acknowledgment',
  },
  {
    id: 'gold',
    label: 'Gold',
    monthlyPrice: 20000,
    slaText: 'Dedicated escalation flow for critical operations',
  },
  {
    id: 'platinum',
    label: 'Platinum',
    monthlyPrice: 45000,
    slaText: 'Highest-priority handling with proactive coordination',
  },
]
