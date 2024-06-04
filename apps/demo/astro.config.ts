import Confstellation from '@astrolicious/confstellation';
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
	output: 'server',
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	experimental: {
		actions: true,
		rewriting: true,
	},
	integrations: [
		Confstellation({
			config: {
				conferenceName: 'Astro',
				conferenceSlogan: 'The best conference ever',
				conferenceDate: '2024-09-01T14:00:00Z',
				nav: [
					{ label: 'Home', link: '/' },
					{ label: 'Code of Conduct', link: '/documentation/code-of-conduct' },
				],
			},
			pages: {},
			overrides: {
				styles: ['./src/styles/overrides.css'],
			},
		}),
	],
	vite: {
		ssr: {
			external: ['node:async_hooks'],
		},
	},
});
