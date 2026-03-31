/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,css}', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#2856cd',
          light: '#DBEAFE',
          dark: '#243f84'
        },
        link: '#686DB6',
        secondary: '#c3dcfa',
        terciary: '#ddd',
        accent: '#FACC15',
        background: '#F8FAFF',
        surface: '#eeeeef',
        result: '#dbeafe',
        header: '#1e293b',
        bgDark: '#1F2937',
        text: '#1F2937',
        textLight: '#F8FAFF'
      },
      fontFamily: {
        questrial: ['Questrial', 'system-ui'],
        math: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}

