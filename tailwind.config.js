/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: [
    "./pages/**/*.vue", 
    "./components/**/*.vue", 
    "./plugins/**/*.vue",
    "./static/**/*.vue",
    "./store/**/*.vue"
  ],
  theme: {
	  container: {
		  center: true,
		  padding: {
			  default: '1rem',
			  sm: '1rem',
			  md: '4rem',
			  lg: '6rem',
			  xl: '5rem'
		  }
	  },
	  extend: {
		  colors: {
			  'gray-base': '#333',
			  'dark-gray': '#ececec',
			  'bmg-green-darken-10': 'hsl(64, 92%, 37%)',
			  'bmg-green-darken-20': 'hsl(64, 92%, 27%)',
			  'bmg-green': '#D7E609',
			  'bmg-green-light': 'rgba(215, 230, 9, 0.7)',
			  'bmg-light-gray': '#495057',
			  'transparent-black': 'rgba(0,0,0,0.4)'
		  },
		  fontFamily: {
			  baumans: ['Baumans'],
			  roboto: 'Roboto, Arial, Tahoma, sans-serif'
		  },
		  boxShadow: {
			  'outline-green': '0 0 0 3px rgba(215, 230, 9, 0.5)'
		  }
	  }
  },
  variants: {
    position: ['responsive'],
    inset: ['responsive'],
    display: ['responsive'],
    alignItems: ['responsive']
  },
  plugins: []
}
