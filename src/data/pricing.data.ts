// data/pricingData.ts

export type Duration = '1 Mois' | '3 Mois' | '6 Mois' | '9 Mois' | '12 Mois'
export type DurationKey = '1M' | '3M' | '6M' | '9M' | '12M'

export const durations: Duration[] = ['1 Mois', '3 Mois', '6 Mois', '9 Mois', '12 Mois']
export const durationKeys: DurationKey[] = ['1M', '3M', '6M', '9M', '12M']

export interface PricingPlan {
  id: string
  title: string
  subtitle: string
  description: string
  prices: number[]
  availability: string
  features: string[]
  accent: string
  accentBg: string
  featured: boolean
}

export interface GroupExample {
  cat: string
  prices: number[]
}

// Données Françaises
export const plansFr: PricingPlan[] = [
  {
    id: 'talent',
    title: 'Talent',
    subtitle: 'Cadres · Collaborateurs à fort potentiel',
    description: "L'excellence accessible pour les talents qui construisent l'avenir.",
    prices: [180_000, 480_000, 900_000, 1_250_000, 1_600_000],
    availability: 'Jours ouvrés · 8h–20h',
    features: [
      'Assistance jours ouvrés',
      'Services quotidiens',
      'Courses & pressing',
      'Administratif courant',
      'Organisation personnelle',
      'Plateforme digitale dédiée',
    ],
    accent: '#22c55e',
    accentBg: 'rgba(22,101,52,0.1)',
    featured: false,
  },
  {
    id: 'operationnelle',
    title: 'Opérationnelle',
    subtitle: 'Cadres Dirigeants · Managers Supérieurs · Experts',
    description: 'La fluidité opérationnelle pour ceux qui sont en mouvement permanent.',
    prices: [350_000, 950_000, 1_800_000, 2_500_000, 3_200_000],
    availability: '7j/7 · 6h–22h',
    features: [
      'Assistance prioritaire 6h–22h',
      'Gestion des déplacements',
      'Support administratif urgent',
      'Tâches personnelles courantes',
      'Hotline dédiée',
      'Événements & protocole',
    ],
    accent: '#C5A059',
    accentBg: 'rgba(197,160,89,0.08)',
    featured: true,
  },
  {
    id: 'strategique',
    title: 'Stratégique',
    subtitle: 'Dirigeants · COMEX · Actionnaires · Associés',
    description: "La souveraineté absolue pour les décideurs qui ne peuvent pas se permettre d'attendre.",
    prices: [600_000, 1_700_000, 3_200_000, 4_500_000, 5_500_000],
    availability: '24h/24 · 7j/7 · 365j/an',
    features: [
      'Disponibilité 24/7/365',
      'Interlocuteur Senior dédié',
      'Assistance illimitée pro & privée',
      'Agenda privé intégral',
      'Accompagnement physique',
      'Confidentialité absolue contractuelle',
    ],
    accent: '#DAB1DA',
    accentBg: 'rgba(75,0,130,0.1)',
    featured: false,
  },
]

export const groupExampleFr: GroupExample[] = [
  { cat: 'Stratégiques', prices: [6_000_000, 17_000_000, 32_000_000, 45_000_000, 55_000_000] },
  { cat: 'Opérationnels', prices: [3_500_000, 9_500_000, 18_000_000, 25_000_000, 32_000_000] },
  { cat: 'Talents', prices: [1_800_000, 4_800_000, 9_000_000, 12_500_000, 16_000_000] },
]

