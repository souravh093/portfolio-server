import { z } from 'zod';

const createBlogCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
  }),
});

const updateBlogCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
  }),
});

export const BlogCategoryValidationSchema = {
  createBlogCategoryValidationSchema,
  updateBlogCategoryValidationSchema,
};
