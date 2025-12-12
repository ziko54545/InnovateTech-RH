/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#020817',
        surface: '#0f172a',
        primary: '#06b6d4',
        secondary: '#3b82f6',
        accent: '#8b5cf6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 2s linear',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
