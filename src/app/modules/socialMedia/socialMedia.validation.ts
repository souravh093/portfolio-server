import { z } from 'zod';

const createSocialMediaValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    icon: z
      .string({ required_error: 'Icon is required' })
      .url({ message: 'Icon must be a valid URL' }),
    url: z
      .string({ required_error: 'URL is required' })
      .url({ message: 'URL must be a valid URL' }),
  }),
});

const updateSocialMediaValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    icon: z.string().url().optional(),
    url: z.string().url().optional(),
  }),
});

export const SocialMediaValidationSchema = {
  createSocialMediaValidationSchema,
  updateSocialMediaValidationSchema,
};
