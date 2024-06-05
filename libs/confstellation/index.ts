import defineTheme from 'astro-theme-provider';
import { z } from 'astro/zod';
import mdx from '@astrojs/mdx';

export default defineTheme({
	name: 'confstellation',
	schema: z.object({
		conferenceName: z.string(),
		conferenceSlogan: z.string().optional(),
		conferenceDate: z.string().datetime(),
		nav: z.array(
			z.object({
				label: z.string(),
				link: z.string(),
			})
		),
	}),
	integrations: [mdx()],
});
