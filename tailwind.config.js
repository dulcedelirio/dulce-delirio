/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Déclinaisons d'or pour les reliefs et reflets
        gold: {
          light: '#F9E498',  // Or brillant (reflets)
          DEFAULT: '#D4AF37', // Or classique (bordures)
          dark: '#B8860B',   // Or profond (ombres)
        }
      },
      keyframes: {
        // Animation pour simuler un reflet qui passe sur les cadres
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.5s infinite',
      },
    },
  },
  plugins: [],
}
