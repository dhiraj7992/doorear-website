/** Doorear marketing site — URLs and CTAs (product app hosted separately). */
export const SITE_NAME = 'Doorear'

export const SITE_DESCRIPTION =
  'Doorear is a logistics marketplace and logistics operating system (LOS) that connects manufacturers, eCommerce companies, distributors, courier companies, transporters, and 3PL providers—bookings, hub ops, MIS, procurement, and GST-aware accounts on one unified platform for Indian supply chains.'

export const ORGANIZATION_SAME_AS = [
  'https://www.linkedin.com/in/doorear-tech-664b1a405',
] as const

export function getSiteUrl(): string {
  const fallback = 'https://doorear.com'
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL) {
    const url = process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
    // Canonical host for SEO, FormSubmit, and OG tags (www redirects to apex).
    if (/^https?:\/\/www\.doorear\.com/i.test(url)) return fallback
    return url
  }
  return fallback
}

export function getSupportUrl(): string {
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SUPPORT_URL) {
    return process.env.NEXT_PUBLIC_SUPPORT_URL
  }
  return `${getSiteUrl()}/contact`
}

export function getOgImageUrl(): string {
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_OG_IMAGE_URL) {
    return process.env.NEXT_PUBLIC_OG_IMAGE_URL
  }
  return `${getSiteUrl()}/images/insights/analytics-ops.png`
}

export const APP_LOGIN_URL =
  process.env.NEXT_PUBLIC_APP_LOGIN_URL ??
  'https://app.doorear.com/login'

export const APP_SIGNUP_URL =
  process.env.NEXT_PUBLIC_APP_SIGNUP_URL ??
  'https://app.doorear.com/signup'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Locations', href: '/locations' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const
