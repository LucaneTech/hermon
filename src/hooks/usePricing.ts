// hooks/usePricing.ts
import { useTranslation } from 'react-i18next'
import { PricingPlan, GroupExample, durations, durationKeys, pricingTranslations } from '../data/pricing.data'

export const usePricing = () => {
  const { i18n, t } = useTranslation('pricing')
  const currentLang = i18n.language as 'fr' | 'en'
  
  const getPlans = (): PricingPlan[] => {
    const data = pricingTranslations[currentLang] || pricingTranslations.fr
    return data.plans
  }
  
  const getGroupExample = (): GroupExample[] => {
    const data = pricingTranslations[currentLang] || pricingTranslations.fr
    return data.groupExample
  }
  
  const getHeroContent = () => {
    const data = pricingTranslations[currentLang] || pricingTranslations.fr
    return data.hero
  }
  
  const getGroupSectionContent = () => {
    const data = pricingTranslations[currentLang] || pricingTranslations.fr
    return data.groupSection
  }
  
  const getDiagnosticContent = () => {
    const data = pricingTranslations[currentLang] || pricingTranslations.fr
    return data.diagnostic
  }
  
  const getStaticText = (key: 'recommended' | 'perAgent' | 'chooseOffer'): string => {
    const data = pricingTranslations[currentLang] || pricingTranslations.fr
    return data[key]
  }
  
  const getDurations = (): string[] => {
    return durations
  }
  
  return {
    getPlans,
    getGroupExample,
    getHeroContent,
    getGroupSectionContent,
    getDiagnosticContent,
    getStaticText,
    getDurations,
    durations: getDurations(),
    currentLang
  }
}

export const fmtPrice = (n: number): string => {
  return new Intl.NumberFormat('fr-FR').format(n) + ' FCFA'
}