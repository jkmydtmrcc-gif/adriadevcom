/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#07070E',
        surface: '#0D0D1A',
        elevated: '#13132A',
        border: '#1E1E3A',
        accent: '#6C5CE7',
        'accent-light': '#A29BFE',
        success: '#00CEC9',
        'text-primary': '#EAEAF5',
        'text-secondary': '#8888AA',
        'text-muted': '#44446A',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      boxShadow: {
        'accent-glow': '0 0 30px rgba(108, 92, 231, 0.3)',
        'accent-glow-lg': '0 0 50px rgba(108, 92, 231, 0.25)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #6C5CE7, #A29BFE)',
      },
    },
  },
  plugins: [],
}
