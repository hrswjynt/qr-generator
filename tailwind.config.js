/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'sanguine-brown': {
					50: '#fbf6f5',
					100: '#f8eae8',
					200: '#f3d8d5',
					300: '#e9bdb8',
					400: '#db958e',
					500: '#ca7269',
					600: '#b4584e',
					700: '#8d423a',
					800: '#7e3d36',
					900: '#6a3732',
					950: '#381a17'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
