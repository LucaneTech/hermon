import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, Star, ChevronDown } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import { useTheme } from '../hooks/useTheme'
import { image } from 'framer-motion/client'

const values = [
  {
    icon: Shield,
    label: 'Confidentialité Absolue',
    desc: `Clause renforcée dans chaque contrat. Vos informations restent strictement confidentielles.`,
  },
  {
    icon: Clock,
    label: 'Disponibilité 24/7/365',
    desc: `Nos clients sont prioritaires à chaque instant, sans exception.`,
  },
  {
    icon: Star,
    label: 'Exigence Irréprochable',
    desc: `Nous ne proposons que l'excellence. Aucun compromis, jamais.`,
  },
]

const stats = [
  { number: '24/7', label: 'Disponibilité permanente' },
  { number: '5', label: 'Piliers de services' },
  { number: '3', label: 'Offres sur-mesure' },
  { number: '1h', label: "Délai d'intervention d'urgence" },
]

const pillars = [
  {
    num: '01',
    title: 'Excellence Événementielle',
    tag: "L'art de recevoir dignement",
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
  },
  {
    num: '02',
    title: 'Mobilité Intelligente',
    tag: 'Voyager sans jamais être déplacé',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
  },
  {
    num: '03',
    title: 'Fiabilité Totale',
    tag: 'Des partenaires dignes de confiance',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
  },
  {
    num: '04',
    title: 'Réactivité Absolue',
    tag: "L'administration au service de l'action",
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
  },
  {
    num: '05',
    title: 'Sur-Mesure Personnel',
    tag: "Le dirigeant d'abord, la personne ensuite",
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
  },
]

export default function Home() {
  const { isDark } = useTheme()

  return (
    <PageTransition>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden md:pt-32 md:pb-12">
        {/* Background avec animation d'apparition ET mouvement continu */}
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
          style={{ width: '400px', height: '400px', background: 'rgba(197,160,89,0.08)', top: '50%', right: '15%' }}
        />

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="section-label mb-8">Conciergerie Multi-Domaine Premium</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display mb-8"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, lineHeight: 1.05 }}
          >
            L'Art de<br />
            <em style={{ color: '#C5A059', fontStyle: 'italic' }}>Libérer le Temps</em><br />
            des Leaders
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mx-auto mb-8 h-px max-w-xs"
            style={{ background: 'linear-gradient(90deg, transparent, #C5A059, transparent)' }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="font-body text-lg mx-auto mb-12 leading-relaxed"
            style={{ color: 'rgba(240,237,232,0.65)', maxWidth: '580px' }}
          >
            HERMON EXIMIA prend en charge tout ce qui vous empêche de décider.
            Vous arrivez, vous présidez, vous repartez. <span style={{ color: '#C5A059' }}>Tout le reste est notre affaire.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <NavLink to="/contact">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-gold">
                Diagnostic Gratuit (2h)
                <ArrowRight size={14} />
              </motion.button>
            </NavLink>
            <NavLink to="/services">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="font-heading text-xs tracking-[0.2em] uppercase py-3 px-8 transition-colors duration-300 animated-link rounded-md"
                style={{ color: 'rgba(240,237,232,0.6)', border: '1px solid rgba(240,237,232,0.15)' }}
              >
                Découvrir nos Services
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
          {stats.map((stat, i) => (
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
              <p className="section-label mb-4">Notre Philosophie</p>
              <h2 className="section-title mb-8">
                Nous ne vendons pas<br />
                des services.<br />
                <em>Nous offrons la liberté.</em>
              </h2>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                HERMON EXIMIA est née d'un constat fondamental : l'attention des dirigeants est constamment fragmentée.
                Entre sollicitations internes, imprévus logistiques et tâches administratives, le temps consacré à la réflexion
                stratégique se réduit dangereusement.
              </p>


              <NavLink to="/a-propos">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-gold">
                  Notre Vision
                  <ArrowRight size={14} />
                </motion.button>
              </NavLink>
            </SectionReveal>

            <SectionReveal direction="right">
              <div className="space-y-4">
                {[
                  {
                    label: 'La Tranquillité',
                    desc: `L'absence totale de préoccupation logistique`,
                  },
                  {
                    label: "L'Efficacité",
                    desc: `Chaque minute réinvestie dans l'essentiel stratégique`,
                  },
                  {
                    label: 'La Liberté',
                    desc: `La capacité de se concentrer sans entrave`,
                  },
                  {
                    label: 'La Dignité',
                    desc: `Un accompagnement discret et irréprochable`,
                  },
                  {
                    label: 'Le Temps',
                    desc: `La ressource la plus rare et la plus précieuse`,
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
            <p className="section-label mb-4">Une architecture complète</p>
            <h2 className="section-title">
              Les <em>5 Piliers</em> de l'Excellence
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((pillar, i) => (
              <SectionReveal key={pillar.num} delay={i * 0.1}>
                <div
                  className="relative overflow-hidden group"
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
                    whileHover={{ height: '220px' }}
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
                Explorer tous nos Services
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
            <p className="section-label mb-4">Notre Engagement Dignitaire</p>
            <h2 className="section-title">
              Principes qui nous<br /><em>définissent</em>
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
              <span className="section-label">Message Clé</span>
            </div>
            <blockquote
              className="font-display mb-12"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.2, color: 'var(--text-primary)' }}
            >
              "EXIMIA S'OCCUPE DE<br />
              <em style={{ color: '#C5A059' }}>TOUT CE QUI FAIT<br />PERDRE DU TEMPS</em><br />
              AUX DIRIGEANTS."
            </blockquote>
            <div className="divider-gold mx-auto mb-10" />
            <NavLink to="/contact">
              <motion.button whileHover={{ scale: 1.02 }} className="btn-gold">
                Initier votre Transformation
                <ArrowRight size={14} />
              </motion.button>
            </NavLink>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  )
}
