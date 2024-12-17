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
    videoUrl: z.string({ required_error: 'Service video URL is required' }),
    serviceGallery: z.array(
      z.object({
        image: z
          .string({
            required_error: 'Service gallery image is required',
          })
          .url({
            message: 'Invalid URL',
          }),
      }),
    ),
  }),
});

const updateServiceValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    logo: z.string().url({ message: 'Invalid URL' }).optional(),
    description: z.string().optional(),
    videoUrl: z.string().optional(),
    serviceGallery: z.array(
      z.object({
        image: z.string().url({ message: 'Invalid URL' }).optional(),
      }),
    ),
  }),
});

export const ServiceValidations = {
  createServiceValidationSchema,
  updateServiceValidationSchema,
};
