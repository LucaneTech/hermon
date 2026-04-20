import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const variants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: 'easeIn' } },
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      className="page-wrapper"
    >
      {children}
    </motion.div>
  )
}
