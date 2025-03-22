/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',  './public/**/*'],
	theme: {
		extend: {
			colors:{
				'main-blue': '#0A1F44',
				'dark-blue': '#071630',
				'main-gold': '#713f12'
			},
			keyframes:{
				headerAnimation: {
					'0%': {
						transform: 'translateY(-60px)'
					},
					'100%': {
						transform: 'translateY(0)'
					}
				},
				fadeIn: {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					}
				},
				backgroundFadeIn: {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '.3',
					}
				},
				fadeInDown: {
					'0%': {
						opacity: '0', transform: 'translateY(-60px)'
					},
					'100%': {
						transform: 'translateY(0)', opacity: '1'
					}
				},
				fadeInSlightlyDown: {
					'0%': {
						opacity: '0',
						transform: 'translateY(-10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				fadeInLeft: {
					'0%': {
						opacity: '0', transform: 'translateX(100px)'
					},
					'100%': {
						transform: 'translateY(0)', opacity: '1'
					}
				},
			},
			animation: {
				fadeIn:'fadeIn 2s ease forwards',
				backgroundFadeIn: 'backgroundFadeIn 1s ease forwards',
				fadeInDown: 'fadeInDown 1s ease forwards',
				fadeInSlightlyDown: 'fadeInSlightlyDown 1s ease forwards',
				delayedFadeInDown: 'fadeInDown 1s ease 1s forwards',
				headerAnimation: 'headerAnimation .8s ease forwards',
				fadeInLeft: 'fadeInLeft 1s ease forwards'
			}
		},
	},
	plugins: [],
}
