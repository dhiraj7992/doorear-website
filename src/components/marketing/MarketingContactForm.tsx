'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui'
import { trackEvent } from '@/lib/analytics'
import {
  buildFormSubmitBody,
  FORM_SUBMIT_AJAX_URL,
  isFormSubmitOk,
  type ContactFormPayload,
} from '@/lib/contact-form-config'

const API_ENDPOINT = '/api/contact'

export default function MarketingContactForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phnumber: '',
    Message: '',
  })
  const [showThanks, setShowThanks] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const [utmData, setUtmData] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    referrer: '',
    landing_page: '',
  })

  useEffect(() => {
    const isValid = Object.values(formData).every((v) => v.trim() !== '')
    setIsFormValid(isValid)
  }, [formData])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    setUtmData({
      utm_source: params.get('utm_source') ?? '',
      utm_medium: params.get('utm_medium') ?? '',
      utm_campaign: params.get('utm_campaign') ?? '',
      utm_term: params.get('utm_term') ?? '',
      utm_content: params.get('utm_content') ?? '',
      referrer: document.referrer || '',
      landing_page: window.location.href,
    })
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoader(true)
    setErrorMessage('')

    const email = formData.email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Enter a valid email address (e.g. name@company.com).')
      setLoader(false)
      return
    }

    const payload: ContactFormPayload = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phnumber: formData.phnumber,
      message: formData.Message,
      source: 'marketing_contact_page',
      UTMSource: utmData.utm_source,
      UTMMedium: utmData.utm_medium,
      UTMCampaign: utmData.utm_campaign,
      UTMTerm: utmData.utm_term,
      UTMContent: utmData.utm_content,
      Referrer: utmData.referrer,
      LandingPage: utmData.landing_page,
    }

    try {
      let sent = false
      let lastMessage = 'Something went wrong. Please try again in a moment.'

      const formBody = buildFormSubmitBody(payload, {
        source: 'marketing_contact_page',
      })
      const directRes = await fetch(FORM_SUBMIT_AJAX_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formBody),
      })
      const directData: unknown = await directRes.json().catch(() => ({}))
      if (directRes.ok && isFormSubmitOk(directData)) {
        sent = true
      } else if (
        typeof directData === 'object' &&
        directData &&
        'message' in directData &&
        typeof (directData as { message: string }).message === 'string'
      ) {
        lastMessage = (directData as { message: string }).message
      }

      if (!sent) {
        const res = await fetch(API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        })
        const data = (await res.json()) as { success?: boolean; message?: string }
        if (res.ok && data.success) {
          sent = true
        } else if (data.message) {
          lastMessage = data.message
        }
      }

      if (sent) {
        trackEvent('marketing_contact_submit', {
          source: 'contact_page_form',
          form: 'marketing_contact',
          utm_source: utmData.utm_source || 'direct',
          utm_medium: utmData.utm_medium || 'none',
          utm_campaign: utmData.utm_campaign || 'none',
        })
        setShowThanks(true)
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phnumber: '',
          Message: '',
        })
        setTimeout(() => {
          setShowThanks(false)
          router.push('/thank-you?type=demo')
        }, 1200)
      } else {
        setErrorMessage(lastMessage)
      }
    } catch {
      setErrorMessage('Network error. Check your connection and try again.')
    } finally {
      setLoader(false)
    }
  }

  const inputClass =
    'h-10 w-full rounded-lg border border-[var(--app-border)] bg-[var(--app-card)] px-4 text-base text-[var(--app-foreground)] shadow-sm transition outline-none focus:border-[var(--app-primary)] focus:ring-2 focus:ring-[var(--app-primary)]/20'

  return (
    <form onSubmit={handleSubmit} className='mx-auto max-w-2xl space-y-6'>
      <div className='grid gap-4 sm:grid-cols-2'>
        <div>
          <label htmlFor='fname' className='mb-2 block text-sm font-medium text-[var(--app-foreground)]'>
            First name
          </label>
          <input
            id='fname'
            name='firstname'
            value={formData.firstname}
            onChange={handleChange}
            placeholder='First name'
            autoComplete='given-name'
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor='lname' className='mb-2 block text-sm font-medium text-[var(--app-foreground)]'>
            Last name
          </label>
          <input
            id='lname'
            name='lastname'
            value={formData.lastname}
            onChange={handleChange}
            placeholder='Last name'
            autoComplete='family-name'
            className={inputClass}
            required
          />
        </div>
      </div>
      <div className='grid gap-4 sm:grid-cols-2'>
        <div>
          <label htmlFor='email' className='mb-2 block text-sm font-medium text-[var(--app-foreground)]'>
            Work email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='you@company.com'
            autoComplete='email'
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor='phone' className='mb-2 block text-sm font-medium text-[var(--app-foreground)]'>
            Phone
          </label>
          <input
            id='phone'
            type='tel'
            name='phnumber'
            value={formData.phnumber}
            onChange={handleChange}
            placeholder='+91 …'
            autoComplete='tel'
            className={inputClass}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor='message' className='mb-2 block text-sm font-medium text-[var(--app-foreground)]'>
          How can we help?
        </label>
        <textarea
          id='message'
          name='Message'
          value={formData.Message}
          onChange={handleChange}
          rows={5}
          placeholder='Branches, volumes, timelines for rollout…'
          className={`${inputClass} min-h-[120px] py-3`}
          required
        />
      </div>
      <Button
        type='submit'
        disabled={!isFormValid || loader}
        variant='primary'
        size='cta'>
        {loader ? 'Sending…' : 'Submit'}
      </Button>
      {showThanks ? (
        <p className='text-sm font-medium text-[var(--chart-emerald)]' role='status'>
          Thank you—we will get back to you shortly.
        </p>
      ) : null}
      {errorMessage ? (
        <p className='text-sm font-medium text-red-600' role='alert'>
          {errorMessage}
        </p>
      ) : null}
    </form>
  )
}
