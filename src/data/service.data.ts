// data.ts
export interface ServiceItem {
  title: string;
  desc: string;
  items: string[];
  gain: string;
}

export interface Pillar {
  num: string;
  title: string;
  tag: string;
  services: ServiceItem[];
}

// Données françaises
const pillarsFr: Pillar[] = [
   {
    num: '01',
    title: 'Excellence Événementielle & Relationnelle',
    tag: "L'art de recevoir dignement",
    
    services: [
      {
        title: '1.1 Organisation de Réunions Stratégiques',
        desc: `Nous concevons et orchestrons vos réunions les plus importantes avec une exigence absolue — du choix du lieu à l'accueil des participants.`,
        items: [
          "Sélection de lieux d'exception : châteaux, institutions, espaces confidentiels",
          'Scénographie de réunion : agencement, équipements technologiques, supports',
          'Accueil personnalisé : protocole, badge, cadeaux de bienvenue',
          "Restauration d'excellence : traiteurs étoilés, mets raffinés, vins de prestige",
          'Gestion des imprévus : anticipation et solutions immédiates',
        ],
        gain: 'Vous arrivez, vous présidez, vous repartez. Tout le reste est notre affaire.',
      },
      {
        title: "1.2 Événements d'Entreprise de Prestige",
        desc: `Des lancements de produit aux séminaires de direction, nous créons des moments mémorables qui renforcent votre image et fédèrent vos équipes.`,
        items: [
          'Conception sur-mesure : scénario, fil rouge, expérience invité',
          'Lieux emblématiques : réservation de lieux fermés au public',
          'Direction artistique : décoration, ambiance, habillage musical',
          "Animation d'exception : conférenciers, artistes, orchestres",
          "Capitaine d'événement : un responsable unique pour vous représenter",
        ],
        gain: "Vous impressionnez sans être impressionné par la logistique.",
      },
      {
        title: '1.3 Assistance VIP pour Dirigeants & Partenaires',
        desc: `Un accompagnement discret et attentionné pour vos invités de marque, partenaires stratégiques et talents exceptionnels.`,
        items: [
          'Accueil personnalisé : prise en charge aéroportuaire',
          'Transport prestige : véhicules avec chauffeur',
          "Hébergement d'exception : suites présidentielles, résidences privées",
          "Programme d'accompagnement : visites privées, expériences exclusives",
          'Cadeaux de départ : souvenirs choisis avec soin',
        ],
        gain: 'Vos partenaires se sentent royaux. Votre image rayonne.',
      },
      {
        title: "1.4 Cadeaux d'Affaires Sur-Mesure",
        desc: `Offrir n'est pas un geste anodin — c'est un message. Nous concevons des présents qui portent votre signature et votre considération.`,
        items: [
          'Analyse de la cible : qui offrez-vous ? pourquoi ?',
          "Sourcing d'exception : artisans d'art, créateurs, maisons prestigieuses",
          'Personnalisation : gravure, marquage, coffret sur-mesure',
          'Livraison : remise en main propre ou envoi soigné',
          'Suivi : accusé de réception et retour',
        ],
        gain: "Vos cadeaux parlent de vous avant même d'être ouverts.",
      },
    ],
  },

  {
    num: '02',
    title: 'La Mobilité Intelligente',
    tag: 'Voyager sans jamais être déplacé',
   
    services: [
      {
        title: '2.1 Gestion Intégrale des Déplacements',
        desc: `Chaque déplacement est une séquence stratégique. Nous en orchestrons tous les détails pour qu'elle se déroule sans la moindre friction.`,
        items: [
          'Audit du besoin : objectifs, contraintes, préférences',
          'Itinéraire optimisé : gain de temps, confort, efficacité',
          'Plan B systématique : anticipation des aléas',
          'Document de voyage : un dossier complet remis au départ',
          'Suivi en temps réel : assistance pendant tout le trajet',
        ],
        gain: "Vous vous concentrez sur l'objet de votre voyage. Nous gérons le voyage lui-même.",
      },
      {
        title: '2.2 Réservations Multi-Transports',
        desc: `Nous accédons aux meilleures places, aux meilleurs tarifs et aux meilleures conditions, partout dans le monde.`,
        items: [
          'Aérien : premières classes, classes affaires, jets privés',
          'Ferroviaire : accès aux salons, accompagnement en gare',
          'Maritime : yachts, navires de prestige',
          'Terrestre : véhicules avec chauffeur, limousines, voitures de collection',
          'Urgence : modification de dernière minute',
        ],
        gain: 'Vous voyagez comme vous décidez : sans effort et avec style.',
      },
      {
        title: "2.3 Hébergement d'Exception",
        desc: `Le lieu où vous posez vos valises doit être à la hauteur de ce que vous êtes.`,
        items: [
          'Palaces internationaux : accès aux suites présidentielles',
          'Résidences privées : locations confidentielles',
          'Clubs de dirigeants : accès privilégié',
          'Préparatifs : fleurs, température, presse, préférences',
          'Discrétion absolue : confidentialité garantie',
        ],
        gain: 'Vous arrivez dans un lieu qui vous attend.',
      },
      {
        title: '2.4 Obtention de Visas & Formalités',
        desc: `Les frontières ne doivent pas être des obstacles.`,
        items: [
          'Analyse complète selon les destinations',
          'Constitution des dossiers',
          'Relation avec consulats',
          "Passeports d'urgence",
          'Veille réglementaire',
        ],
        gain: 'Vous voyagez partout, sans penser aux papiers.',
      },
    ],
  },

  {
    num: '03',
    title: 'La Fiabilité Totale',
    tag: 'Des partenaires dignes de confiance',
    
    services: [
      {
        title: '3.1 Recherche de Fournisseurs Fiables',
        desc: `Trouver le bon partenaire est un art.`,
        items: [
          'Cahier des charges précis',
          'Sourcing multicritères',
          'Audit : références et réputation',
          'Mise en concurrence',
          'Présélection',
        ],
        gain: 'Vous gagnez du temps et évitez les risques.',
      },
      {
        title: '3.2 Mise en Relation avec Prestataires Qualifiés',
        desc: `Nous installons des relations de confiance.`,
        items: [
          'Présentation croisée',
          'Accompagnement',
          'Négociation préliminaire',
          'Contrat type',
          'Médiation si nécessaire',
        ],
        gain: 'Vous travaillez avec des partenaires fiables.',
      },
      {
        title: '3.3 Négociation & Suivi des Contrats',
        desc: `Nous protégeons vos intérêts.`,
        items: [
          'Analyse juridique',
          'Négociation commerciale',
          'Clauses spécifiques',
          'Suivi contractuel',
          'Renégociation',
        ],
        gain: 'Vous signez sans mauvaise surprise.',
      },
    ],
  },

  {
    num: '04',
    title: 'La Réactivité Absolue',
    tag: "L'administration au service de l'action",
   
    services: [
      {
        title: '4.1 Traitement des Dossiers Administratifs Urgents',
        desc: `Quand l'urgence frappe, nous intervenons immédiatement.`,
        items: [
          'Hotline 24/7',
          'Intervention rapide',
          'Tous domaines',
          'Relation avec administrations',
          'Suivi complet',
        ],
        gain: "L'urgence devient une formalité.",
      },
      {
        title: '4.2 Gestion des Formalités Complexes',
        desc: `Nous simplifions les démarches complexes.`,
        items: [
          "Dossiers d'investissement",
          'Déclarations patrimoniales',
          'Successions',
          'Expatriation',
          'Autorisations',
        ],
        gain: 'Le complexe devient simple.',
      },
      {
        title: "4.3 Support Administratif d'Urgence",
        desc: `Une cellule de crise dédiée.`,
        items: [
          'Cellule dédiée',
          'Gestion sinistres',
          'Refabrication documents',
          'Problèmes bancaires',
          'Relais avocats',
        ],
        gain: 'Même dans la tempête, vous gardez le cap.',
      },
    ],
  },

  {
    num: '05',
    title: 'Le Sur-Mesure Personnel',
    tag: "Le dirigeant d'abord, la personne ensuite",
   
    services: [
      {
        title: '5.1 Gestion des Tâches Personnelles',
        desc: `Nous organisons votre vie dans sa globalité.`,
        items: [
          'Organisation familiale',
          'Gestion patrimoine',
          'Projets personnels',
          'Démarches administratives',
          'Recherche de biens',
        ],
        gain: 'Votre vie privée est maîtrisée.',
      },
      {
        title: "5.2 Organisation de l'Agenda Privé",
        desc: `Votre temps personnel mérite rigueur.`,
        items: [
          'Planification',
          'Réservations',
          'Célébrations',
          'Invitations',
          'Coordination',
        ],
        gain: 'Votre vie privée est harmonieuse.',
      },
      {
        title: '5.3 Courses & Démarches Personnelles',
        desc: `Nous faisons ce que vous n'avez pas le temps de faire.`,
        items: [
          'Shopping',
          'Démarches',
          'Rendez-vous médicaux',
          'Entretien',
          'Soins animaux',
        ],
        gain: 'Votre quotidien est fluide.',
      },
      {
        title: '5.4 Accompagnement Sur-Mesure',
        desc: `Un accompagnement personnalisé.`,
        items: [
          'Interlocuteur dédié',
          'Forfait mensuel',
          'Anticipation',
          'Relation de confiance',
          'Confidentialité',
        ],
        gain: 'Un alter ego opérationnel à vos côtés.',
      },
    ],
  },
];

