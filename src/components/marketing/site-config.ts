/** Doorear marketing site — URLs and CTAs (product app hosted separately). */
export const SITE_NAME = 'Doorear'

export const SITE_DESCRIPTION =
  'Doorear is courier management software and a logistics operations platform for Indian operators—book and track shipments, run hubs and last-mile delivery, MIS, procurement, and GST-aware accounts in one multi-branch workspace.'

export function getSiteUrl(): string {
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  }
  return 'https://doorear.com'
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
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const
