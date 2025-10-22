// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tech: {
          cyan: '#06b6d4',
          purple: '#8b5cf6', 
          blue: '#2563eb',
          green: '#10b981'
        }
      }
    },
  },
  plugins: [],
}