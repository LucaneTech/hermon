import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/a-propos', label: 'À Propos' },
  { path: '/cibles', label: 'Cibles' },
  { path: '/services', label: 'Services' },
  { path: '/tarifs', label: 'Tarifs' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme, isDark } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? isDark ? 'rgba(10,10,10,0.95)' : 'rgba(248,246,242,0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(197,160,89,0.15)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <motion.img
                  src="./images/logo.png"
                  alt="Logo Hermon Eximia"
                  className="w-24 sm:w-28 md:w-56 h-auto object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `animated-link font-heading text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                      isActive
                        ? 'nav-link-active'
                        : isDark
                        ? 'text-gray-400 hover:text-gold'
                        : 'text-gray-600 hover:text-gold'
                    }`
                  }
                  style={{ fontWeight: 300 }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-4">

              {/* Theme toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 transition-colors duration-300"
                style={{ color: isDark ? 'rgba(197,160,89,0.6)' : 'rgba(75,0,130,0.6)' }}
                aria-label="Basculer le thème"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </motion.button>

              {/* CTA Desktop */}
              <NavLink to="/contact" className="hidden lg:block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-gold text-xs"
                  style={{ padding: '10px 24px' }}
                >
                  Diagnostic Offert
                </motion.button>
              </NavLink>

              {/* Hamburger */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="lg:hidden p-2"
                style={{ color: '#C5A059' }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ═══ MOBILE MENU — Backdrop blur + slide from left ═══ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop — floute le contenu derrière, clic = fermer */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-30"
              style={{
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                background: isDark
                  ? 'rgba(0, 0, 0, 0.55)'
                  : 'rgba(248, 246, 242, 0.45)',
              }}
            />

            {/* Drawer latéral — glisse de gauche à droite */}
            <motion.div
              key="drawer"
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 left-0 bottom-0 z-50 flex flex-col"
              style={{
                width: 'min(320px, 85vw)',
                background: isDark
                  ? 'rgba(8, 8, 8, 0.97)'
                  : 'rgba(252, 250, 247, 0.97)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                borderRight: '1px solid rgba(197, 160, 89, 0.18)',
                boxShadow: '8px 0 40px rgba(0,0,0,0.4)',
              }}
            >
              {/* ── Header du drawer ── */}
              <div
                className="flex items-center justify-between px-8 py-2"
                style={{ borderBottom: '1px solid rgba(197,160,89,0.1)' }}
              >
                  <motion.img
                  src="./images/logo.png"
                  alt="Logo Hermon Eximia"
                  className="w-24 sm:w-28 md:w-56 h-auto object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.button
                  whileTap={{ scale: 0.88 }}
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center"
                  style={{
                    border: '1px solid rgba(197,160,89,0.25)',
                    color: '#C5A059',
                  }}
                >
                  <X size={16} />
                </motion.button>
              </div>

              {/* ── Liens de navigation ── */}
              <nav className="flex-1 flex flex-col  px-8 gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.4, ease: 'easeOut' }}
                  >
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center gap-4 py-4 transition-all duration-300"
                    >
                      {({ isActive }) => (
                        <>
                          {/* Barre accent animée */}
                          <motion.div
                            className="flex-shrink-0 h-px"
                            animate={{ width: isActive ? 32 : 16 }}
                            transition={{ duration: 0.3 }}
                            style={{
                              background: isActive
                                ? '#C5A059'
                                : 'rgba(197,160,89,0.3)',
                            }}
                          />
                          <span
                            className="font-heading text-xs tracking-[0.3em] uppercase transition-colors duration-300"
                            style={{
                              fontWeight: 300,
                              color: isActive
                                ? '#C5A059'
                                : isDark
                                ? 'rgba(240,237,232,0.55)'
                                : 'rgba(30,30,30,0.6)',
                            }}
                          >
                            {item.label}
                          </span>
                          {isActive && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="ml-auto w-1 h-1 rounded-none"
                              style={{ background: '#C5A059' }}
                            />
                          )}
                        </>
                      )}
                    </NavLink>

                    {/* Séparateur ultra-fin */}
                    {i < navItems.length - 1 && (
                      <div
                        className="ml-12"
                        style={{ height: '1px', background: 'rgba(197,160,89,0.07)' }}
                      />
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* ── Footer du drawer ── */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.4 }}
                className="px-8 pb-10 pt-6"
                style={{ borderTop: '1px solid rgba(197,160,89,0.1)' }}
              >
                {/* CTA principal */}
                <NavLink
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-gold w-full justify-center text-xs"
                  style={{ padding: '14px 24px' }}
                >
                  Diagnostic Gratuit (2h)
                </NavLink>

                
              </motion.div>

              {/* Accent violet en bas du drawer */}
              <div
                className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(75,0,130,0.08), transparent)',
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}