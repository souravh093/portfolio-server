import { z } from 'zod';

const createServiceValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Service name is required',
    }),
    logo: z
      .string({
        required_error: 'Service logo is required',
      })
      .url({
        message: 'Invalid URL',
      }),
    description: z.string({
      required_error: 'Service description is required',
    }),
  }),
});

const updateServiceValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    logo: z.string().url({ message: 'Invalid URL' }).optional(),
    description: z.string().optional(),
  }),
});

export const ServiceValidations = {
  createServiceValidationSchema,
  updateServiceValidationSchema,
};
