'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LinkButton } from '@/components/ui'
import { cn } from '@/lib/cn'
import MarketingLogo from './MarketingLogo'
import { APP_LOGIN_URL, APP_SIGNUP_URL, NAV_LINKS } from './site-config'

export default function MarketingNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-[var(--app-border)]/60 bg-white/88 shadow-lg shadow-slate-900/[0.06] backdrop-blur-xl'
          : 'border-transparent bg-white/55 backdrop-blur-md'
      )}>
      <div className='marketing-container flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]'>
        <div className='flex min-w-0 items-center gap-3'>
          <MarketingLogo priority />
        </div>

        <nav className='hidden items-center gap-7 lg:flex' aria-label='Main'>
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-sm font-medium text-[var(--app-foreground)]/75 transition-colors hover:text-[var(--app-primary)]'>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-2 sm:gap-3'>
          <LinkButton
            href='/contact'
            variant='secondary'
            size='nav'
            secondaryTone='muted'
            className='hidden sm:inline-flex'>
            Book Demo
          </LinkButton>
          <LinkButton href={APP_SIGNUP_URL} variant='primary' size='nav'>
            Get Started
          </LinkButton>
          <Link
            href={APP_LOGIN_URL}
            className='hidden rounded-lg px-2 py-1.5 text-sm font-medium text-[var(--app-muted)] hover:text-[var(--app-primary)] md:inline'>
            Sign in
          </Link>
          <button
            type='button'
            className='inline-flex rounded-lg p-2 text-[var(--app-foreground)] lg:hidden'
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
          className='border-t border-[var(--app-border)] bg-white/95 backdrop-blur-xl lg:hidden'>
          <nav className='marketing-container flex flex-col gap-1 py-4' aria-label='Mobile'>
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className='rounded-lg px-3 py-2.5 text-base font-medium text-[var(--app-foreground)] hover:bg-[var(--app-surface)]'>
                {item.label}
              </Link>
            ))}
            <LinkButton
              href='/contact'
              variant='secondary'
              size='navMobile'
              secondaryTone='surface'
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
              className='py-2 text-center text-sm text-[var(--app-muted)]'>
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
