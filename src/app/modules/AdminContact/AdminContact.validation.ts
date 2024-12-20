import { z } from 'zod';

const createAdminContactValidationSchema = z.object({
  body: z.object({
    phone: z
      .string({ required_error: 'Phone Number required' })
      .min(10)
      .max(13),
    email: z
      .string({ required_error: 'Email required' })
      .email({ message: 'Invalid Email' }),
    address: z.string({ required_error: 'Address required' }),
    mapUrl: z
      .string({ required_error: 'Map URL required' })
      .url({ message: 'Invalid URL' }),
  }),
});

const updateAdminContactValidationSchema = z.object({
  body: z.object({
    phone: z.string().min(10).max(13).optional(),
    email: z.string().email({ message: 'Invalid Email' }).optional(),
    address: z.string().optional(),
    mapUrl: z.string().url({ message: 'Invalid URL' }).optional(),
  }),
});

export const AdminContactValidationSchema = {
  createAdminContactValidationSchema,
  updateAdminContactValidationSchema,
};
