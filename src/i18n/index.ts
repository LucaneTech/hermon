// i18n.ts - Version avec promesse d'initialisation
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { translations } from '../data/service.data'
import { pricingTranslations } from '../data/pricing.data'

const availableLanguages = ['fr', 'en', 'ar'] as const
export type AppLanguage = typeof availableLanguages[number]

// Fonction pour ajouter les ressources personnalisées
const addCustomResources = () => {
  // Ajouter les piliers comme ressources supplémentaires
  Object.keys(translations).forEach((lang) => {
    if (i18n.hasResourceBundle(lang, 'pillars')) {
      i18n.removeResourceBundle(lang, 'pillars')
    }
    i18n.addResourceBundle(lang, 'pillars', translations[lang as keyof typeof translations], true, true)
  })

  // Ajouter les ressources de pricing
  Object.keys(pricingTranslations).forEach((lang) => {
    if (i18n.hasResourceBundle(lang, 'pricing')) {
      i18n.removeResourceBundle(lang, 'pricing')
    }
    i18n.addResourceBundle(lang, 'pricing', pricingTranslations[lang as keyof typeof pricingTranslations], true, true)
  })
}

// Initialiser i18n avec une promesse
const initI18n = async () => {
  await i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      supportedLngs: [...availableLanguages],
      fallbackLng: 'fr',
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      detection: {
        order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        caches: ['localStorage'],
        lookupLocalStorage: 'panval-language',
      },
      react: {
        useSuspense: false,
      },
      ns: ['common', 'home', 'pillars', 'pricing', 'cibles', 'contact'],
      defaultNS: 'common',
    })

  // Ajouter les ressources après initialisation
  addCustomResources()
  
  // Définir les attributs HTML
  const initial = i18n.resolvedLanguage ?? i18n.language ?? 'fr'
  setHtmlAttributes(initial)
}

const setHtmlAttributes = (lng: string) => {
  if (typeof document === 'undefined') return
  const short = lng.split('-')[0]
  document.documentElement.lang = short
  document.documentElement.dir = short === 'ar' ? 'rtl' : 'ltr'
  try {
    localStorage.setItem('panval-language', short)
  } catch (e) {
    // ignore
  }
}

// Gérer les changements de langue
i18n.on('languageChanged', (lng) => {
  setHtmlAttributes(lng)
  addCustomResources()
})

// Exécuter l'initialisation
initI18n()

export default i18n