// Données anglaises (version traduite)
const pillarsEn: Pillar[] = [
  {
    num: '01',
    title: 'Event & Relationship Excellence',
    tag: "The art of dignified hospitality",
    
    services: [
      {
        title: '1.1 Strategic Meeting Organization',
        desc: `We design and orchestrate your most important meetings with absolute precision — from venue selection to participant reception.`,
        items: [
          "Exceptional venue selection: castles, institutions, confidential spaces",
          'Meeting scenography: layout, technology equipment, materials',
          'Personalized welcome: protocol, badges, welcome gifts',
          'Premium catering: Michelin-starred caterers, refined dishes, prestige wines',
          'Contingency management: anticipation and immediate solutions',
        ],
        gain: 'You arrive, you preside, you leave. Everything else is our business.',
      },
      {
        title: '1.2 Prestige Corporate Events',
        desc: `From product launches to executive seminars, we create memorable moments that enhance your image and unite your teams.`,
        items: [
          'Tailor-made design: scenario, theme, guest experience',
          'Iconic venues: booking closed-to-public locations',
          'Artistic direction: decoration, ambiance, musical arrangements',
          'Exceptional entertainment: speakers, artists, orchestras',
          'Event captain: a single representative for you',
        ],
        gain: "You impress without being overwhelmed by logistics.",
      },
      {
        title: '1.3 VIP Assistance for Executives & Partners',
        desc: `Discreet and attentive support for your distinguished guests, strategic partners, and exceptional talents.`,
        items: [
          'Personalized welcome: airport pickup',
          'Prestige transport: chauffeured vehicles',
          'Exceptional accommodation: presidential suites, private residences',
          'Accompaniment program: private tours, exclusive experiences',
          'Departure gifts: carefully chosen souvenirs',
        ],
        gain: 'Your partners feel royal. Your image shines.',
      },
      {
        title: "1.4 Custom Corporate Gifts",
        desc: `Giving is not a trivial gesture — it's a message. We design gifts that carry your signature and consideration.`,
        items: [
          'Target analysis: who are you giving to? why?',
          'Exceptional sourcing: artisans, creators, prestigious houses',
          'Personalization: engraving, marking, custom box',
          'Delivery: hand delivery or careful shipping',
          'Follow-up: acknowledgment of receipt and feedback',
        ],
        gain: "Your gifts speak about you before they're even opened.",
      },
    ],
  },

  {
    num: '02',
    title: 'Intelligent Mobility',
    tag: 'Travel without ever being out of place',
   
    services: [
      {
        title: '2.1 Comprehensive Travel Management',
        desc: `Every trip is a strategic sequence. We orchestrate every detail so it unfolds without the slightest friction.`,
        items: [
          'Needs assessment: objectives, constraints, preferences',
          'Optimized itinerary: time savings, comfort, efficiency',
          'Systematic Plan B: anticipating contingencies',
          'Travel documents: a complete file provided upon departure',
          'Real-time tracking: assistance throughout the journey',
        ],
        gain: "You focus on the purpose of your trip. We handle the travel itself.",
      },
      {
        title: '2.2 Multi-Transport Reservations',
        desc: `We access the best seats, best rates, and best conditions, anywhere in the world.`,
        items: [
          'Air: first class, business class, private jets',
          'Rail: lounge access, station assistance',
          'Maritime: yachts, prestige vessels',
          'Ground: chauffeured vehicles, limousines, classic cars',
          'Emergency: last-minute changes',
        ],
        gain: 'You travel as you decide: effortlessly and in style.',
      },
      {
        title: "2.3 Exceptional Accommodation",
        desc: `Where you stay must match who you are.`,
        items: [
          'International palaces: access to presidential suites',
          'Private residences: confidential rentals',
          'Executive clubs: privileged access',
          'Preparations: flowers, temperature, press, preferences',
          'Absolute discretion: guaranteed confidentiality',
        ],
        gain: 'You arrive at a place that has been waiting for you.',
      },
      {
        title: '2.4 Visa Procurement & Formalities',
        desc: `Borders should not be obstacles.`,
        items: [
          'Complete analysis based on destinations',
          'File preparation',
          'Consulate relations',
          'Emergency passports',
          'Regulatory monitoring',
        ],
        gain: 'You travel anywhere, without thinking about paperwork.',
      },
    ],
  },

  {
    num: '03',
    title: 'Total Reliability',
    tag: 'Trustworthy partners',
    
    services: [
      {
        title: '3.1 Reliable Supplier Research',
        desc: `Finding the right partner is an art.`,
        items: [
          'Detailed specifications',
          'Multi-criteria sourcing',
          'Audit: references and reputation',
          'Competitive bidding',
          'Shortlisting',
        ],
        gain: 'You save time and avoid risks.',
      },
      {
        title: '3.2 Connecting with Qualified Service Providers',
        desc: `We establish trust-based relationships.`,
        items: [
          'Cross-presentation',
          'Ongoing support',
          'Preliminary negotiation',
          'Standard contract',
          'Mediation if necessary',
        ],
        gain: 'You work with reliable partners.',
      },
      {
        title: '3.3 Contract Negotiation & Monitoring',
        desc: `We protect your interests.`,
        items: [
          'Legal analysis',
          'Commercial negotiation',
          'Specific clauses',
          'Contractual follow-up',
          'Renegotiation',
        ],
        gain: 'You sign without unpleasant surprises.',
      },
    ],
  },

  {
    num: '04',
    title: 'Absolute Responsiveness',
    tag: "Administration in service of action",
   
    services: [
      {
        title: '4.1 Urgent Administrative File Processing',
        desc: `When urgency strikes, we intervene immediately.`,
        items: [
          '24/7 Hotline',
          'Rapid intervention',
          'All domains',
          'Government relations',
          'Complete follow-up',
        ],
        gain: "Urgency becomes a formality.",
      },
      {
        title: '4.2 Complex Formalities Management',
        desc: `We simplify complex procedures.`,
        items: [
          'Investment files',
          'Asset declarations',
          'Successions',
          'Expatriation',
          'Authorizations',
        ],
        gain: 'The complex becomes simple.',
      },
      {
        title: "4.3 Emergency Administrative Support",
        desc: `A dedicated crisis unit.`,
        items: [
          'Dedicated unit',
          'Claims management',
          'Document reissuance',
          'Banking issues',
          'Legal relay',
        ],
        gain: 'Even in the storm, you stay on course.',
      },
    ],
  },

  {
    num: '05',
    title: 'Personal Customization',
    tag: "The leader first, the person second",
   
    services: [
      {
        title: '5.1 Personal Task Management',
        desc: `We organize your entire life.`,
        items: [
          'Family organization',
          'Asset management',
          'Personal projects',
          'Administrative procedures',
          'Property search',
        ],
        gain: 'Your private life is under control.',
      },
      {
        title: "5.2 Private Agenda Organization",
        desc: `Your personal time deserves rigor.`,
        items: [
          'Planning',
          'Reservations',
          'Celebrations',
          'Invitations',
          'Coordination',
        ],
        gain: 'Your private life runs smoothly.',
      },
      {
        title: '5.3 Personal Errands & Tasks',
        desc: `We do what you don't have time to do.`,
        items: [
          'Shopping',
          'Administrative tasks',
          'Medical appointments',
          'Property maintenance',
          'Pet care',
        ],
        gain: 'Your daily life flows effortlessly.',
      },
      {
        title: '5.4 Custom Concierge Support',
        desc: `Personalized support.`,
        items: [
          'Dedicated contact person',
          'Monthly package',
          'Anticipation',
          'Trust-based relationship',
          'Confidentiality',
        ],
        gain: 'An operational alter ego by your side.',
      },
    ],
  },
];

// Export d'un objet avec les deux langues
export const translations = {
  fr: {
    pillars: pillarsFr
  },
  en: {
    pillars: pillarsEn
  }
};

// Hook personnalisé pour utiliser avec i18next
export const getPillarsByLanguage = (language: string): Pillar[] => {
  return translations[language as keyof typeof translations]?.pillars || translations.fr.pillars;
};