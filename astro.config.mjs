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
					items: [
						{
							label: 'Server Options',
							slug: 'reference/server-options',
						},
						{
							label: 'Database Commands',
							slug: 'reference/database-commands',
							
						},
						{
							label: 'Client Methods',
							autogenerate: {
								directory: 'reference/client-methods',
							},
							collapsed: true
						},
						{
							label: 'Data Types',
							slug: 'reference/data-types',
						},
					]
				},
			],
			plugins: [starlightBlog()],
			favicon: '/bitmap.png',
			tableOfContents: {
				// maxHeadingLevel: 4,
			}
		}),
	],
});
