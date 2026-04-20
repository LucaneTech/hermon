/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0a0a0a',
        'bg-anthracite': '#111111',
        'bg-surface': '#1a1a1a',
        'royal-purple': '#4B0082',
        'royal-purple-light': '#6B21A8',
        'gold': '#C5A059',
        'gold-light': '#D4B87A',
        'gold-dark': '#A8843A',
        'emerald': '#166534',
        'emerald-light': '#22c55e',
        'text-primary': '#f0ede8',
        'text-secondary': '#a09890',
        'text-muted': '#6b6560',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        heading: ['Josefin Sans', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.3em',
        'widest-3': '0.5em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C5A059 0%, #D4B87A 50%, #A8843A 100%)',
        'purple-gradient': 'linear-gradient(135deg, #4B0082 0%, #6B21A8 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.7s ease forwards',
        'shimmer': 'shimmer 2s infinite linear',
        'pulse-gold': 'pulseGold 3s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(197, 160, 89, 0)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(197, 160, 89, 0.3)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark', 'light'],
  },
}
