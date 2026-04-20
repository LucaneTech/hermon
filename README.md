# HERMON EXIMIA — Site Web Premium

> Conciergerie Multi-Domaine · Pointe-Noire, République du Congo

## Stack Technique

- **React 18** + **TypeScript**
- **Vite 5** (bundler ultra-rapide)
- **Tailwind CSS 3** + **DaisyUI**
- **Framer Motion 11** (animations fluides)
- **React Router DOM 6** (navigation multi-pages)
- **Lucide React** (icônes)
- **EmailJS** (formulaire de contact sans backend)

## Installation & Démarrage

```bash
# 1. Dézipper le projet
unzip hermon-eximia.zip
cd hermon-eximia

# 2. Installer les dépendances
npm install

# 3. Lancer en développement
npm run dev

# 4. Build production
npm run build
npm run preview
```

## Configuration EmailJS (Contact)

1. Créer un compte sur [emailjs.com](https://emailjs.com)
2. Créer un **Service** (Gmail, Outlook…)
3. Créer un **Template** avec les variables : `{{name}}`, `{{email}}`, `{{company}}`, `{{category}}`, `{{subject}}`, `{{message}}`
4. Ouvrir `src/pages/Contact.tsx` et remplacer :

```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'   // → votre Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID' // → votre Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'   // → votre Public Key
```

## Structure du Projet

```
src/
├── components/
│   ├── Loader.tsx          # Loader animé au démarrage
│   ├── Navbar.tsx          # Navigation responsive + dark/light
│   ├── Footer.tsx          # Footer complet
│   ├── PageTransition.tsx  # Transitions de pages (Framer Motion)
│   └── SectionReveal.tsx   # Animations au scroll
├── hooks/
│   └── useTheme.tsx        # Context Dark/Light mode
├── layouts/
│   └── MainLayout.tsx      # Layout principal
├── pages/
│   ├── Home.tsx            # Page d'accueil
│   ├── About.tsx           # À propos
│   ├── Cibles.tsx          # Nos cibles
│   ├── Services.tsx        # Services (accordéon interactif)
│   ├── Tarifs.tsx          # Tarification
│   └── Contact.tsx         # Formulaire + EmailJS
├── App.tsx                 # Routing principal
├── main.tsx                # Point d'entrée
└── index.css               # Design tokens + CSS global
```

## Pages & Fonctionnalités

| Page | URL | Fonctionnalités |
|------|-----|----------------|
| Accueil | `/` | Hero cinématique, stats, piliers, CTA |
| À Propos | `/a-propos` | Timeline, positionnement, valeurs |
| Cibles | `/cibles` | 3 profils détaillés + tableau comparatif |
| Services | `/services` | 5 piliers, accordéon interactif |
| Tarifs | `/tarifs` | Sélecteur de durée, grille groupe |
| Contact | `/contact` | Formulaire EmailJS, infos directes |

## Direction Artistique

- **Palette** : Noir profond (`#0a0a0a`) · Violet Royal (`#4B0082`) · Or (`#C5A059`) · Émeraude (`#22c55e`)
- **Typographies** : Cormorant Garamond (serif display) · Josefin Sans (headings) · Lato (body)
- **Style** : Luxe minimaliste souverain · Dark mode premium · Effets glow subtils

## Personnalisation

- **Logo** : Remplacer le SVG inline dans `Navbar.tsx`, `Footer.tsx` et `Loader.tsx`
- **Couleurs** : Modifier les variables CSS dans `index.css` (`:root`)
- **Contenu** : Chaque page est autonome et facilement modifiable
- **Images** : Remplacer les URLs Unsplash par vos propres images

---

Développé avec excellence pour **HERMON EXIMIA** · © 2026
# hermon
