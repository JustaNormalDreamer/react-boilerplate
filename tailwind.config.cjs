const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      padding: 0,
      center: true
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#F5762F',
        secondary: '#354A5F',
        ascent: '#5AB1BB',
        body: '#F8F8F8',
        danger: '#e63946',
        darkPrimary: '#0d1b2a',
        darkSecondary: '#1b263b',
        sky: colors.sky,
        cyan: colors.cyan,
        background: '#f7f9fc'
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      display: ['hover', 'focus'],
      translate: ['group-hover'],
      rotate: ['group-hover']
    }
  },
  plugins: []
};