import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { NavLink } from "react-router-dom"
import PageTransition from "../components/PageTransition"
import SectionReveal from "../components/SectionReveal"
import { useTheme } from "../hooks/useTheme"
const pillars = [
  {
    num: "01",
    title: "Excellence Événementielle & Relationnelle",
    tag: "L'art de recevoir dignement",
    color: "rgba(75,0,130,0.2)",
    services: [
      {
        title: "1.1 Organisation de Réunions Stratégiques",
        desc: "Nous concevons et orchestrons vos réunions les plus importantes avec une exigence absolue — du choix du lieu à l'accueil des participants.",
        items: ["Sélection de lieux d'exception : châteaux, institutions, espaces confidentiels", "Scénographie de réunion : agencement, équipements technologiques, supports", "Accueil personnalisé : protocole, badge, cadeaux de bienvenue", "Restauration d'excellence : traiteurs étoilés, mets raffinés, vins de prestige", "Gestion des imprévus : anticipation et solutions immédiates"],
        gain: "Vous arrivez, vous présidez, vous repartez. Tout le reste est notre affaire.",
      },
      {
        title: "1.2 Événements d'Entreprise de Prestige",
        desc: "Des lancements de produit aux séminaires de direction, nous créons des moments mémorables qui renforcent votre image et fédèrent vos équipes.",
        items: ["Conception sur-mesure : scénario, fil rouge, expérience invité", "Lieux emblématiques : réservation de lieux fermés au public", "Direction artistique : décoration, ambiance, habillage musical", "Animation d'exception : conférenciers, artistes, orchestres", "Capitaine d'événement : un responsable unique pour vous représenter"],
        gain: "Vous impressionnez sans être impressionné par la logistique.",
      },
      {
        title: "1.3 Assistance VIP pour Dirigeants & Partenaires",
        desc: "Un accompagnement discret et attentionné pour vos invités de marque, partenaires stratégiques et talents exceptionnels.",
        items: ["Accueil personnalisé : prise en charge aéroportuaire", "Transport prestige : véhicules avec chauffeur", "Hébergement d'exception : suites présidentielles, résidences privées", "Programme d'accompagnement : visites privées, expériences exclusives", "Cadeaux de départ : souvenirs choisis avec soin"],
        gain: "Vos partenaires se sentent royaux. Votre image rayonne.",
      },
      {
        title: "1.4 Cadeaux d'Affaires Sur-Mesure",
        desc: "Offrir n'est pas un geste anodin — c'est un message. Nous concevons des présents qui portent votre signature et votre considération.",
        items: ["Analyse de la cible : qui offrez-vous ? pourquoi ?", "Sourcing d'exception : artisans d'art, créateurs, maisons prestigieuses", "Personnalisation : gravure, marquage, coffret sur-mesure", "Livraison : remise en main propre ou envoi soigné", "Suivi : accusé de réception et retour"],
        gain: "Vos cadeaux parlent de vous avant même d'être ouverts.",
      },
    ],
  },
  {
    num: "02",
    title: "La Mobilité Intelligente",
    tag: "Voyager sans jamais être déplacé",
    color: "rgba(197,160,89,0.1)",
    services: [
      {
        title: "2.1 Gestion Intégrale des Déplacements",
        desc: "Chaque déplacement est une séquence stratégique. Nous en orchestrons tous les détails pour qu'elle se déroule sans la moindre friction.",
        items: ["Audit du besoin : objectifs, contraintes, préférences", "Itinéraire optimisé : gain de temps, confort, efficacité", "Plan B systématique : anticipation des aléas", "Document de voyage : un dossier complet remis au départ", "Suivi en temps réel : assistance pendant tout le trajet"],
        gain: "Vous vous concentrez sur l'objet de votre voyage. Nous gérons le voyage lui-même.",
      },
      {
        title: "2.2 Réservations Multi-Transports",
        desc: "Nous accédons aux meilleures places, aux meilleurs tarifs et aux meilleures conditions, partout dans le monde.",
        items: ["Aérien : premières classes, classes affaires, jets privés", "Ferroviaire : accès aux salons, accompagnement en gare", "Maritime : yachts, navires de prestige", "Terrestre : véhicules avec chauffeur, limousines, voitures de collection", "Urgence : modification de dernière minute"],
        gain: "Vous voyagez comme vous décidez : sans effort et avec style.",
      },
      {
        title: "2.3 Hébergement d'Exception",
        desc: "Le lieu où vous posez vos valises doit être à la hauteur de ce que vous êtes. Nous sélectionnons des écrins à votre mesure.",
        items: ["Palaces internationaux : accès aux suites présidentielles", "Résidences privées : locations confidentielles", "Clubs de dirigeants : accès privilégié", "Préparatifs : fleurs, température, presse, préférences", "Discrétion absolue : confidentialité garantie"],
        gain: "Vous arrivez dans un lieu qui vous attend, comme si vous y habitiez.",
      },
      {
        title: "2.4 Obtention de Visas & Formalités",
        desc: "Les frontières ne doivent pas être des obstacles. Nous levons toutes les barrières administratives.",
        items: ["Analyse complète : besoins selon les destinations", "Constitution des dossiers : formulaires, justificatifs, traductions", "Relation avec consulats : suivi personnalisé, accélération", "Passeports d'urgence : gestion des situations critiques", "Veille réglementaire : changements de législation anticipés"],
        gain: "Vous voyagez partout, sans jamais penser aux papiers.",
      },
    ],
  },
  {
    num: "03",
    title: "La Fiabilité Totale",
    tag: "Des partenaires dignes de confiance",
    color: "rgba(22,101,52,0.15)",
    services: [
      {
        title: "3.1 Recherche de Fournisseurs Fiables",
        desc: "Trouver le bon partenaire est un art. Nous le maîtrisons pour vous, avec exigence et discernement.",
        items: ["Cahier des charges : nous définissons précisément votre besoin", "Sourcing ciblé : recherche multicritères, nationale et internationale", "Audit préalable : références, solidité financière, réputation", "Mise en concurrence : nous obtenons les meilleures offres", "Présélection : vous ne rencontrez que les meilleurs"],
        gain: "Vous gagnez des semaines de recherche et écartez les risques.",
      },
      {
        title: "3.2 Mise en Relation avec Prestataires Qualifiés",
        desc: "Nous ne donnons pas des noms. Nous installons des relations de confiance.",
        items: ["Présentation croisée : nous connaissons les deux parties", "Accompagnement au premier rendez-vous", "Négociation préliminaire : nous posons les bases", "Contrat type : nous fournissons une trame sécurisée", "Médiation si nécessaire : résolution facilitée des conflits"],
        gain: "Vous travaillez avec des partenaires que nous engageons sur leur qualité.",
      },
      {
        title: "3.3 Négociation & Suivi des Contrats",
        desc: "Un contrat mal négocié est une faute stratégique. Nous protégeons vos intérêts avec rigueur.",
        items: ["Analyse juridique préalable avec nos partenaires juristes", "Négociation commerciale : obtenir les meilleures conditions", "Clauses spécifiques : confidentialité, exclusivité, résiliation", "Tableau de bord contractuel : échéances, renouvellements", "Renégociation : optimisation à chaque échéance"],
        gain: "Vous signez en toute connaissance, sans crainte de mauvaise surprise.",
      },
    ],
  },
  {
    num: "04",
    title: "La Réactivité Absolue",
    tag: "L'administration au service de l'action",
    color: "rgba(197,160,89,0.08)",
    services: [
      {
        title: "4.1 Traitement des Dossiers Administratifs Urgents",
        desc: "Quand l'urgence administrative frappe, nous sommes votre recours immédiat.",
        items: ["Hotline dirigeant : numéro d'urgence 24/7", "Prise en charge immédiate : intervention sous 1 heure", "Tous domaines : social, fiscal, juridique, bancaire", "Relation avec les administrations : nous parlons leur langage", "Suivi jusqu'à résolution : nous ne lâchons rien"],
        gain: "L'urgence devient une formalité, pas une crise.",
      },
      {
        title: "4.2 Gestion des Formalités Complexes",
        desc: "Certaines démarches sont des labyrinthes. Nous en sommes les guides experts.",
        items: ["Dossiers d'investissement : montage et suivi", "Déclarations patrimoniales : accompagnement spécialisé", "Droits de succession : gestion administrative complète", "Expatriation / Rapatriement : toutes les formalités", "Agréments et autorisations : obtention accélérée"],
        gain: "Le complexe devient simple. L'impossible devient possible.",
      },
      {
        title: "4.3 Support Administratif d'Urgence",
        desc: "Pour les situations de crise, nous déployons une cellule de soutien immédiat.",
        items: ["Cellule de crise : équipe dédiée en quelques heures", "Gestion des sinistres : démarches après incident", "Perte de documents : refabrication accélérée", "Problèmes bancaires : intervention auprès des établissements", "Relais avec avocats : interface administrative"],
        gain: "Même dans la tempête, vous gardez le cap.",
      },
    ],
  },
  {
    num: "05",
    title: "Le Sur-Mesure Personnel",
    tag: "Le dirigeant d'abord, la personne ensuite",
    color: "rgba(75,0,130,0.12)",
    services: [
      {
        title: "5.1 Gestion des Tâches Personnelles",
        desc: "Un dirigeant n'a pas deux vies : une professionnelle et une personnelle. Il a une vie. Nous l'organisons tout entière.",
        items: ["Organisation familiale : rentrées scolaires, activités, santé", "Gestion du patrimoine privé : notaire, expert-comptable", "Projets personnels : travaux, recherche de bien", "Démarches courantes : impôts, retraite, organismes sociaux", "Courses d'exception : recherche de biens rares"],
        gain: "Votre vie privée est aussi bien gérée que votre entreprise.",
      },
      {
        title: "5.2 Organisation de l'Agenda Privé",
        desc: "Votre temps personnel mérite la même rigueur que votre temps professionnel.",
        items: ["Planification familiale : vacances, week-ends, événements", "Réservations personnelles : restaurants, spectacles, voyages", "Anniversaires et célébrations : organisation surprise", "Gestion des invitations : réponses, remerciements, présents", "Coordination avec l'agenda professionnel"],
        gain: "Votre vie privée est harmonieuse, jamais chaotique.",
      },
      {
        title: "5.3 Courses & Démarches Personnelles",
        desc: "Ce que vous n'avez pas le temps de faire, nous le faisons pour vous.",
        items: ["Shopping personnalisé : cadeaux, garde-robe, équipement", "Démarches administratives privées : mairie, préfecture, consulat", "Rendez-vous médicaux : prise de rendez-vous, coordination", "Entretien du cadre de vie : pressing, cordonnerie, réparations", "Soins aux animaux : vétérinaire, toilettage, garde"],
        gain: "Votre quotidien est fluide, sans friction.",
      },
      {
        title: "5.4 Accompagnement Sur-Mesure",
        desc: "Pour ceux qui ont besoin d'une présence plus régulière, nous proposons un accompagnement personnalisé et évolutif.",
        items: ["Disponibilité dédiée : un interlocuteur unique", "Forfait mensuel : selon vos besoins réels", "Anticipation proactive : nous devançons vos demandes", "Relation de confiance : nous apprenons à vous connaître", "Confidentialité absolue : clause spécifique au contrat"],
        gain: "Vous avez un alter ego opérationnel qui pense à tout.",
      },
    ],
  },
];

