import { motion } from 'framer-motion'
import { ArrowRight, Crown, Briefcase, TrendingUp } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import { useTheme } from '../hooks/useTheme'
const targets = [
  {
    id: 'strategique',
    icon: Crown,
    num: '01',
    title: 'Catégorie Stratégique',
    subtitle: 'Dirigeants · COMEX · Actionnaires · Associés',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
    reality: 'Temps ultra-critique, vie professionnelle et personnelle entremêlées, exposition maximale aux parasites opérationnels. Chaque heure perdue est une décision stratégique abandonnée.',
    offer: 'Interlocuteur Senior Unique, disponibilité 24h/24 · 7j/7 · 365j/an, prise en charge illimitée (familiale, professionnelle, diplomatique, patrimoniale).',
    gain: 'Libération totale de l\'esprit. Vous ne gérez plus rien — vous décidez. Vous ne coordonnez plus — vous leadez.',
    services: ['Assistance 24/7/365', 'Agenda privé intégral', 'Protocole VIP complet', 'Accompagnement physique', 'Confidentialité absolue'],
    accent: 'rgba(75,0,130,0.3)',
    accentBorder: 'rgba(75,0,130,0.5)',
  },
  {
    id: 'operationnelle',
    icon: Briefcase,
    num: '02',
    title: 'Catégorie Opérationnelle',
    subtitle: 'Cadres Dirigeants · Managers Supérieurs · Experts de haut niveau',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200',
    reality: 'Mobilité permanente, gestion d\'imprévus terrain, besoin de réactivité immédiate. La performance est freinée par la friction logistique, pas par les compétences.',
    offer: 'Assistance prioritaire 6h–22h, 7j/7 — gestion complète des déplacements, support administratif urgent, tâches personnelles courantes, hotline dédiée.',
    gain: 'Fluidité de mouvement absolue. Retrouvez jusqu\'à 15 heures de productivité par semaine réinvesties dans votre excellence métier.',
    services: ['Disponibilité 6h–22h', 'Gestion des déplacements', 'Support administratif', 'Tâches personnelles', 'Hotline prioritaire'],
    accent: 'rgba(197,160,89,0.15)',
    accentBorder: 'rgba(197,160,89,0.4)',
  },
  {
    id: 'talent',
    icon: TrendingUp,
    num: '03',
    title: 'Catégorie Talent',
    subtitle: 'Cadres · Collaborateurs Stratégiques · Jeunes Talents d\'Exception',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1200',
    reality: 'Ambition maximale, mais freinés par les tâches chronophages du quotidien — courses, administratif, organisation personnelle. Le potentiel est là. Le temps, lui, manque.',
    offer: 'Services essentiels premium sur les jours ouvrés 8h–20h : courses, pressing, administratif courant, organisation personnelle, plateforme digitale dédiée.',
    gain: 'Focalisation totale sur la montée en compétence et la création de valeur. Rétention accrue des meilleurs profils au sein de votre organisation.',
    services: ['Jours ouvrés 8h–20h', 'Services quotidiens', 'Administratif courant', 'Organisation personnelle', 'Plateforme digitale'],
    accent: 'rgba(22,101,52,0.2)',
    accentBorder: 'rgba(34,197,94,0.3)',
  },
];

