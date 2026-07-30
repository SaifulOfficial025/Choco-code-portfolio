/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cc: {
          green: '#2E7D32',
          'green-light': '#43A047',
          'green-dark': '#1B5E20',
          'green-50': '#E8F5E9',
          'green-100': '#C8E6C9',
          yellow: '#F9A825',
          'yellow-light': '#FFD54F',
          'yellow-dark': '#F57F17',
          'yellow-50': '#FFFDE7',
          cream: '#FFFDF7',
          'warm-white': '#FFF8E7',
          black: '#1A1A1A',
          gray: '#6B7280',
          'gray-light': '#9CA3AF',
          'gray-50': '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['Roboto Flex', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
        serif: ['Playfair Display', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 1s ease-out forwards',
        'slide-in-right': 'slide-in-right 1s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)', opacity: '0.5' },
          '50%': { transform: 'translateY(-20px)', opacity: '0.8' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(46, 125, 50, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(46, 125, 50, 0.3)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'choco-gradient': 'linear-gradient(135deg, #FFFDF7 0%, #E8F5E9 50%, #FFFDE7 100%)',
        'green-gradient': 'linear-gradient(135deg, #2E7D32 0%, #43A047 100%)',
        'yellow-gradient': 'linear-gradient(135deg, #F9A825 0%, #FFD54F 100%)',
        'hero-gradient': 'linear-gradient(135deg, #E8F5E9 0%, #FFFDE7 50%, #FFFDF7 100%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'light'
    ],
  },
}
