import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { useTranslation } from 'react-i18next'

const links = [
  { path: '/', key: 'nav.home' },
  { path: '/a-propos', key: 'nav.about' },
  { path: '/cibles', key: 'nav.cibles' },
  { path: '/services', key: 'nav.services' },
  { path: '/tarifs', key: 'nav.tarifs' },
  { path: '/contact', key: 'nav.contact' },
]

export default function Footer() {
  const { isDark } = useTheme()
  const { t } = useTranslation('common')
  const pillars = t('pillars', { returnObjects: true }) as string[]

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
          <p className="section-label mb-4">{t('footer.bandLabel')}</p>
          <h2
            className="font-display mb-8"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--text-primary)' }}
          >
            {t('footer.bandTitle')}<br />
            <em style={{ color: '#C5A059' }}>{t('footer.brandTagline')}</em>
          </h2>

          <NavLink to="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gold"
            >
              {t('footer.bandButton')}
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
              alt={t('footer.brandTagline')}
              className="h-32 md:h-40 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />

            <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', maxWidth: '260px' }}>
              {t('footer.brandTagline')}.
            </p>
            <div className="mt-6 w-12 h-px" style={{ background: '#C5A059' }} />
            <p className="mt-4 font-display text-sm italic" style={{ color: 'rgba(197,160,89,0.5)' }}>
              {t('footer.discreteExcellence')}
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
                    {t(link.key)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="section-label mb-6">{t('footer.pillarsTitle', 'Nos 5 Piliers')}</h4>
            <ul className="space-y-3">
              {pillars.map((p: string) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#C5A059' }} />
                  <span className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="section-label mb-6">{t('footer.contactTitle')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="mt-1 flex-shrink-0" style={{ color: '#C5A059' }} />
                <div className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {t('contact.phone')}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-1 flex-shrink-0" style={{ color: '#C5A059' }} />
                <a href={`mailto:${t('contact.email')}`} className="font-body text-sm animated-link" style={{ color: 'var(--text-secondary)' }}>
                  {t('contact.email')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 flex-shrink-0" style={{ color: '#C5A059' }} />
                <span className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {t('contact.location')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(197,160,89,0.1)' }}
        >
          <p className="font-body text-xs text-center" style={{ color: 'rgba(160,152,144,0.5)' }}>
            {t('footer.copyright')}
          </p>
        
        </div>
      </div>
    </footer>
  )
}