export default function Cibles() {
  const { isDark } = useTheme()

  return (
    <PageTransition>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse at 20% 60%, rgba(75,0,130,0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 40%, rgba(197,160,89,0.06) 0%, transparent 50%)'
              : 'none',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-label mb-6">
            Nos Architectures de Soutien
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="section-title mb-8" style={{ maxWidth: '750px' }}
          >
            Conçu pour ceux<br />qui <em>n'ont pas de temps</em><br />à perdre
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7 }} className="divider-gold" />
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="font-body text-lg leading-relaxed mt-8"
            style={{ color: 'var(--text-secondary)', maxWidth: '560px' }}
          >
            Trois niveaux d'accompagnement, calibrés avec précision pour correspondre
            aux réalités et aux ambitions de chaque profil d'excellence.
          </motion.p>
        </div>
      </section>

      {/* ═══ TARGETS ═══ */}
      {targets.map((target, i) => (
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
                    style={{ border: `1px solid ${target.accentBorder}`, zIndex: 0 }}
                  />
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: '4/3', zIndex: 1 }}
                  >
                    <img
                      src={target.image}
                      alt={target.title}
                      className="w-full h-full object-cover"
                      style={{ filter: 'brightness(0.8) saturate(0.9)' }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(135deg, ${target.accent} 0%, transparent 60%)` }}
                    />
                    <div className="absolute top-6 left-6">
                      <span
                        className="font-heading text-5xl"
                        style={{ color: 'rgba(197,160,89,0.2)', fontWeight: 200 }}
                      >
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
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ border: `1px solid ${target.accentBorder}`, background: target.accent }}
                  >
                    <target.icon size={18} style={{ color: '#C5A059' }} />
                  </div>
                  <span className="section-label">{target.subtitle}</span>
                </div>

                <h2 className="section-title mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                  {target.title}
                </h2>

                <div className="space-y-6 mb-8">
                  <div>
                    <p className="font-heading text-xs tracking-[0.25em] uppercase mb-2" style={{ color: 'rgba(160,152,144,0.6)' }}>Réalité terrain</p>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{target.reality}</p>
                  </div>
                  <div className="w-full h-px" style={{ background: 'rgba(197,160,89,0.1)' }} />
                  <div>
                    <p className="font-heading text-xs tracking-[0.25em] uppercase mb-2" style={{ color: '#C5A059' }}>Notre Offre</p>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{target.offer}</p>
                  </div>
                  <div className="w-full h-px" style={{ background: 'rgba(197,160,89,0.1)' }} />
                  <div>
                    <p className="font-heading text-xs tracking-[0.25em] uppercase mb-2" style={{ color: '#22c55e' }}>Votre Gain</p>
                    <p className="font-body text-sm leading-relaxed font-medium" style={{ color: 'var(--text-primary)' }}>{target.gain}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {target.services.map(s => (
                    <span
                      key={s}
                      className="font-heading text-xs tracking-widest uppercase px-3 py-1"
                      style={{
                        border: `1px solid ${target.accentBorder}`,
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
      ))}

      {/* ═══ COMPARISON TABLE ═══ */}
      <section className="py-24 px-6" style={{ background: isDark ? '#080808' : '#f5f2ee' }}>
        <div className="max-w-5xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <p className="section-label mb-4">Vue Comparative</p>
            <h2 className="section-title">Trouvez votre <em>niveau d'excellence</em></h2>
          </SectionReveal>

          <SectionReveal>
            <div className="overflow-x-auto">
              <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead>
                  <tr>
                    <th className="py-4 px-6 text-left font-heading text-xs tracking-widest uppercase" style={{ color: 'var(--text-secondary)', fontWeight: 300, borderBottom: '1px solid rgba(197,160,89,0.15)' }}>Service</th>
                    {targets.map(t => (
                      <th key={t.id} className="py-4 px-6 text-center font-heading text-xs tracking-widest uppercase" style={{ color: '#C5A059', fontWeight: 300, borderBottom: '1px solid rgba(197,160,89,0.15)' }}>
                        {t.id.charAt(0).toUpperCase() + t.id.slice(1)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Disponibilité', '24/7/365', '6h–22h · 7j/7', '8h–20h Ouvrés'],
                    ['Interlocuteur', 'Senior Dédié', 'Expert Dédié', 'Conseiller Assigné'],
                    ['Agenda Privé', '✓ Complet', '✓ Partiel', '–'],
                    ['Accompagnement Physique', '✓ Inclus', 'Sur demande', '–'],
                    ['Support Administratif', '✓ Illimité', '✓ Prioritaire', '✓ Essentiel'],
                    ['Urgences 1h', '✓', '✓', 'Jours ouvrés'],
                  ].map((row, i) => (
                    <tr
                      key={row[0]}
                      className="group transition-colors duration-200"
                      style={{ background: i % 2 === 0 ? 'transparent' : isDark ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.02)' }}
                    >
                      <td className="py-4 px-6 font-body text-sm" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid rgba(197,160,89,0.05)' }}>{row[0]}</td>
                      {row.slice(1).map((cell, j) => (
                        <td key={j} className="py-4 px-6 text-center font-body text-sm" style={{ color: cell === '✓' || cell.startsWith('✓') ? '#22c55e' : 'var(--text-secondary)', borderBottom: '1px solid rgba(197,160,89,0.05)' }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionReveal>

          <SectionReveal className="text-center mt-12">
            <NavLink to="/tarifs">
              <motion.button whileHover={{ scale: 1.02 }} className="btn-gold">
                Consulter les Tarifs
                <ArrowRight size={14} />
              </motion.button>
            </NavLink>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  )
}