// Données Anglaises
export const plansEn: PricingPlan[] = [
  {
    id: 'talent',
    title: 'Talent',
    subtitle: 'Executives · High-potential Employees',
    description: "Accessible excellence for talents building the future.",
    prices: [180_000, 480_000, 900_000, 1_250_000, 1_600_000],
    availability: 'Business days · 8am–8pm',
    features: [
      'Weekday assistance',
      'Daily services',
      'Errands & dry cleaning',
      'Routine administrative tasks',
      'Personal organization',
      'Dedicated digital platform',
    ],
    accent: '#22c55e',
    accentBg: 'rgba(22,101,52,0.1)',
    featured: false,
  },
  {
    id: 'operationnelle',
    title: 'Operational',
    subtitle: 'Senior Executives · Managers · Experts',
    description: 'Operational flow for those in constant motion.',
    prices: [350_000, 950_000, 1_800_000, 2_500_000, 3_200_000],
    availability: '7/7 · 6am–10pm',
    features: [
      'Priority assistance 6am–10pm',
      'Travel management',
      'Urgent administrative support',
      'Routine personal tasks',
      'Dedicated hotline',
      'Events & protocol',
    ],
    accent: '#C5A059',
    accentBg: 'rgba(197,160,89,0.08)',
    featured: true,
  },
  {
    id: 'strategique',
    title: 'Strategic',
    subtitle: 'Leaders · Executive Committee · Shareholders · Partners',
    description: "Absolute sovereignty for decision-makers who can't afford to wait.",
    prices: [600_000, 1_700_000, 3_200_000, 4_500_000, 5_500_000],
    availability: '24/7 · 365 days/year',
    features: [
      '24/7/365 availability',
      'Dedicated Senior Contact',
      'Unlimited professional & personal assistance',
      'Complete private agenda management',
      'Physical accompaniment',
      'Contractual absolute confidentiality',
    ],
    accent: '#DAB1DA',
    accentBg: 'rgba(75,0,130,0.1)',
    featured: false,
  },
]

export const groupExampleEn: GroupExample[] = [
  { cat: 'Strategic', prices: [6_000_000, 17_000_000, 32_000_000, 45_000_000, 55_000_000] },
  { cat: 'Operational', prices: [3_500_000, 9_500_000, 18_000_000, 25_000_000, 32_000_000] },
  { cat: 'Talent', prices: [1_800_000, 4_800_000, 9_000_000, 12_500_000, 16_000_000] },
]

// Export complet pour i18n
export const pricingTranslations = {
  fr: {
    durations,
    plans: plansFr,
    groupExample: groupExampleFr,
    hero: {
      label: 'Investissement & Engagement',
      title1: 'Des Tarifs à la hauteur',
      title2: 'ambition',
      cta: 'Découvrir nos tarifs',
      description: 'Nos tarifs reflètent l\'excellence, la rareté et la valeur réelle du service. Nous n\'accompagnons que ceux qui ont compris que le temps libéré n\'a pas de prix.'
    },
    groupSection: {
      label: 'Offre Entreprise',
      title: 'Exemple pour un',
      titleEm: 'groupe de 10',
      description: 'Équipez l\'ensemble de vos équipes dirigeantes. Des conditions préférentielles sont négociables.',
      category: 'Catégorie'
    },
    diagnostic: {
      title: 'Diagnostic Offert (2h)',
      description: 'Nous vous proposons une séance d\'audit de 2 heures pour identifier les sources d\'éparpillement dans votre organisation personnelle et professionnelle.',
      cta: 'Réserver mon Diagnostic'
    },
    recommended: 'Recommandé',
    perAgent: 'par agent',
    chooseOffer: 'Choisir cette offre'
  },
  en: {
    durations,
    plans: plansEn,
    groupExample: groupExampleEn,
    hero: {
      label: 'Investment & Commitment',
      title1: 'Pricing that matches',
      title2: 'ambition',
      cta: 'Discover our pricing',
      description: 'Our prices reflect excellence, rarity, and the true value of our service. We only accompany those who understand that freed time is priceless.'
    },
    groupSection: {
      label: 'Corporate Offer',
      title: 'Example for a',
      titleEm: 'group of 10',
      description: 'Equip all your executive teams. Preferential terms are negotiable.',
      category: 'Category'
    },
    diagnostic: {
      title: 'Complimentary Assessment (2h)',
      description: 'We offer a 2-hour audit session to identify sources of dispersion in your personal and professional organization.',
      cta: 'Book my Assessment'
    },
    recommended: 'Recommended',
    perAgent: 'per agent',
    chooseOffer: 'Choose this offer'
  }
}