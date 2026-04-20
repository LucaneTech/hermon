import { ReactNode } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation()

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-primary)' }}>
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      <Navbar />
      
      <AnimatePresence mode="wait" initial={false}>
        <main key={location.pathname}>
          {children}
        </main>
      </AnimatePresence>
      
      <Footer />
    </div>
  )
}
