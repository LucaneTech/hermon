import { motion } from 'framer-motion'
import { ArrowRight, Eye, Zap, Heart, Lock } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import { useTheme } from '../hooks/useTheme'
import TeamGrid from '../components/aboutSection/OurTeam'
const principles = [
  {
    icon: Lock,
    title: 'Confidentialité Absolue',
    desc: `Ce que nous savons de vous reste entre nous. Clause de confidentialité renforcée, inscrite dans chaque contrat, sans exception.`,
  },
  {
    icon: Zap,
    title: 'Disponibilité Permanente',
    desc: `Nos clients sont prioritaires 24 heures sur 24, 7 jours sur 7, 365 jours par an. La notion de "hors horaires" n'existe pas pour nous.`,
  },
  {
    icon: Eye,
    title: 'Discrétion Royale',
    desc: `Notre travail se reflète dans votre sérénité, jamais dans notre présence. Nous sommes le silence qui vous protège.`,
  },
  {
    icon: Heart,
    title: 'Adaptation Constante',
    desc: `Nous évoluons avec vous et pour vous. Vos changements de vie deviennent immédiatement nos priorités, sans délai ni friction.`,
  },
]

const timeline = [
  {
    year: 'Genèse',
    text: `HERMON EXIMIA naît d'un constat implacable : les dirigeants africains les plus brillants perdent des heures précieuses sur des tâches qui ne méritent pas leur attention.`,
  },
  {
    year: 'Vision',
    text: `Créer le premier service de conciergerie multi-domaine premium au Congo, capable de rivaliser avec les standards des grandes maisons européennes.`,
  },
  {
    year: 'Mission',
    text: `Libérer chaque dirigeant, cadre et talent de tout ce qui l'empêche de réaliser pleinement son potentiel, tant professionnel que personnel.`,
  },
  {
    year: 'Promesse',
    text: `Chaque client EXIMIA bénéficie d'un interlocuteur unique, formé à l'excellence, dédié à sa réussite globale et disponible à tout moment.`,
  },
]
export default function About() {
  const { isDark } = useTheme()

  return (
    <PageTransition>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-28 md:pt-40 pb-10 md:pb-24 px-6 overflow-hidden">
  {/* Image d'arrière-plan */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
      Qui Sommes-Nous
    </motion.p>
    <motion.h1
      initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
      className="section-title mb-4 md:mb-8" style={{ maxWidth: '700px' }}
    >
      L'<em>Excellence Discrète</em><br />comme Philosophie
    </motion.h1>
    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7 }} className="divider-gold" />
    <motion.p
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
      className="font-body text-lg leading-relaxed mt-8" style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}
    >
      HERMON EXIMIA n'est pas une conciergerie standard. Nous sommes le partenaire 
      de l'efficacité directionnelle — l'architecte du temps libéré des leaders qui façonnent demain.
    </motion.p>
  </div>
</section>

      {/* ═══ STORY ═══ */}
      <section className="py-24 px-6" style={{ background: isDark ? '#080808' : '#f5f2ee' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <SectionReveal direction="left">
              <p className="section-label mb-4">Notre Histoire</p>
              <h2 className="section-title mb-10">
                Née d'un constat,<br /><em>forgée par l'exigence</em>
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

                  <p className="section-label mb-6">Notre Positionnement</p>
                  <div className="mb-8">
                    <p className="font-heading text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(160,152,144,0.5)' }}>Nous ne sommes pas :</p>
                    {['Une conciergerie standard', "Un simple service d'assistance", "Un prestataire parmi d'autres"].map(item => (
                      <div key={item} className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-px" style={{ background: 'rgba(160,152,144,0.4)' }} />
                        <span className="font-body text-sm line-through" style={{ color: 'rgba(160,152,144,0.5)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-heading text-xs tracking-widest uppercase mb-4" style={{ color: '#C5A059' }}>Nous sommes :</p>
                    {[
                      "Le partenaire de l'efficacité directionnelle",
                      "Le garant de la sérénité des décideurs",
                      "L'architecte du temps libéré",
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
                  <p className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>Responsable de département de développement statistique de la conciergerie</p>
                  <p className="font-display text-lg mt-1" style={{ color: '#C5A059' }}>Mme MOUSSOKI MASSAMBA JESSICA DEO-GRACIAS</p>
                  <p className="font-body text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>Pointe-Noire, République du Congo</p>
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
            <p className="section-label mb-4">Ce qui nous guide</p>
            <h2 className="section-title">Nos <em>Principes Fondateurs</em></h2>
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
            <p className="section-label mb-4">Au-Delà des Prestations</p>
            <h2 className="section-title">Ce que nous <em>vendons vraiment</em></h2>
          </SectionReveal>
          <SectionReveal>
            <div style={{ border: '1px solid rgba(197,160,89,0.15)', overflow: 'hidden' }}>
              {[
                { offer: 'La Tranquillité', meaning: "L'absence totale de préoccupation logistique" },
                { offer: "L'Efficacité", meaning: "Chaque minute réinvestie dans l'essentiel" },
                { offer: 'La Liberté', meaning: "La capacité de se concentrer sans entrave" },
                { offer: 'La Dignité', meaning: "Un accompagnement discret et irréprochable" },
                { offer: 'Le Temps', meaning: "La ressource la plus rare et la plus précieuse" },
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
          <p className="section-label mb-6">Prêt à franchir le seuil ?</p>
          <h2 className="font-display mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
            Votre première consultation<br /><em style={{ color: '#C5A059' }}>est offerte.</em>
          </h2>
          <NavLink to="/contact">
            <motion.button whileHover={{ scale: 1.02 }} className="btn-gold">
              Prendre Rendez-Vous <ArrowRight size={14} />
            </motion.button>
          </NavLink>
        </SectionReveal>
      </section>
    </PageTransition>
  )
}
