import { z } from 'astro/zod';

export const confstellationSchema = z.object({
	title: z.string(),
});
