import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		image: z.string().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string(),
		technologies: z.array(z.string()),
		links: z.object({
			demo: z.string().optional(),
			repo: z.string().optional(),
		}).optional(),
		featured: z.boolean().default(false),
	}),
});

const certificates = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.string(),
		entity: z.string(),
		description: z.string(),
		link: z.string().optional(),
		image: z.string().optional(),
	}),
});

const experience = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		company: z.string(),
		date: z.string(),
		current: z.boolean().default(false),
		link: z.string().optional(),
	}),
});

export const collections = { blog, projects, certificates, experience };
