const colors = require('tailwindcss/colors')

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			body: [ 'Poppins', 'Helvetica', 'Arial', 'sans-serif' ],
		},
		fontSize: {
			xs: '1.2rem',
			sm: '1.4rem',
			md: '1.6rem',
			lg: '2rem',
			xl: '2.4rem',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.coolGray,
			primary: {
				default: '#ED5359',
				dark: '#DF494E',
				light: '#FFBCC0',
				background: '#FFF4F5',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
