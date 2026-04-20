'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function MotionInView({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  /** Stagger delay when multiple blocks animate in sequence */
  delay?: number
}) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: reduceMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}
