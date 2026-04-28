import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, Star, ChevronDown } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import { useTheme } from '../hooks/useTheme'
import { image } from 'framer-motion/client'
import { useTranslation } from 'react-i18next'


// const stats = [
//   { number: '24/7', label: 'Disponibilité permanente' },
//   { number: '5', label: 'Piliers de services' },
//   { number: '3', label: 'Offres sur-mesure' },
//   { number: '1h', label: "Délai d'intervention d'urgence" },
// ]



export default function Home() {
  const { isDark } = useTheme()
  const { t } = useTranslation('home')


  const pillars = [
  {
    num: t('home.pillars.0.num'),
    title: t('home.pillars.0.title'),
    tag: t('home.pillars.0.tag'),
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800', // table dressée, bouquet, verres
  },
  {
    num: t('home.pillars.1.num'),
    title: t('home.pillars.1.title'),
    tag: t('home.pillars.1.tag'),
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800', // voiture premium avec chauffeur côté aéroport
  },
  {
    num: t('home.pillars.2.num'),

    title: t('home.pillars.2.title'),
    tag: t('home.pillars.2.tag'),
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=800', // poignée de main confiante, style corporate
  },
  {
    num: t('home.pillars.3.num'),
    title: t('home.pillars.3.title'),
    tag: t('home.pillars.3.tag'),
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800', // planning / calendrier / action rapide
  },
  {
    num: t('home.pillars.4.num'),
    title: t('home.pillars.4.title'),
    tag: t('home.pillars.4.tag'),
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800', // portrait élégant, attention personnalisée
  },
  
]



const values = [
  {
    icon: Shield,
    label: t('home.values.0.label'),
    desc: t('home.values.0.desc'),
  },
  {
    icon: Clock,
    label: t('home.values.1.label'),

    desc: t('home.values.1.desc'),
  },
  {
    icon: Star,
    label: t('home.values.2.label'),
    desc: t('home.values.2.desc'),
  },
]

  return (
    <PageTransition>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden md:pt-32 md:pb-12">

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(10,10,10,0.65), rgba(10,10,10,0.85)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
            animate={{
              scale: [1, 1.05, 1],
              x: [0, -10, 10, -5, 5, 0],
              y: [0, -5, 5, -3, 3, 0],
            }}
            transition={{
              scale: {
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              },
              x: {
                duration: 25,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              },
              y: {
                duration: 30,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          />
        </motion.div>

        {/* Animation du gradient superposé */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.3) 100%)',
          }}
        />

        {/* ═══ 2 BULLES - VISIBILITÉ MOYENNE ═══ */}

        {/* Bulle 1 - Violette, mouvement lent et discret */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(138,43,226,0.25), rgba(75,0,130,0.1))',
            border: '1px solid rgba(197,160,89,0.25)',
            backdropFilter: 'blur(4px)',
            top: '20%',
            left: '10%',
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, -15, -10, 0],
            scale: [1, 1.08, 0.96, 1.05, 1],
            opacity: [0.3, 0.5, 0.25, 0.45, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Bulle 2 - Dorée, mouvement un peu plus vif mais discret */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '70px',
            height: '70px',
            background: 'radial-gradient(circle, rgba(197,160,89,0.3), rgba(197,160,89,0.08))',
            border: '1px solid rgba(197,160,89,0.3)',
            backdropFilter: 'blur(3px)',
            bottom: '25%',
            right: '12%',
          }}
          animate={{
            y: [0, -25, 0, 20, 0],
            x: [0, -18, 22, -15, 0],
            scale: [1, 1.12, 0.92, 1.08, 1],
            opacity: [0.35, 0.55, 0.3, 0.5, 0.35],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Glows avec animation différée ET mouvement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, 20, -15, 10, 0],
            y: [0, -10, 15, -5, 0],
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            x: { duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            y: { duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
          }}
          className="hero-glow absolute rounded-full blur-3xl"
          style={{ width: '600px', height: '600px', background: 'rgba(75,0,130,0.15)', top: '20%', left: '10%' }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, -15, 20, -10, 0],
            y: [0, 15, -10, 5, 0],
          }}
          transition={{
            duration: 1,
            delay: 0.7,
            x: { duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            y: { duration: 14, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
          }}
          className="hero-glow absolute rounded-full blur-3xl"
          style={{ width: '400px', height: '400px', background: 'rgba(197,160,89,0.1)', top: '50%', right: '15%' }}
        />

        {/* ═══ CONTENU TEXTE AVEC ANIMATION FLUIDE ═══ */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">

          {/* Label - Slide + fade */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="section-label mb-8">{t('home.premiumLabel')}</p>
          </motion.div>

          {/* H1 - Animation séquentielle fluide par ligne */}
          <div
            className="font-display mb-8 overflow-hidden"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, lineHeight: 1.05 }}
          >
            {/* Ligne 1 */}
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('home.h1.line1')}
            </motion.div>

            {/* Ligne 2 - Version dorée avec léger scale */}
            <motion.div
              initial={{ y: '100%', opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <em style={{ color: '#C5A059', fontStyle: 'italic' }}>{t('home.h1.line2')}</em>
            </motion.div>

            {/* Ligne 3 */}
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('home.h1.line3')}
            </motion.div>
          </div>

          {/* Séparateur doré - Scale X */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mx-auto mb-8 h-px max-w-xs"
            style={{ background: 'linear-gradient(90deg, transparent, #C5A059, transparent)' }}
          />

          {/* Paragraphe - Fade + Slide + Blur */}
          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 1.2, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-body text-lg mx-auto mb-12 leading-relaxed"
            style={{ color: 'rgba(240,237,232,0.65)', maxWidth: '580px' }}
          >
            {t('home.description')}{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              style={{ color: '#C5A059' }}
            >
              {t('home.descriptionHighlight')}
            </motion.span>
          </motion.p>

          {/* Boutons - Stagger animation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 1.4,
                },
              },
            }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <NavLink to="/contact">
              <motion.button
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-gold"
              >
                {t('home.cta.contact')}
                <ArrowRight size={14} />
              </motion.button>
            </NavLink>

            <NavLink to="/services">
              <motion.button
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="font-heading text-xs tracking-[0.2em] uppercase py-3 px-8 transition-colors duration-300 animated-link rounded-md"
                style={{ color: 'rgba(240,237,232,0.6)', border: '1px solid rgba(240,237,232,0.15)' }}
              >
                {t('home.cta.services')}
              </motion.button>
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section
        className="py-12 px-6"
        style={{
          background: isDark ? '#0d0d0d' : '#f0ede8',
          borderTop: '1px solid rgba(197,160,89,0.1)',
          borderBottom: '1px solid rgba(197,160,89,0.1)',
        }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {[
            { number: t('home.stats.0.number'), label: t('home.stats.0.label') },
            { number: t('home.stats.1.number'), label: t('home.stats.1.label') },
            { number: t('home.stats.2.number'), label: t('home.stats.2.label') },
            { number: t('home.stats.3.number'), label: t('home.stats.3.label') },
          ].map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.1}>
              <div className={`text-center ${i < 3 ? 'md:border-r' : ''}`} style={{ borderColor: 'rgba(197,160,89,0.1)' }}>
                <div className="counter-number">{stat.number}</div>
                <div className="font-heading text-xs tracking-[0.2em] uppercase mt-2" style={{ color: 'var(--text-secondary)' }}>
                  {stat.label}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* ═══ WHAT WE TRULY SELL ═══ */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <SectionReveal direction="left">
              <p className="section-label mb-4">{t('home.philosophy.label')}</p>
              <h2 className="section-title mb-8">
                {t('home.philosophy.title1')}<br />
                {t('home.philosophy.title2')}<br />
                <em>{t('home.philosophy.title3')}</em>
              </h2>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                {t('home.philosophy.description')}
              </p>


              <NavLink to="/a-propos">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-gold">
                  {t('home.philosophy.cta')}
                  <ArrowRight size={14} />
                </motion.button>
              </NavLink>
            </SectionReveal>

            <SectionReveal direction="right">
              <div className="space-y-4">
                {[
                  {
                    label: t('home.freedoms.0.label'),
                    desc: t('home.freedoms.0.desc'),
                  },
                  {
                    label: t('home.freedoms.1.label'),
                    desc: t('home.freedoms.1.desc'),
                  },
                  {
                    label: t('home.freedoms.2.label'),
                    desc: t('home.freedoms.2.desc'),
                  },
                  {
                    label: t('home.freedoms.3.label'),
                    desc: t('home.freedoms.3.desc'),
                  },
                  {
                    label: t('home.freedoms.4.label'),
                    desc: t('home.freedoms.4.desc'),
                  },
                ].map((item, i) => (
                  <SectionReveal key={item.label} delay={i * 0.1}>
                    <div className="glass-card p-5 flex items-center gap-5 rounded-sm">
                      <div className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(75,0,130,0.3)', border: '1px solid rgba(197,160,89,0.2)' }}>
                        <span className="font-heading text-xs" style={{ color: '#C5A059' }}>{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <div>
                        <div className="font-heading text-sm tracking-widest uppercase mb-1" style={{ color: '#C5A059', fontWeight: 300 }}>{item.label}</div>
                        <div className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</div>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ═══ PILLARS OVERVIEW ═══ */}
      <section className="py-24 px-6" style={{ background: isDark ? '#080808' : '#f5f2ee' }}>
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-20">
            <p className="section-label mb-4">{t('home.pillarsSection.label')}</p>
            <h2 className="section-title">
              {t('home.pillarsSection.title1')} <em>{t('home.pillarsSection.title2')}</em> {t('home.pillarsSection.title3')}
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((pillar, i) => (
              <SectionReveal key={pillar.num} delay={i * 0.1}>
                <div
                  className="relative overflow-hidden group border border-gold-light/50 rounded-sm"
                  style={{ height: '380px', cursor: 'default' }}
                >
                  {/* Image de fond */}
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ filter: 'brightness(0.65) saturate(0.8)' }}
                  />

                  {/* Vignette sombre permanente en bas */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 45%, transparent 90%)',
                    }}
                  />

                  {/* Fond animé — position absolute en bas */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 overflow-hidden"
                    initial={{ height: '90px' }}
                    whileHover={{ height: '200px' }}
                    transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(75,0,130,0.88) 0%, rgba(10,10,10,0.94) 100%)',
                      borderTop: '1px solid rgba(197,160,89,0.35)',
                    }}
                  >
                    {/* Num + Titre — toujours visibles */}
                    <div className="px-5 pt-4 pb-0">
                      <span
                        className="font-heading block font-[200] text-lg md:text-2xl tracking-[0.3em] uppercase text-gold-dark"

                      >
                        {pillar.num}
                      </span>
                      <h3
                        className="font-heading text-sm tracking-widest uppercase mt-1 leading-snug"
                        style={{ color: '#f0ede8', fontWeight: 300 }}
                      >
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Ligne dorée — se déploie au hover */}


                    {/* Tag / description — monte au hover */}
                    <p
                      className="font-display text-md italic px-5 mt-5 leading-relaxed"

                      style={{ color: 'rgba(197,160,89,0.85)' }}
                    >
                      {pillar.tag}
                    </p>
                  </motion.div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="text-center mt-16">
            <NavLink to="/services">
              <motion.button whileHover={{ scale: 1.02 }} className="btn-gold">
                {t('home.pillarsSection.cta')}
                <ArrowRight size={14} />
              </motion.button>
            </NavLink>
          </SectionReveal>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-20">
                <p className="section-label mb-4">{t('home.valuesSection.label')}</p>
                <h2 className="section-title">
              {t('home.valuesSection.title1')}<br />
              <em>{t('home.valuesSection.title2')}  </em>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <SectionReveal key={v.label} delay={i * 0.15}>
                <div className="glass-card p-10 text-center h-full">
                  <div className="inline-flex items-center justify-center rounded-sm w-12 h-12 mb-4" style={{ border: '1px solid rgba(197,160,89,0.3)' }}>
                    <v.icon size={24} style={{ color: '#C5A059' }} />
                  </div>
                  <h3 className="font-heading text-sm tracking-widest uppercase mb-4" style={{ color: '#C5A059', fontWeight: 300 }}>{v.label}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ KEY MESSAGE ═══ */}
      <section
        className="py-32 px-6 relative overflow-hidden"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, rgba(75,0,130,0.15) 0%, rgba(10,10,10,1) 50%, rgba(197,160,89,0.05) 100%)'
            : 'linear-gradient(135deg, rgba(75,0,130,0.08) 0%, rgba(248,246,242,1) 50%, rgba(197,160,89,0.1) 100%)',
        }}
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <SectionReveal>
            <div className="gold-line justify-center mb-8">
              <span className="section-label">{t('home.finalMessage.label')}</span>
            </div>
            <blockquote
              className="font-display mb-12"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.2, color: 'var(--text-primary)' }}
            >
              {t('home.finalMessage.line1')}<br />
              <em style={{ color: '#C5A059' }}>{t('home.finalMessage.line2')}</em><br />
              {t('home.finalMessage.line3')}
            </blockquote>
            <div className="divider-gold mx-auto mb-10" />
            <NavLink to="/contact">
              <motion.button whileHover={{ scale: 1.02 }} className="btn-gold">
                {t('home.finalMessage.cta')}
                <ArrowRight size={14} />
              </motion.button>
            </NavLink>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  )
}
