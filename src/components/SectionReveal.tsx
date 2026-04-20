import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
}

export default function SectionReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: SectionRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}
