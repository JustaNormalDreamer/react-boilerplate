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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        ascent: "var(--ascent)",
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