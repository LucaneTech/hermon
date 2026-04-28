import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import { useTheme } from '../hooks/useTheme'
import { useTranslation } from 'react-i18next'
import { usePillars } from '../hooks/usePillars'

// Suppression des lignes incorrectes:
// const { i18n } = useTranslation()
// const { getPillars } = usePillars()

function ServiceAccordion({ service }: { service: any }) {
  const [open, setOpen] = useState(false)
  const { isDark } = useTheme()

  return (
    <div
      className="transition-all duration-300"
      style={{ border: '1px solid rgba(197,160,89,0.12)', background: isDark ? 'rgba(26,26,26,0.4)' : 'rgba(240,237,232,0.6)' }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-heading text-sm tracking-widest uppercase group-hover:text-gold transition-colors duration-300" style={{ color: 'var(--text-primary)', fontWeight: 300 }}>
          {service.title}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={16} style={{ color: '#C5A059', flexShrink: 0 }} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-6">
              <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{service.desc}</p>
              <ul className="space-y-2 mb-6">
                {service.items.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1 h-1 rounded-none flex-shrink-0" style={{ background: '#C5A059' }} />
                    <span className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-start gap-2 p-4" style={{ background: 'rgba(75,0,130,0.1)', border: '1px solid rgba(75,0,130,0.2)' }}>
                <span className="font-heading text-xs tracking-widest uppercase flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }}>Votre gain :</span>
                <span className="font-body text-sm italic" style={{ color: 'var(--text-primary)' }}>{service.gain}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Services() {
  const { isDark } = useTheme()
  const [activePillar, setActivePillar] = useState(0)
  const { t } = useTranslation('services')
  const { getPillars } = usePillars()
  const pillars = getPillars()
  
  return (
    <PageTransition>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-28 md:pt-40 pb-10 md:pb-24 px-6 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <img
            src="images/services.jpg"
            alt="Architecture d'excellence - piliers de la réussite"
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
            {t('services.hero.label')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="section-title mb-8" style={{ maxWidth: '700px' }}
          >
            {t('services.hero.title1')} <em>{t('services.hero.title2')}</em><br /> {t('services.hero.title3')}
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7 }} className="divider-gold mb-8" />

          {/* Bouton d'action */}
          <NavLink to="/tarifs">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="btn-gold inline-flex items-center gap-2 px-8 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"

            >
              <span className='inline-flex items-center gap-1'>
                {t('services.hero.cta')}
                <ArrowRight className='w-5 h-5' />
              </span>
            </motion.button>
          </NavLink>
        </div>
      </section>

      {/* ═══ PILLAR SELECTOR ═══ */}
      <section className="px-6 pb-4 sticky top-20 z-30" style={{ background: isDark ? 'rgba(10,10,10,0.95)' : 'rgba(248,246,242,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(197,160,89,0.1)' }}>
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-0 min-w-max">
            {pillars.map((p, i) => (
              <button
                key={p.num}
                onClick={() => setActivePillar(i)}
                className="flex items-center gap-3 px-6 py-5 transition-all duration-300 border-b-2"
                style={{
                  borderColor: activePillar === i ? '#C5A059' : 'transparent',
                  color: activePillar === i ? '#C5A059' : 'var(--text-secondary)',
                }}
              >
                <span className="font-heading  text-sm" style={{ fontWeight: 200 }}>{p.num}</span>
                <span className="font-heading text-xs tracking-widest uppercase whitespace-nowrap" style={{ fontWeight: 300, fontSize: '0.65rem' }}>
                  {p.title.split(' ').slice(0, 3).join(' ')}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ACTIVE PILLAR ═══ */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activePillar}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="py-20 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Pillar header */}
              <div className="lg:col-span-1">
                <div
                  className="sticky top-40 p-8"
                  style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(197,160,89,0.15)' }}
                >
                  <span className="font-heading text-gold-dark font-[200] text-6xl block mb-4" >
                    {pillars[activePillar].num}
                  </span>
                  <h2 className="font-heading text-lg tracking-widest uppercase mb-4" style={{ color: 'var(--text-primary)', fontWeight: 300 }}>
                    {pillars[activePillar].title}
                  </h2>
                  <p className="font-display text-base italic mb-8" style={{ color: '#C5A059' }}>
                    {pillars[activePillar].tag}
                  </p>
                  <div className="w-full h-px" style={{ background: 'rgba(197,160,89,0.2)' }} />
                  <p className="font-body text-xs mt-6" style={{ color: 'var(--text-secondary)' }}>
                    {pillars[activePillar].services.length} prestations détaillées
                  </p>
                </div>
              </div>

              {/* Services list */}
              <div className="lg:col-span-2 space-y-3">
                {pillars[activePillar].services.map((service, idx) => (
                  <ServiceAccordion key={idx} service={service} />
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* ═══ ALL PILLARS OVERVIEW ═══ */}
      <section className="py-24 px-6" style={{ background: isDark ? '#060606' : '#f0ede8' }}>
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <p className="section-label mb-4">{t('services.overview.label')}</p>
            <h2 className="section-title"> {t('services.overview.title1')} <em>{t('services.overview.title2')}</em>,<br />{t('services.overview.title3')}</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {pillars.map((p, i) => (
              <SectionReveal key={p.num} delay={i * 0.1}>
                <button
                  className="pillar-card w-full text-left h-full"
                  onClick={() => { setActivePillar(i); window.scrollTo({ top: 300, behavior: 'smooth' }) }}
                >
                  <span className="font-heading text-gold-dark font-[200] text-4xl block mb-4" >{p.num}</span>
                  <h3 className="font-heading text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--text-primary)', fontWeight: 300 }}>{p.title}</h3>
                  <p className="font-display text-xs italic" style={{ color: 'rgba(197,160,89,0.5)' }}>{p.tag}</p>
                </button>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal className="text-center mt-12">
            <NavLink to="/contact">
              <motion.button whileHover={{ scale: 1.02 }} className="btn-gold">
                {t('services.overview.cta')}
                <ArrowRight size={14} />
              </motion.button>
            </NavLink>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  )
}