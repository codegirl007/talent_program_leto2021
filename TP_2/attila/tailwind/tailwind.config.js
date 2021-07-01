const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#3a3939',
        background: '#ffffff80'
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('http://i.imgur.com/9kh3G8L.jpg')",
       }),
       borderColor: theme => ({
        main: '#3a3939',
       }),
       inset: {
        '-65': '-65px',
        '235' : '235px'
      },
      width: {
        '600' : '600px'
      },
      fontFamily: {
             'raleway': ['Raleway' , 'sans-serif'],
      }, 
      boxShadow: {
         'myShadow': '11px 13px 51px 15px #3a3939'
      },
      margin: {
        '240px' : '240px',
        '10px' : '10px',
        '7px' : '7px'
      },
      padding: {
        '70px' : '70px',
        '25px' : '25px',
        '10px' : '10px',
        '30px' : '30px',
        '95px' : '95px',
        '3px' : '3px'
      },
      fontSize: {
         '16px' : '16px',
         '18px' : '18px'
      },
    },      
  },
  variants: {
    extend: {
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}


