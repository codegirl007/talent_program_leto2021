module.exports = {
  purge: ['./build/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'img': "url('http://i.imgur.com/9kh3G8L.jpg')"
      }),
    },
    fontFamily: {
      'sans': ['Raleway', 'sans']
    },
    grayscale: {
      30: '30%',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
