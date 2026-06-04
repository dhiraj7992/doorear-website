'use client'

import { Plus_Jakarta_Sans } from 'next/font/google'
import type { ReactNode } from 'react'

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-marketing-display',
  display: 'swap',
})

type Props = { children: ReactNode }

/** Site-wide AIGOCY-style presentation layer (brand tokens unchanged). */
export default function MarketingSiteTheme({ children }: Props) {
  return (
    <div
      className={`marketing-aigocy-theme home-aigocy-theme ${display.variable} font-[family-name:var(--font-marketing-display)]`}>
      {children}
    </div>
  )
}