function ServiceAccordion({ service }: { service: typeof pillars[0]["services"][0] }) {
  const [open, setOpen] = useState(false)
  const { isDark } = useTheme()

  return (
    <div
      className="transition-all duration-300"
      style={{ border: "1px solid rgba(197,160,89,0.12)", background: isDark ? "rgba(26,26,26,0.4)" : "rgba(240,237,232,0.6)" }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-heading text-sm tracking-widest uppercase group-hover:text-gold transition-colors duration-300" style={{ color: "var(--text-primary)", fontWeight: 300 }}>
          {service.title}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={16} style={{ color: "#C5A059", flexShrink: 0 }} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6">
              <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>{service.desc}</p>
              <ul className="space-y-2 mb-6">
                {service.items.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1 h-1 rounded-none flex-shrink-0" style={{ background: "#C5A059" }} />
                    <span className="font-body text-sm" style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-start gap-2 p-4" style={{ background: "rgba(75,0,130,0.1)", border: "1px solid rgba(75,0,130,0.2)" }}>
                <span className="font-heading text-xs tracking-widest uppercase flex-shrink-0 mt-0.5" style={{ color: "#22c55e" }}>Votre gain :</span>
                <span className="font-body text-sm italic" style={{ color: "var(--text-primary)" }}>{service.gain}</span>
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

  return (
    <PageTransition>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: isDark ? "radial-gradient(ellipse at 50% 60%, rgba(75,0,130,0.1) 0%, transparent 60%)" : "none" }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-label mb-6">
            Une architecture complète au service de l'excellence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="section-title mb-8" style={{ maxWidth: "700px" }}
          >
            Les <em>5 Piliers</em> de<br />l'Excellence EXIMIA
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7 }} className="divider-gold" />
        </div>
      </section>

      {/* ═══ PILLAR SELECTOR ═══ */}
      <section className="px-6 pb-4 sticky top-20 z-30" style={{ background: isDark ? "rgba(10,10,10,0.95)" : "rgba(248,246,242,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(197,160,89,0.1)" }}>
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-0 min-w-max">
            {pillars.map((p, i) => (
              <button
                key={p.num}
                onClick={() => setActivePillar(i)}
                className="flex items-center gap-3 px-6 py-5 transition-all duration-300 border-b-2"
                style={{
                  borderColor: activePillar === i ? "#C5A059" : "transparent",
                  color: activePillar === i ? "#C5A059" : "var(--text-secondary)",
                }}
              >
                <span className="font-heading text-xs" style={{ fontWeight: 200 }}>{p.num}</span>
                <span className="font-heading text-xs tracking-widest uppercase whitespace-nowrap" style={{ fontWeight: 300, fontSize: "0.65rem" }}>
                  {p.title.split(" ").slice(0, 3).join(" ")}
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
                  style={{ background: pillars[activePillar].color, border: "1px solid rgba(197,160,89,0.15)" }}
                >
                  <span className="font-heading text-6xl block mb-4" style={{ color: "rgba(197,160,89,0.15)", fontWeight: 200 }}>
                    {pillars[activePillar].num}
                  </span>
                  <h2 className="font-heading text-lg tracking-widest uppercase mb-4" style={{ color: "var(--text-primary)", fontWeight: 300 }}>
                    {pillars[activePillar].title}
                  </h2>
                  <p className="font-display text-base italic mb-8" style={{ color: "#C5A059" }}>
                    {pillars[activePillar].tag}
                  </p>
                  <div className="w-full h-px" style={{ background: "rgba(197,160,89,0.2)" }} />
                  <p className="font-body text-xs mt-6" style={{ color: "var(--text-secondary)" }}>
                    {pillars[activePillar].services.length} prestations détaillées
                  </p>
                </div>
              </div>

              {/* Services list */}
              <div className="lg:col-span-2 space-y-3">
                {pillars[activePillar].services.map((service) => (
                  <ServiceAccordion key={service.title} service={service} />
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* ═══ ALL PILLARS OVERVIEW ═══ */}
      <section className="py-24 px-6" style={{ background: isDark ? "#060606" : "#f0ede8" }}>
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <p className="section-label mb-4">Vue Globale</p>
            <h2 className="section-title">Une <em>offre intégrale</em>,<br />pensée pour votre unicité</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {pillars.map((p, i) => (
              <SectionReveal key={p.num} delay={i * 0.1}>
                <button
                  className="pillar-card w-full text-left h-full"
                  onClick={() => { setActivePillar(i); window.scrollTo({ top: 300, behavior: "smooth" }) }}
                >
                  <span className="font-heading text-4xl block mb-4" style={{ color: "rgba(197,160,89,0.15)", fontWeight: 200 }}>{p.num}</span>
                  <h3 className="font-heading text-xs tracking-widest uppercase mb-3" style={{ color: "var(--text-primary)", fontWeight: 300 }}>{p.title}</h3>
                  <p className="font-display text-xs italic" style={{ color: "rgba(197,160,89,0.5)" }}>{p.tag}</p>
                </button>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal className="text-center mt-12">
            <NavLink to="/contact">
              <motion.button whileHover={{ scale: 1.02 }} className="btn-gold">
                Demander un Devis Personnalisé
                <ArrowRight size={14} />
              </motion.button>
            </NavLink>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  )
}
