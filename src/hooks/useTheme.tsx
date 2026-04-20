import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  isDark: boolean
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  isDark: true,
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('hermon-theme') as Theme
    if (saved) setTheme(saved)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light-mode')
      root.style.setProperty('--bg-dark', '#f8f6f2')
      root.style.setProperty('--bg-surface', '#ffffff')
      root.style.setProperty('--bg-elevated', '#f0ede8')
      root.style.setProperty('--text-primary', '#1a1a1a')
      root.style.setProperty('--text-secondary', '#4a4540')
    } else {
      root.classList.remove('light-mode')
      root.style.setProperty('--bg-dark', '#0a0a0a')
      root.style.setProperty('--bg-surface', '#111111')
      root.style.setProperty('--bg-elevated', '#1a1a1a')
      root.style.setProperty('--text-primary', '#f0ede8')
      root.style.setProperty('--text-secondary', '#a09890')
    }
    localStorage.setItem('hermon-theme', theme)
    document.body.style.backgroundColor = theme === 'dark' ? '#0a0a0a' : '#f8f6f2'
    document.body.style.color = theme === 'dark' ? '#f0ede8' : '#1a1a1a'
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
