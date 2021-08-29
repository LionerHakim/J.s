module.exports = {
  purge: [
    './index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        new: {
          background: '#F2FFD0',
          brown: '#8A4858',
          quotes: '#A38F79',
          footer: '#846E57'
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