'use client'

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: unknown[]) => void
  }
}

type EventParams = Record<string, string | number | boolean>

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ event: eventName, ...params })

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}
