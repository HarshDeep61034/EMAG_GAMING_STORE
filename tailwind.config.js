/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'gaming-green-dark': '#84cc16',
				'gaming-green-light': '#a3e635',
			},
		},
	},
	plugins: [],
}
