'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 18,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: reduceMotion ? 0 : delay }}>
      {children}
    </motion.div>
  )
}
