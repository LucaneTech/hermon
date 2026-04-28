import { useState } from 'react'
import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cn } from '../../utils/cn'

const LANGUAGES: { code: string; labelKey: string }[] = [
  { code: 'fr', labelKey: 'language.fr' },
  { code: 'en', labelKey: 'language.en' },
  // { code: 'ar', labelKey: 'language.ar' },
]

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const current = (i18n.resolvedLanguage ?? i18n.language ?? 'fr').split('-')[0]

  const change = async (lng: string) => {
    await i18n.changeLanguage(lng)
    try {
      localStorage.setItem('panval-language', lng)
    } catch (e) {}
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lng
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
    }
    setOpen(false)
  }

  return (
    <div className={cn('relative inline-block', className)}>
      <button
        onClick={() => setOpen(o => !o)}
        className="btn btn-ghost btn-sm gap-1 rounded-sm transition-all duration-200"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Globe size={16} />
        <span className="text-xs font-body font-medium uppercase">{current.toUpperCase()}</span>
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute right-0 mt-2 w-40 bg-base-100 border border-base-300 rounded-sm shadow-md py-1 z-50"
        >
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                role="menuitem"
                onClick={() => change(l.code)}
                className="w-full text-left px-3 py-2 text-sm hover:bg-base-200"
              >
                {t(l.labelKey)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
