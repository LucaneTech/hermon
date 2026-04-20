import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const links = [
  { path: '/', label: 'Accueil' },
  { path: '/a-propos', label: 'À Propos' },
  { path: '/cibles', label: 'Nos Cibles' },
  { path: '/services', label: 'Services' },
  { path: '/tarifs', label: 'Tarifs' },
  { path: '/contact', label: 'Contact' },
]

const pillars = [
  'Excellence Événementielle',
  'Mobilité Intelligente',
  'Fiabilité Totale',
  'Réactivité Absolue',
  'Sur-Mesure Personnel',
]

export default function Footer() {
  const { isDark } = useTheme()

  return (
    <footer
      style={{
        background: isDark ? '#050505' : '#f0ede8',
        borderTop: '1px solid rgba(197,160,89,0.15)',
      }}
    >
      {/* CTA Band */}
      <div
        className="py-16 px-6"
        style={{
          background: 'linear-gradient(135deg, rgba(75,0,130,0.2) 0%, rgba(197,160,89,0.05) 100%)',
          borderBottom: '1px solid rgba(197,160,89,0.1)',
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-label mb-4">Prêt à franchir le seuil de l'excellence ?</p>
          <h2
            className="font-display mb-8"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--text-primary)' }}
          >
            Libérez votre temps.<br />
            <em style={{ color: '#C5A059' }}>Régnez sur vos priorités.</em>
          </h2>
          <NavLink to="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gold"
            >
              Initier la Conversation
              <ArrowUpRight size={14} />
            </motion.button>
          </NavLink>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">


            <motion.img
              src="./images/logo.png"
              alt="Logo Hermon Eximia"
              className="w-24 sm:w-28 md:w-56 h-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />


            <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', maxWidth: '260px' }}>
              L'art de libérer le temps des leaders et collaborateurs d'exception, en République du Congo et au-delà.
            </p>
            <div className="mt-6 w-12 h-px" style={{ background: '#C5A059' }} />
            <p className="mt-4 font-display text-xs italic" style={{ color: 'rgba(197,160,89,0.5)' }}>
              « Excellence Discrète »
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="section-label mb-6">Navigation</h4>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="font-body text-sm animated-link transition-colors duration-300"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="section-label mb-6">Nos 5 Piliers</h4>
            <ul className="space-y-3">
              {pillars.map(p => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#C5A059' }} />
                  <span className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="section-label mb-6">Contact Direct</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="mt-1 flex-shrink-0" style={{ color: '#C5A059' }} />
                <div className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                  +242 06 186 36 05<br />+242 05 386 24 16
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-1 flex-shrink-0" style={{ color: '#C5A059' }} />
                <a href="mailto:contact@hermoneximia.com" className="font-body text-sm animated-link" style={{ color: 'var(--text-secondary)' }}>
                  contact@hermoneximia.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 flex-shrink-0" style={{ color: '#C5A059' }} />
                <span className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Pointe-Noire<br />République du Congo
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(197,160,89,0.1)' }}
        >
          <p className="font-body text-xs" style={{ color: 'rgba(160,152,144,0.5)' }}>
            © 2026 HERMON EXIMIA. Tous droits réservés. Conformité OHADA & Droit Congolais.
          </p>
          <p className="font-body text-xs" style={{ color: 'rgba(160,152,144,0.4)' }}>
            Responsable : FERNANDES PETERS KETSIA MANUELLA
          </p>
        </div>
      </div>
    </footer>
  )
}
