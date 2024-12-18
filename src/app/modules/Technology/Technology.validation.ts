import { z } from 'zod';

const createTechnologyValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    logo: z
      .string({ required_error: 'Logo is required' })
      .url({ message: 'Logo must be a valid URL' }),
    technologyCategoryId: z.string({
      required_error: 'Technology Category is required',
    }),
  }),
});

const updateTechnologyValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    logo: z.string().url().optional(),
    technologyCategoryId: z.string().optional(),
  }),
});

export const TechnologyValidationSchema = {
  createTechnologyValidationSchema,
  updateTechnologyValidationSchema,
};
