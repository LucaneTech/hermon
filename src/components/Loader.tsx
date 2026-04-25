import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'exit'>('loading')

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setPhase('reveal'), 200)
          setTimeout(() => setPhase('exit'), 800)
          setTimeout(() => onComplete(), 900)
          return 100
        }
        return p + Math.random() * 8 + 2
      })
    }, 60)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#0a0a0a' }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(75,0,130,0.15) 0%, transparent 70%)',
            }}
          />

          {/* Logo container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex flex-col items-center"
          >
            {/* Shield icon — SVG logo placeholder */}
            <motion.div
              animate={phase === 'reveal' ? { scale: [1, 1.08, 1], filter: ['drop-shadow(0 0 0px #C5A059)', 'drop-shadow(0 0 30px #C5A059)', 'drop-shadow(0 0 10px #C5A059)'] } : {}}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <svg width="80" height="90" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 2L4 16V44C4 63 20 79 40 88C60 79 76 63 76 44V16L40 2Z" fill="url(#shield-gradient)" opacity="0.9"/>
                <path d="M40 10L12 22V44C12 59 24 72 40 80C56 72 68 59 68 44V22L40 10Z" fill="url(#shield-inner)" opacity="0.5"/>
                <path d="M28 42L36 50L52 34" stroke="#C5A059" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="shield-gradient" x1="4" y1="2" x2="76" y2="88" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#4B0082"/>
                    <stop offset="50%" stopColor="#6B21A8"/>
                    <stop offset="100%" stopColor="#C5A059"/>
                  </linearGradient>
                  <linearGradient id="shield-inner" x1="12" y1="10" x2="68" y2="80" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#C5A059" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#4B0082" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <h1
                className="font-heading text-2xl tracking-[0.5em] mb-2"
                style={{ color: '#C5A059', fontWeight: 300 }}
              >
                HERMON EXIMIA
              </h1>
              <p
                className="font-body text-xs tracking-[0.3em] uppercase"
                style={{ color: 'rgba(197, 160, 89, 0.5)' }}
              >
                Conciergerie Multi-Domaine
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="mt-12 w-48 relative">
              <div
                className="w-full h-px"
                style={{ background: 'rgba(197, 160, 89, 0.15)' }}
              />
              <motion.div
                className="absolute top-0 left-0 h-px"
                style={{ background: 'linear-gradient(90deg, #4B0082, #C5A059)' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
              <div className="mt-4 flex justify-between">
                <span
                  className="font-heading text-xs"
                  style={{ color: 'rgba(197, 160, 89, 0.4)', letterSpacing: '0.2em' }}
                >
                  Initialisation
                </span>
                <span
                  className="font-heading text-xs"
                  style={{ color: 'rgba(197, 160, 89, 0.6)' }}
                >
                  {Math.min(Math.round(progress), 100)}%
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bottom tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 font-display text-sm italic"
            style={{ color: '#C5A059', letterSpacing: '0.15em' }}
          >
            « L'élévation exceptionnelle de la qualité de vie au travail »
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
