import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				main: '#080D1B',
				secondary: '#B348E1',
				tertiary: '#842CB9',
				accent: '#F9EDFF'
			}
		}
	}
} as Config;
