import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';
export const subscribe = defineAction({
	accept: 'form',
	input: z.object({
		email: z.string().email(),
	}),
	handler: async ({ email }) => {
		console.log('DEBUG:', email, 'subscribed');
		return { success: true };
	},
});
