import { motion } from 'framer-motion'
import { ArrowRight, Eye, Zap, Heart, Lock } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import { useTheme } from '../hooks/useTheme'
import TeamGrid from '../components/aboutSection/OurTeam'
import { useTranslation } from 'react-i18next'




export default function About() {
  const { isDark } = useTheme()
  const { t } = useTranslation('about')


  const timeline = [
  {
    year: t('about.story.timeline.0.year'),
    text: t('about.story.timeline.0.text'),
  },
  {
    year: t('about.story.timeline.1.year'),
    text: t('about.story.timeline.1.text'),
  },
  {
    year: t('about.story.timeline.2.year'),
    text: t('about.story.timeline.2.text'),
  },
  {
    year: t('about.story.timeline.3.year'),
    text: t('about.story.timeline.3.text'),
  },
]


const principles = [
  {
    icon: Lock,
    title: t('about.principles.items.0.title'),
    desc: t('about.principles.items.0.desc'),
  },
  {
    icon: Zap,
    title: t('about.principles.items.1.title'),
    desc: t('about.principles.items.1.desc'),
  },
  {
    icon: Eye,
    title: t('about.principles.items.2.title'),
    desc: t('about.principles.items.2.desc'),
  },
  {
    icon: Heart,
    title: t('about.principles.items.3.title'),
    desc: t('about.principles.items.3.desc'),
  },
]

  return (
    <PageTransition>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-28 md:pt-40 pb-10 md:pb-24 px-6 overflow-hidden">
  {/* Image d'arrière-plan */}
  <div className="absolute inset-0 z-0">
    <img 
      src="images/about.jpg"
      alt="Leadership moderne - équipe exécutive en réunion"
      className="w-full h-full object-cover"
    />
  </div>
  
  {/* Overlay plus sombre avec le même dégradé */}
  <div className="absolute inset-0 z-1"
    style={{
      background: isDark
        ? 'radial-gradient(ellipse at 30% 50%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 60%), radial-gradient(ellipse at 70% 50%, rgba(197,160,89,0.15) 0%, transparent 80%)'
        : 'radial-gradient(ellipse at 30% 50%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 60%), radial-gradient(ellipse at 70% 50%, rgba(197,160,89,0.1) 0%, transparent 80%)',
    }}
  />
   <div className="hero-glow w-[600px] h-[600px] top-4 left-0 bg-violet-900/90 opacity-30"   />
   <div className="hero-glow w-[600px] h-[600px] top-[50%] left-4 bg-black opacity-50"   />
   
  
  
  <div className="relative z-10 max-w-5xl mx-auto">
    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-label mb-6">
      {t('about.hero.label')}
    </motion.p>
    <motion.h1
      initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
      className="section-title mb-4 md:mb-8" style={{ maxWidth: '700px' }}
    >
      {t('about.hero.title.line1')} <em>{t('about.hero.title.line2')}</em> {t('about.hero.title.line3')}
    </motion.h1>
    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7 }} className="divider-gold" />
    <motion.p
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
      className="font-body text-lg leading-relaxed mt-8" style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}
    >
      {t('about.hero.description')}
    </motion.p>
  </div>
