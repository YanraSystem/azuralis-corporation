import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().default('Brahim Djelloul'),
    category: z.enum(['forex', 'matieres-premieres', 'analyse', 'education']),
    image: z.string().optional(),
  }),
})

export const collections = { blog }
