import { useState, useCallback } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './hooks/useTheme'
import Loader from './components/Loader'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Cibles from './pages/Cibles'
import Services from './pages/Services'
import Tarifs from './pages/Tarifs'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
       <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/cibles" element={<Cibles />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const handleLoaderComplete = useCallback(() => setLoaded(true), [])

  return (
    <ThemeProvider>
      <AnimatePresence>
        {!loaded && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>
      {loaded && (
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      )}
    </ThemeProvider>
  )
}
