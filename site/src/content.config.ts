import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().max(75),
    description: z.string().max(170),
    locale: z.enum(['ms', 'en']),
    category: z.enum(['vp-handover', 'loan', 'fit-out', 'pindah', 'legal', 'renovate']),
    pillar: z.boolean().default(false),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    faqs: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
    // Hub 3 default = FALSE. Most articles here are about VP/loan/legal,
    // where recommending a contractor would be unnatural. Only fit-out
    // articles opt in.
    includeFitoutNote: z.boolean().default(false),
    translationOf: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
