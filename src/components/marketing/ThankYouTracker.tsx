'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

export default function ThankYouTracker() {
  useEffect(() => {
    trackEvent('marketing_thank_you_view', {
      page: 'thank_you',
      conversion_stage: 'lead_confirmation',
    })
  }, [])

  return null
}
