/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'bp900': '900px',
      },
      colors: {
        primary: '#064266',
        textLight: '#F7F6FA',
        brand: {
          dark: '#041B2D',
          blue: '#0A4C8A',
          sky: '#1DA1F2',
          gold: '#E6B422',
        },
      },
      fontFamily: {
        montserret: ['Montserret', 'sans-serif'],
      },
      fontWeight: {
        medium: 500,
      },
      container: {
        center: true,
        padding: '1rem',
        screens: { lg: '1120px', xl: '1200px' },
      },
    },
  },
  plugins: [],
}
