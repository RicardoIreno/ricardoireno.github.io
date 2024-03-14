import { defineCollection, z } from 'astro:content'

const work = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
    sort: z.number(),
    colors: z.object({
      hue: z.string(),
      saturation: z.string(),
      luminance1: z.string(),
      luminance2: z.string(),
    }),
    draft: z.string().optional(),
  }),
})

export const collections = { work }
