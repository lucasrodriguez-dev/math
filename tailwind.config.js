/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,css}', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#1E40AF',
          light: '#aed6f1',
          dark: '#1a5276'
        },
        secondary: '#F59E0B',
        accent: '#10B981',
        bgDark: '#1F2937',
        textLight: '#F3F4F6'
      },
      fontFamily: {
        questrial: ['Questrial', 'system-ui'],
        math: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}

