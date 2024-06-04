import { defineCollection } from 'astro:content';
import { confstellationSchema } from '@astrolicious/confstellation/schema';

export const collections = {
	confstellation: defineCollection({ schema: confstellationSchema }),
};
