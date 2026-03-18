/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#e8e8e0',
        primary: '#f5a623',
        secondary: '#8af0e6',
        muted: '#111111',
        accent: '#222222',
        'muted-foreground': '#a0a0a0',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        display: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
