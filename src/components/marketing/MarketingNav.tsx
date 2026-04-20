'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
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
          <Link
            href='/contact'
            className='hidden rounded-xl border border-white/20 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:inline-flex'>
            Book Demo
          </Link>
          <Link
            href={APP_SIGNUP_URL}
            className='inline-flex rounded-xl bg-[var(--app-primary)] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:px-4'>
            Get Started
          </Link>
          <Link
            href={APP_LOGIN_URL}
            className='hidden text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline md:inline'>
            Sign in
          </Link>
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
            <Link
              href='/contact'
              onClick={() => setOpen(false)}
              className='mt-2 rounded-xl border border-white/20 px-3 py-2.5 text-center text-sm font-medium'>
              Book Demo
            </Link>
            <Link
              href={APP_SIGNUP_URL}
              onClick={() => setOpen(false)}
              className='rounded-xl bg-[var(--app-primary)] px-3 py-2.5 text-center text-sm font-semibold text-white'>
              Get Started
            </Link>
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
