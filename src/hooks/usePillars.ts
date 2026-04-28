// hooks/usePillars.ts - Nouveau hook personnalisé pour utiliser facilement les données
import { useTranslation } from 'react-i18next'
import { Pillar } from '../data/service.data'

export const usePillars = () => {
  const { t } = useTranslation('pillars')
  
  const getPillars = (): Pillar[] => {
    return t('pillars', { returnObjects: true }) as Pillar[]
  }
  
  const getPillarByIndex = (index: number): Pillar | undefined => {
    const pillars = getPillars()
    return pillars[index]
  }
  
  const getPillarByNum = (num: string): Pillar | undefined => {
    const pillars = getPillars()
    return pillars.find(pillar => pillar.num === num)
  }
  
  return {
    getPillars,
    getPillarByIndex,
    getPillarByNum
  }
}