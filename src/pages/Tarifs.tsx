import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import { useTheme } from '../hooks/useTheme'
import { usePricing, fmtPrice } from '../hooks/usePricing'
import { durations, type Duration } from '../data/pricing.data'

export default function Tarifs() {
  const [activeDuration, setActiveDuration] = useState(0)
  const { isDark } = useTheme()
  const { 
    getPlans, 
    getGroupExample, 
    getHeroContent, 
    getGroupSectionContent, 
    getDiagnosticContent,
    getStaticText,
    durations: activeDurations
  } = usePricing()
  
  const plans = getPlans()
  const groupExample = getGroupExample()
  const heroContent = getHeroContent()
  const groupSectionContent = getGroupSectionContent()
  const diagnosticContent = getDiagnosticContent()
  const recommendedText = getStaticText('recommended')
  const perAgentText = getStaticText('perAgent')
  const chooseOfferText = getStaticText('chooseOffer')

  return (
    <PageTransition>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-28 md:pt-40 pb-10 md:pb-24 px-6 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <img
            src="images/tarif.jpg"
            alt="Pricing architecture"
            className="w-full max-h-[650px] h-full object-cover"
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
            {heroContent.label}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="section-title mb-8" style={{ maxWidth: '700px' }}
          >
            {heroContent.title1}<br />de votre <em>{heroContent.title2}</em>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7 }} className="divider-gold" />
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="font-body text-base leading-relaxed mt-8"
            style={{ color: 'var(--text-secondary)', maxWidth: '560px' }}
          >
            {heroContent.description}
          </motion.p>
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
                {heroContent.cta}
                <ArrowRight className='w-5 h-5' />
              </span>
            </motion.button>
          </NavLink>
        </div>
      </section>

      {/* ═══ DURATION SELECTOR ═══ */}
      <section className="px-6 pb-16 mt-6 md:mt-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {activeDurations.map((d, i) => (
              <motion.button
                key={d}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveDuration(i)}
                className="px-6 py-3 font-heading text-xs rounded-sm tracking-widest uppercase transition-all duration-300"
                style={{
                  background: activeDuration === i ? '#C5A059' : 'transparent',
                  color: activeDuration === i ? '#0a0a0a' : 'var(--text-secondary)',
                  border: `1px solid ${activeDuration === i ? '#C5A059' : 'rgba(197,160,89,0.25)'}`,
                  fontWeight: 300,
                }}
              >
                {d}
              </motion.button>
            ))}
          </div>

          {/* ═══ PRICING CARDS ═══ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <SectionReveal key={plan.id} delay={i * 0.1}>
                <motion.div
                  layout
                  className="glass-card h-full flex flex-col relative overflow-hidden"
                  style={{
                    border: plan.featured ? `1px solid rgba(197,160,89,0.5)` : '1px solid rgba(197,160,89,0.12)',
                    background: plan.featured ? 'linear-gradient(135deg, rgba(75,0,130,0.15), rgba(197,160,89,0.05))' : undefined,
                  }}
                >
                  {plan.featured && (
                    <div
                      className="absolute top-0 left-0 right-0 py-2 text-center"
                      style={{ background: '#C5A059' }}
                    >
                      <span className="font-heading text-xs tracking-[0.3em] uppercase" style={{ color: '#0a0a0a', fontWeight: 400 }}>
                        {recommendedText}
                      </span>
                    </div>
                  )}

                  <div className={`p-8 flex flex-col h-full ${plan.featured ? 'pt-14' : ''}`}>
                    {/* Header */}
                    <div className="mb-8">
                      <div
                        className="w-10 h-1 mb-6"
                        style={{ background: plan.accent }}
                      />
                      <h3 className="font-heading text-xl tracking-widest uppercase mb-2" style={{ color: 'var(--text-primary)', fontWeight: 300 }}>
                        {plan.title}
                      </h3>
                      <p className="font-body text-xs mb-4" style={{ color: 'var(--text-secondary)' }}>{plan.subtitle}</p>
                      <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-end gap-2 mb-2">
                        <motion.span
                          key={activeDuration}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="font-display"
                          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: plan.accent, fontWeight: 300 }}
                        >
                          {fmtPrice(plan.prices[activeDuration])}
                        </motion.span>
                      </div>
                      <p className="font-heading text-xs tracking-[0.2em] uppercase" style={{ color: 'rgba(160,152,144,0.5)' }}>
                        {perAgentText} · {activeDurations[activeDuration]}
                      </p>
                      <div className="mt-3 px-3 py-1.5 inline-block" style={{ background: plan.accentBg, border: `1px solid ${plan.accent}30` }}>
                        <span className="font-heading text-xs tracking-widest uppercase" style={{ color: plan.accent, fontSize: '0.6rem' }}>
                          {plan.availability}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-10 flex-1">
                      {plan.features.map(f => (
                        <li key={f} className="flex items-start gap-3">
                          <Check size={13} className="mt-0.5 flex-shrink-0" style={{ color: plan.accent }} />
                          <span className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <NavLink to="/contact" state={{ plan: plan.id }}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 font-heading text-xs tracking-[0.25em] uppercase transition-all duration-300"
                        style={{
                          background: plan.featured ? '#C5A059' : 'transparent',
                          color: plan.featured ? '#0a0a0a' : plan.accent,
                          border: `1px solid ${plan.featured ? '#C5A059' : plan.accent + '80'}`,
                          fontWeight: 300,
                        }}
                      >
                        {chooseOfferText}
                      </motion.button>
                    </NavLink>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GROUP PRICING ═══ */}
      <section className="py-24 px-6" style={{ background: isDark ? '#060606' : '#f0ede8' }}>
        <div className="max-w-5xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <p className="section-label mb-4">{groupSectionContent.label}</p>
            <h2 className="section-title">{groupSectionContent.title} <em>{groupSectionContent.titleEm}</em></h2>
            <p className="font-body text-sm mt-4" style={{ color: 'var(--text-secondary)' }}>
              {groupSectionContent.description}
            </p>
          </SectionReveal>

          <SectionReveal>
            <div className="overflow-x-auto">
              <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead>
                  <tr>
                    <th className="py-4 px-6 text-left font-heading text-xs tracking-widest uppercase" style={{ color: 'var(--text-secondary)', fontWeight: 300, background: isDark ? 'rgba(26,26,26,0.6)' : 'rgba(240,237,232,0.8)', borderBottom: '1px solid rgba(197,160,89,0.15)' }}>
                      {groupSectionContent.category}
                    </th>
                    {activeDurations.map(d => (
                      <th key={d} className="py-4 px-4 text-center font-heading text-xs tracking-widest uppercase" style={{ color: '#C5A059', fontWeight: 300, background: isDark ? 'rgba(26,26,26,0.6)' : 'rgba(240,237,232,0.8)', borderBottom: '1px solid rgba(197,160,89,0.15)' }}>
                        {d}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {groupExample.map((row, i) => (
                    <tr
                      key={row.cat}
                      style={{ background: i % 2 === 0 ? 'transparent' : isDark ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.02)' }}
                    >
                      <td className="py-4 px-6 font-heading text-sm uppercase tracking-widest" style={{ color: '#C5A059', fontWeight: 300, borderBottom: '1px solid rgba(197,160,89,0.05)' }}>
                        10 {row.cat}
                      </td>
                      {row.prices.map((price, j) => (
                        <td key={j} className="py-4 px-4 text-center font-body text-sm" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid rgba(197,160,89,0.05)' }}>
                          {fmtPrice(price)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionReveal>

          <SectionReveal className="mt-16 text-center">
            <div
              className="inline-block p-8"
              style={{ border: '1px solid rgba(197,160,89,0.2)', background: isDark ? 'rgba(75,0,130,0.08)' : 'rgba(75,0,130,0.04)' }}
            >
              <p className="font-display text-lg italic mb-2" style={{ color: '#C5A059' }}>
                {diagnosticContent.title}
              </p>
              <p className="font-body text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                {diagnosticContent.description}
              </p>
              <NavLink to="/contact">
                <motion.button whileHover={{ scale: 1.02 }} className="btn-gold">
                  {diagnosticContent.cta}
                  <ArrowRight size={14} />
                </motion.button>
              </NavLink>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  )
}