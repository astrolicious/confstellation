import { z } from 'astro/zod';

export const contentSchema = z.object({
	title: z.string(),
});
