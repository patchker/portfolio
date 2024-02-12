/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    // Możesz dodać więcej ścieżek, jeśli twoje pliki znajdują się również w innych katalogach
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'arvo': ['Arvo', 'sans-serif'],
        'masque': ['Masque', 'sans-serif'],
        'protest': ['Protest', 'sans-serif'],


      },
      colors:
          {
            'custom-gray': '#111011',

          }

    },
  },
  plugins: [],
}

