/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0F172A',
          800: '#1E2A4A',
          700: '#2A3B66',
        },
        teal: {
          accent: '#00A8CC',
          light: '#2DD4BF',
          dark: '#008BA8',
          subtle: '#E6F8FB',
        },
        purple: {
          brand: '#5B3FD9',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
