module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern': "url('../public/img/attila-background.jpg')",
    }),
  },
    fontFamily: {
      body:['Raleway']
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
}
