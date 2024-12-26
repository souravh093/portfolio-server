import { z } from 'zod';

const createTechnologyValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    logo: z
      .string({ required_error: 'Logo is required' })
      .url({ message: 'Logo must be a valid URL' }),
    category: z.enum(['TECHNICAL', 'SOFT_SKILL'], {
      message:
        'Category must be one of Frontend, Backend, Mobile, Database, DevOps, Other',
    }),
  }),
});

const updateTechnologyValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    logo: z.string().url().optional(),
  }),
});

export const TechnologyValidationSchema = {
  createTechnologyValidationSchema,
  updateTechnologyValidationSchema,
};
