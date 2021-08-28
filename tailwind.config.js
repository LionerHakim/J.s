module.exports = {
  purge: [
    './index.html',
    './assets/javascripts/custom.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        new: {
          background: '#F2FFD0',
          brown: '#8A4858'
        }
      },
      fontFamily: {
        'opensans': ['"Open Sans"', 'sans-serif'],
        'cabin': ['Cabin', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}