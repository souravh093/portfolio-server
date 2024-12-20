import { z } from 'zod';

const createContactValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Invalid email' }),
    subject: z.string({ required_error: 'Subject is required' }),
    message: z.string({ required_error: 'Message is required' }),
  }),
});

export const updateContactValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    subject: z.string().optional(),
    message: z.string().optional(),
  }),
});

export const ContactValidationSchema = {
  createContactValidationSchema,
  updateContactValidationSchema,
};
