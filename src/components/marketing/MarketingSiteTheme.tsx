'use client'

import { DM_Sans, Syne } from 'next/font/google'
import type { ReactNode } from 'react'

const display = Syne({
  subsets: ['latin'],
  variable: '--font-marketing-display',
  display: 'swap',
  weight: ['600', '700', '800'],
})

const body = DM_Sans({
  subsets: ['latin'],
  variable: '--font-marketing-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

type Props = { children: ReactNode }

/** Route Ink presentation layer — Doorear marketing brand system. */
export default function MarketingSiteTheme({ children }: Props) {
  return (
    <div
      className={`marketing-doorear-theme home-doorear-theme home-aigocy-theme marketing-aigocy-theme ${display.variable} ${body.variable} font-[family-name:var(--font-marketing-body)]`}>
      {children}
    </div>
  )
}
