export type ChannelMetrics = {
  spend: number
  clicks: number
  leads: number
  qualifiedLeads: number
}

export type MarketingDashboardData = {
  totalBudget: number
  google: ChannelMetrics
  linkedin: ChannelMetrics
  updatedAt: string
}

export const DEFAULT_MARKETING_DASHBOARD_DATA: MarketingDashboardData = {
  totalBudget: 50,
  google: {
    spend: 40,
    clicks: 35,
    leads: 3,
    qualifiedLeads: 2,
  },
  linkedin: {
    spend: 10,
    clicks: 10,
    leads: 1,
    qualifiedLeads: 0,
  },
  updatedAt: new Date().toISOString(),
}
