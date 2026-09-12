/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#FFF5EB',
          100: '#FFE6CC',
          200: '#FFCC99',
          300: '#FFB366',
          400: '#FF9933',
          500: '#FF8000',
          600: '#E67300',
          700: '#CC6600',
          800: '#A65300',
          900: '#7A3D00',
        },
        navy: {
          50: '#EEF2F8',
          100: '#D5DEEC',
          200: '#A8B8D5',
          300: '#7B91BD',
          400: '#4E6BA5',
          500: '#2B4A7A',
          600: '#1E3A62',
          700: '#0B3D6E',
          800: '#082D52',
          900: '#061F3A',
          950: '#04122A',
        },
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
