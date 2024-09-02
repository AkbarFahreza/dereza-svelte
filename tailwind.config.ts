import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				main: '#080D1B',
				secondary: '#B348E1',
				tertiary: '#842CB9',
				clear: '#F9EDFF',
				semidark: '#7F8386'
			},
			boxShadow: {
				'CTA-shadow': '2px 3px 7px #B348E1'
			}
		}
	}
} as Config;
