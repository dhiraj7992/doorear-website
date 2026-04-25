import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
import {
  DEFAULT_MARKETING_DASHBOARD_DATA,
  type MarketingDashboardData,
} from '@/lib/marketing-dashboard'

const dataFilePath = path.join(
  process.cwd(),
  'src',
  'data',
  'marketing-dashboard.json'
)

async function readDashboardData(): Promise<MarketingDashboardData> {
  try {
    const content = await fs.readFile(dataFilePath, 'utf-8')
    return JSON.parse(content) as MarketingDashboardData
  } catch {
    return DEFAULT_MARKETING_DASHBOARD_DATA
  }
}

function normalizeNumber(input: unknown): number {
  const n = Number(input)
  return Number.isFinite(n) && n >= 0 ? n : 0
}

function sanitizePayload(payload: Partial<MarketingDashboardData>): MarketingDashboardData {
  const base = DEFAULT_MARKETING_DASHBOARD_DATA
  return {
    totalBudget: normalizeNumber(payload.totalBudget ?? base.totalBudget),
    google: {
      spend: normalizeNumber(payload.google?.spend ?? base.google.spend),
      clicks: normalizeNumber(payload.google?.clicks ?? base.google.clicks),
      leads: normalizeNumber(payload.google?.leads ?? base.google.leads),
      qualifiedLeads: normalizeNumber(
        payload.google?.qualifiedLeads ?? base.google.qualifiedLeads
      ),
    },
    linkedin: {
      spend: normalizeNumber(payload.linkedin?.spend ?? base.linkedin.spend),
      clicks: normalizeNumber(payload.linkedin?.clicks ?? base.linkedin.clicks),
      leads: normalizeNumber(payload.linkedin?.leads ?? base.linkedin.leads),
      qualifiedLeads: normalizeNumber(
        payload.linkedin?.qualifiedLeads ?? base.linkedin.qualifiedLeads
      ),
    },
    updatedAt: new Date().toISOString(),
  }
}

export async function GET() {
  const data = await readDashboardData()
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<MarketingDashboardData>
    const sanitized = sanitizePayload(payload)
    await fs.writeFile(dataFilePath, JSON.stringify(sanitized, null, 2), 'utf-8')
    return NextResponse.json(sanitized)
  } catch {
    return NextResponse.json(
      { error: 'Unable to save marketing dashboard data.' },
      { status: 400 }
    )
  }
}
