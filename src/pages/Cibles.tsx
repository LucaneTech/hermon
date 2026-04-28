import { motion } from 'framer-motion'
import { ArrowRight, Crown, Briefcase, TrendingUp } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import { useTheme } from '../hooks/useTheme'

const icons = {
  strategique: Crown,
  operationnelle: Briefcase,
  talent: TrendingUp,
}

const accents = {
  strategique: {
    accent: 'rgba(75,0,130,0.3)',
    accentBorder: 'rgba(75,0,130,0.5)',
  },
  operationnelle: {
    accent: 'rgba(197,160,89,0.15)',
    accentBorder: 'rgba(197,160,89,0.4)',
  },
  talent: {
    accent: 'rgba(22,101,52,0.2)',
    accentBorder: 'rgba(34,197,94,0.3)',
  },
}

const images = {
  strategique: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
  operationnelle: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200',
  talent: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1200',
}

export default function Cibles() {
  const { isDark } = useTheme()
  const { t } = useTranslation('cibles')
  
  const targets = t('targets', { returnObjects: true }) as Array<{
    id: string
    num: string
    title: string
    subtitle: string
    reality: string
    offer: string
    gain: string
    services: string[]
  }>

  return (
    <PageTransition>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-28 md:pt-40 md:pb-24 px-6 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://imgs.search.brave.com/w9tkb4hkcu3lJX4vZbHjkvhXIPzSSEmqgZBeTEpEgM4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzQwLzA2LzU2/LzM2MF9GXzI0MDA2/NTYwNl9TZFVDeFBH/MlBMNjBPaW1LOHJ3/RDQwZ0ZoMm1GSEtO/YS5qcGc"
            alt="Architecture d'excellence"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay plus sombre pour la lisibilité */}
        <div className="absolute inset-0 z-1"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse at 30% 50%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 60%), radial-gradient(ellipse at 70% 50%, rgba(197,160,89,0.15) 0%, transparent 80%)'
              : 'radial-gradient(ellipse at 30% 50%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 60%), radial-gradient(ellipse at 70% 50%, rgba(197,160,89,0.1) 0%, transparent 80%)',
          }}
        />
        <div className="hero-glow w-[600px] h-[600px] top-4 left-2 bg-black opacity-40" />
        <div className="hero-glow w-[600px] h-[600px] top-[50%] left-4 bg-violet-950/20 opacity-80" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-label mb-6">
            {t('hero.label')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="section-title mb-2" 
            style={{ maxWidth: '750px' }}
          >
            {t('hero.title1')}<br /><em>{t('hero.title2', { interpolation: { escapeValue: false } })}</em><br />{t('hero.title3')}
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7 }} className="divider-gold" />
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="font-body text-lg leading-relaxed mt-8 mb-4"
            style={{ color: 'var(--text-secondary)', maxWidth: '560px' }}
          >
            {t('hero.description')}
          </motion.p>

          {/* Bouton d'action */}
          <NavLink to="/tarifs">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="btn-gold inline-flex items-center gap-2 px-8 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className='inline-flex items-center gap-1'>
                {t('hero.cta')}
                <ArrowRight className='w-5 h-5' />
              </span>
            </motion.button>
          </NavLink>
        </div>
      </section>

      {/* ═══ TARGETS ═══ */}
      {targets.map((target, i) => {
        const IconComponent = icons[target.id as keyof typeof icons]
        const accent = accents[target.id as keyof typeof accents]
        
        return (
          <section
            key={target.id}
            className="py-24 px-6"
            style={{ background: i % 2 === 0 ? (isDark ? '#0a0a0a' : '#f8f6f2') : (isDark ? '#060606' : '#f0ede8') }}
          >
            <div className="max-w-7xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image side */}
                <SectionReveal direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className="relative">
                    <div
                      className="absolute -top-4 -left-4 w-full h-full"
                      style={{ border: `1px solid ${accent.accentBorder}`, zIndex: 0 }}
                    />
                    <div
                      className="relative overflow-hidden"
                      style={{ aspectRatio: '4/3', zIndex: 1 }}
                    >
                      <img
                        src={images[target.id as keyof typeof images]}
                        alt={target.title}
                        className="object-cover max-h-7xl h-full w-full"
                        style={{ filter: 'brightness(0.8) saturate(0.9)' }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(135deg, ${accent.accent} 0%, transparent 60%)` }}
                      />
                      <div className="absolute top-6 left-6">
                        <span className="font-heading text-5xl text-white font-[200]">
                          {target.num}
                        </span>
                      </div>
                    </div>
                  </div>
                </SectionReveal>

                {/* Content side */}
                <SectionReveal direction={i % 2 === 0 ? 'right' : 'left'} delay={0.15}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-sm"
                      style={{ border: `1px solid ${accent.accentBorder}`, background: accent.accent }}
                    >
                      <IconComponent size={18} style={{ color: '#C5A059' }} />
                    </div>
                    <span className="section-label">{target.subtitle}</span>
                  </div>

                  <h2 className="section-title mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                    {target.title}
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div>
                      <p className="font-heading text-xs tracking-[0.25em] uppercase mb-2" style={{ color: 'rgba(160,152,144,0.6)' }}>
                        {t('sections.reality')}
                      </p>
                      <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {target.reality}
                      </p>
                    </div>
                    <div className="w-full h-px" style={{ background: 'rgba(197,160,89,0.1)' }} />
                    <div>
                      <p className="font-heading text-xs tracking-[0.25em] uppercase mb-2" style={{ color: '#C5A059' }}>
                        {t('sections.ourOffer')}
                      </p>
                      <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {target.offer}
                      </p>
                    </div>
                    <div className="w-full h-px" style={{ background: 'rgba(197,160,89,0.1)' }} />
                    <div>
                      <p className="font-heading text-xs tracking-[0.25em] uppercase mb-2" style={{ color: '#22c55e' }}>
                        {t('sections.yourGain')}
                      </p>
                      <p className="font-body text-sm leading-relaxed font-medium" style={{ color: 'var(--text-primary)' }}>
                        {target.gain}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {target.services.map((s: string) => (
                      <span
                        key={s}
                        className="font-heading text-xs tracking-widest uppercase px-3 py-1"
                        style={{
                          border: `1px solid ${accent.accentBorder}`,
                          color: 'var(--text-secondary)',
                          fontWeight: 300,
                          fontSize: '0.6rem',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <NavLink to="/tarifs">
                    <motion.button whileHover={{ scale: 1.02 }} className="btn-gold text-xs">
                      Voir les Tarifs
                      <ArrowRight size={13} />
                    </motion.button>
                  </NavLink>
                </SectionReveal>
              </div>
            </div>
          </section>
        )
      })}

      {/* ═══ COMPARISON TABLE ═══ */}
      <section className="py-24 px-6" style={{ background: isDark ? '#080808' : '#f5f2ee' }}>
        <div className="max-w-5xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <p className="section-label mb-4">{t('comparison.title')}</p>
            <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('comparison.subtitle') }} />
          </SectionReveal>

          <SectionReveal>
            <div className="overflow-x-auto">
              <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead>
                  <tr>
                    <th className="py-4 px-6 text-left font-heading text-xs tracking-widest uppercase" style={{ color: 'var(--text-secondary)', fontWeight: 300, borderBottom: '1px solid rgba(197,160,89,0.15)' }}>
                      {t('comparison.headers.service')}
                    </th>
                    <th className="py-4 px-6 text-center font-heading text-xs tracking-widest uppercase" style={{ color: '#C5A059', fontWeight: 300, borderBottom: '1px solid rgba(197,160,89,0.15)' }}>
                      {t('comparison.headers.strategic')}
                    </th>
                    <th className="py-4 px-6 text-center font-heading text-xs tracking-widest uppercase" style={{ color: '#C5A059', fontWeight: 300, borderBottom: '1px solid rgba(197,160,89,0.15)' }}>
                      {t('comparison.headers.operational')}
                    </th>
                    <th className="py-4 px-6 text-center font-heading text-xs tracking-widest uppercase" style={{ color: '#C5A059', fontWeight: 300, borderBottom: '1px solid rgba(197,160,89,0.15)' }}>
                      {t('comparison.headers.talent')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { key: 'availability', values: ['availability'] },
                    { key: 'interlocutor', values: ['interlocutor'] },
                    { key: 'privateAgenda', values: ['privateAgenda'] },
                    { key: 'physicalSupport', values: ['physicalSupport'] },
                    { key: 'adminSupport', values: ['adminSupport'] },
                    { key: 'emergency', values: ['emergency'] },
                  ].map((row, i) => (
                    <tr
                      key={row.key}
                      className="group transition-colors duration-200"
                      style={{ background: i % 2 === 0 ? 'transparent' : isDark ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.02)' }}
                    >
                      <td className="py-4 px-6 font-body text-sm" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid rgba(197,160,89,0.05)' }}>
                        {t(`comparison.rows.${row.key}`)}
                      </td>
                      <td className="py-4 px-6 text-center font-body text-sm" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid rgba(197,160,89,0.05)' }}>
                        {t(`comparison.values.${row.values[0]}.strategic`)}
                      </td>
                      <td className="py-4 px-6 text-center font-body text-sm" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid rgba(197,160,89,0.05)' }}>
                        {t(`comparison.values.${row.values[0]}.operational`)}
                      </td>
                      <td className="py-4 px-6 text-center font-body text-sm" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid rgba(197,160,89,0.05)' }}>
                        {t(`comparison.values.${row.values[0]}.talent`)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionReveal>

          <SectionReveal className="text-center mt-12">
            <NavLink to="/tarifs">
              <motion.button whileHover={{ scale: 1.02 }} className="btn-gold">
                {t('comparison.cta')}
                <ArrowRight size={14} />
              </motion.button>
            </NavLink>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  )
}