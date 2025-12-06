// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ChikkaDB',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/athkishore/chikkadb-ts' }],
			sidebar: [
				{
					label: 'About',
					slug: 'about',
				},
				{
					label: 'Get Started',
					slug: 'getting-started',
				},
				{
					label: 'Compatibility with Mongodb',
					slug: 'mongodb-compatibility',
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [starlightBlog()],
			favicon: '/bitmap.png',
		}),
	],
});
