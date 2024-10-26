/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        military: {
          50: '#f5f7f5',
          100: '#e6ebe6',
          200: '#c5d4c5',
          300: '#9ab59a',
          400: '#708f70',
          500: '#4d694d',
          600: '#3d543d',
          700: '#2f412f',
          800: '#243024',
          900: '#1a231a',
        }
      }
    },
  },
  plugins: [],
};