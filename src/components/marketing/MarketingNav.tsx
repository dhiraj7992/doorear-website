'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LinkButton } from '@/components/ui'
import MarketingLogo from './MarketingLogo'
import { APP_LOGIN_URL, APP_SIGNUP_URL, NAV_LINKS } from './site-config'

export default function MarketingNav() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        open
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className='sticky top-0 z-50 border-b border-[var(--app-border)] bg-[var(--app-sidebar)] text-white shadow-sm'>
      <div className='marketing-container flex h-16 items-center justify-between gap-4'>
        <div className='flex min-w-0 items-center gap-3'>
          <MarketingLogo priority />
        </div>

        <nav
          className='hidden items-center gap-6 lg:flex'
          aria-label='Main'>
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-sm font-medium text-white/80 transition-colors hover:text-white'>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-2 sm:gap-3'>
          <LinkButton
            href='/contact'
            variant='outlineOnDark'
            size='nav'>
            Book Demo
          </LinkButton>
          <LinkButton
            href={APP_SIGNUP_URL}
            variant='primary'
            size='nav'>
            Get Started
          </LinkButton>
          <LinkButton
            href={APP_LOGIN_URL}
            variant='ghostOnDark'
            size='nav'>
            Sign in
          </LinkButton>
          <button
            type='button'
            className='inline-flex rounded-lg p-2 text-white lg:hidden'
            aria-expanded={open}
            aria-controls='mobile-nav'
            onClick={() => setOpen((v) => !v)}>
            {open ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            <span className='sr-only'>Toggle menu</span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id='mobile-nav'
          ref={panelRef}
          className='border-t border-white/10 bg-[var(--app-sidebar)] lg:hidden'>
          <nav className='marketing-container flex flex-col gap-1 py-4' aria-label='Mobile'>
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className='rounded-lg px-3 py-2.5 text-base font-medium text-white/90 hover:bg-white/10'>
                {item.label}
              </Link>
            ))}
            <LinkButton
              href='/contact'
              variant='outlineOnDark'
              size='navDrawer'
              onClick={() => setOpen(false)}>
              Book Demo
            </LinkButton>
            <LinkButton
              href={APP_SIGNUP_URL}
              variant='primary'
              size='navMobile'
              onClick={() => setOpen(false)}>
              Get Started
            </LinkButton>
            <Link
              href={APP_LOGIN_URL}
              onClick={() => setOpen(false)}
              className='py-2 text-center text-sm text-white/70'>
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
