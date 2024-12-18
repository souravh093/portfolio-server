import { z } from 'zod';

const createTechnologyCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
  }),
});

const updateTechnologyCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
  }),
});

export const TechnologyCategoryValidations = {
  createTechnologyCategoryValidationSchema,
  updateTechnologyCategoryValidationSchema,
};
