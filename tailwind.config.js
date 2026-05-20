/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: '#0052ff',
        cyan: {
          400: '#00f0ff',
          500: '#06b6d4',
        }
      },
      boxShadow: {
        'glow-electric': '0 0 20px rgba(0, 82, 255, 0.35)',
        'glow-cyan': '0 0 20px rgba(0, 240, 255, 0.35)',
      }
    },
  },
  plugins: [],
}
