import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string({ required_error: 'Description is required' }),
    image: z
      .string({ required_error: 'Image is required' })
      .url({ message: 'Image must be a valid URL' }),
    category: z.string({ required_error: 'Category is required' }),
  }),
});

const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().url().optional(),
  }),
});

export const BlogValidationSchema = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
