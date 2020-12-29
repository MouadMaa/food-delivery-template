const colors = require('tailwindcss/colors')

module.exports = {
	purge: [],
	darkMode: 'class',
	theme: {
		extend: {},
		fontFamily: {
			body: [ 'Poppins', 'Helvetica', 'Arial', 'sans-serif' ],
		},
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			md: '1rem',
			lg: '1.25rem',
			xl: '1.5rem',
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
		extend: {
			ringWidth: [ 'focus-visible' ],
			ringColor: [ 'focus-visible' ],
			borderColor: [ 'focus-visible' ],
		},
		width: [ 'responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus' ],
		backgroundColor: [ 'responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active' ],
		textColor: [ 'responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active' ],
		borderColor: [ 'responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active' ],
	},
	plugins: [],
}