</section>

      {/* ═══ STORY ═══ */}
      <section className="py-24 px-6" style={{ background: isDark ? '#080808' : '#f5f2ee' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <SectionReveal direction="left">
              <p className="section-label mb-4">{t('about.story.label')}</p>
              <h2 className="section-title mb-10">
                {t('about.story.title.line1')}<br /><em>{t('about.story.title.line2')}</em>
              </h2>
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={item.year} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-px flex-1" style={{ background: i === 0 ? 'transparent' : 'rgba(197,160,89,0.2)' }} />
                      <div className="w-2 h-2 rounded-none flex-shrink-0" style={{ background: '#C5A059' }} />
                      <div className="w-px flex-1" style={{ background: i === timeline.length - 1 ? 'transparent' : 'rgba(197,160,89,0.2)' }} />
                    </div>
                    <div className="pb-6">
                      <span className="font-heading text-xs tracking-[0.3em] uppercase" style={{ color: '#C5A059', fontWeight: 300 }}>{item.year}</span>
                      <p className="font-body text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.2}>
              <div className="relative">
                <div
                  className="relative p-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(75,0,130,0.15), rgba(197,160,89,0.05))',
                    border: '1px solid rgba(197,160,89,0.2)',
                  }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20" style={{ borderTop: '2px solid #C5A059', borderRight: '2px solid #C5A059' }} />
                  <div className="absolute bottom-0 left-0 w-20 h-20" style={{ borderBottom: '2px solid #C5A059', borderLeft: '2px solid #C5A059' }} />

                  <p className="section-label mb-6">{t('about.positioning.label')}</p>
                  <div className="mb-8">
                    <p className="font-heading text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(160,152,144,0.5)' }}>{t('about.positioning.notText')}</p>
                    {[
                      t('about.positioning.not.0'),
                      t('about.positioning.not.1'),
                      t('about.positioning.not.2')
                    ].map(item => (
                      <div key={item} className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-px" style={{ background: 'rgba(160,152,144,0.4)' }} />
                        <span className="font-body text-sm line-through" style={{ color: 'rgba(160,152,144,0.5)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-heading text-xs tracking-widest uppercase mb-4" style={{ color: '#C5A059' }}>{t('about.positioning.isText')}</p>
                    {[
                      t('about.positioning.is.0'),
                      t('about.positioning.is.1'),
                      t('about.positioning.is.2')
                    ].map(item => (
                      <div key={item} className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-px" style={{ background: '#C5A059' }} />
                        <span className="font-body text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Signature block */}
                <div
                  className="mt-6 p-6"
                  style={{ background: isDark ? 'rgba(26,26,26,0.6)' : 'rgba(240,237,232,0.8)', border: '1px solid rgba(197,160,89,0.1)' }}
                >
                  <p className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>{t('about.positioning.signature.role')}</p>
                  <p className="font-display text-lg mt-1" style={{ color: '#C5A059' }}>{t('about.positioning.signature.name')}</p>
                  <p className="font-body text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>{t('about.positioning.signature.location')}</p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/*TEAM*/}
      <TeamGrid/>

      {/* ═══ PRINCIPLES ═══ */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-20">
            <p className="section-label mb-4">{t('about.principles.label')}</p>
            <h2 className="section-title">{t('about.principles.title')}</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.1}>
                <div className="pillar-card h-full flex gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-sm"
                      style={{ border: '1px solid rgba(197,160,89,0.3)', background: 'rgba(75,0,130,0.1)' }}
                    >
                      <p.icon size={20} style={{ color: '#C5A059' }} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm tracking-widest uppercase mb-3" style={{ color: '#C5A059', fontWeight: 300 }}>{p.title}</h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE SELL TABLE ═══ */}
      <section className="py-24 px-6" style={{ background: isDark ? '#060606' : '#f0ede8' }}>
        <div className="max-w-5xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <p className="section-label mb-4">{t('about.offer.label')}</p>
            <h2 className="section-title">{t('about.offer.title1')} <em>{t('about.offer.title2')}</em></h2>
          </SectionReveal>
          <SectionReveal>
            <div style={{ border: '1px solid rgba(197,160,89,0.15)', overflow: 'hidden' }}>
              {[
                { offer: t('about.offer.items.0.offer'), meaning: t('about.offer.items.0.meaning') },
                { offer: t('about.offer.items.1.offer'), meaning: t('about.offer.items.1.meaning') },
                { offer: t('about.offer.items.2.offer'), meaning: t('about.offer.items.2.meaning') },
                { offer: t('about.offer.items.3.offer'), meaning: t('about.offer.items.3.meaning') },
                { offer: t('about.offer.items.4.offer'), meaning: t('about.offer.items.4.meaning') },
              ].map((row, i) => (
                <div
                  key={row.offer}
                  className="grid grid-cols-2 gap-0 group transition-colors duration-300"
                  style={{
                    borderBottom: i < 4 ? '1px solid rgba(197,160,89,0.08)' : 'none',
                  }}
                >
                  <div
                    className="px-8 py-5 font-heading text-sm tracking-widest uppercase group-hover:text-gold transition-colors duration-300"
                    style={{
                      borderRight: '1px solid rgba(197,160,89,0.08)',
                      color: '#C5A059',
                      fontWeight: 300,
                      background: isDark ? 'rgba(75,0,130,0.05)' : 'rgba(75,0,130,0.03)',
                    }}
                  >
                    {row.offer}
                  </div>
                  <div className="px-8 py-5 font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {row.meaning}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 px-6 text-center">
        <SectionReveal>
          <p className="section-label mb-6">{t('about.cta.label')}</p>
          <h2 className="font-display mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
            {t('about.cta.title.line1')}<br /><em style={{ color: '#C5A059' }}>{t('about.cta.title.line2')}</em>
          </h2>
          <NavLink to="/contact">
            <motion.button whileHover={{ scale: 1.02 }} className="btn-gold">
              {t('about.cta.button')} <ArrowRight size={14} />
            </motion.button>
          </NavLink>
        </SectionReveal>
      </section>
    </PageTransition>
  )
}