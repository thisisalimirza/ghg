/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#eef3fb',
          100: '#d5e3f6',
          200: '#adc8ed',
          300: '#7aa4e1',
          400: '#4a7bd2',
          500: '#285bbd',
          600: '#1d47a0',
          700: '#183782',
          800: '#122965',
          900: '#0c1d49',
          950: '#060c24',
        },
        parchment: {
          50:  '#fefdf9',
          100: '#fdf8ee',
          200: '#f9f0d8',
          300: '#f2e4bc',
          400: '#e8d095',
          500: '#d9b768',
          600: '#c49840',
          700: '#a37a2e',
          800: '#7f5f22',
          900: '#5a431a',
        },
        gold: {
          300: '#e8c675',
          400: '#d4a84b',
          500: '#b8882a',
          600: '#946c1e',
        },
        ink: {
          50:  '#f6f6f6',
          100: '#ebebeb',
          200: '#d4d4d4',
          300: '#b0b0b0',
          400: '#858585',
          500: '#616161',
          600: '#464646',
          700: '#323232',
          800: '#222222',
          900: '#161616',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:    ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'fade-in':    'fadeIn 0.6s ease-out both',
        'slide-right':'slideRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
