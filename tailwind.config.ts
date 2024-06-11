import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				bg: '#f4ede7',
				bg_dark: '#efe6dd',
				bg2: '#e5e1df',
				primary: '#b5223f',
				primary_dark: '#7f0d1e',
				secondary: '#f7bbac',
				secondary_dark: '#f49e88',
				trinary: '#e5e1df',
				trinary_light: '#f4f2f1',
				trinary_dark: '#d9d6d4',
				text: '#1c1c1c',
				text_light: '#ffffff',
				text_light_hover: '#f4ede7',
				muted: '#777'
			},
			fontFamily: {
				sans: ['Plus Jakarta Sans', 'sans-serif']
			},
			fontSize: {
				'lg-2xl': '4.6875rem',
				'2xl': 'calc(1.53125rem + 3.375vw)',
				'lg-xl': '3.875rem',
				xl: 'calc(1.6125rem + 2.25vw)',
				lg: 'calc(1.275rem + .3vw)',
				base: 'calc(1.125rem + .15vw)',
				md: 'calc(1rem + .15vw)',
				sm: 'calc(.875rem + .15vw)',
				xs: 'calc(.75rem + .15vw)',
				'2xs': 'calc(.625rem + .15vw)'
			},
			borderColor: {
				input: '#777'
			},
			animation: {
				'underline-in': 'underline_in 0.3s ease-in-out forwards',
				'underline-out': 'underline_out 0.3s ease-in-out forwards'
			},
			keyframes: {
				underline_in: {
					'0%': {
						right: '100%'
					},
					'100%': {
						right: '0%'
					}
				},
				underline_out: {
					'0%': {
						left: '0%'
					},
					'100%': {
						left: '100%'
					}
				}
			}
		}
	},
	plugins: []
};
export default config;
