import { z } from 'zod';

const createAboutValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string({ required_error: 'Description is required' }),
    projectCompleted: z.number({
      required_error: 'Project completed is required',
    }),
    yearExperience: z.number({
      required_error: 'Years of experience is required',
    }),
    clientServe: z.number({ required_error: 'Client serve is required' }),
    signature: z
      .string({ required_error: 'Signature is required' })
      .url({ message: 'Invalid url' }),
    resumeUrl: z
      .string({ required_error: 'Resume url is required' })
      .url({ message: 'Invalid url' }),
    cvUrl: z
      .string({ required_error: 'CV url is required' })
      .url({ message: 'Invalid url' }),
  }),
});

const updateAboutValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    projectCompleted: z.number().optional(),
    yearExperience: z.number().optional(),
    clientServe: z.number().optional(),
    signature: z.string().url().optional(),
    resumeUrl: z.string().url().optional(),
    cvUrl: z.string().url().optional(),
  }),
});

export const AboutValidations = {
  createAboutValidationSchema,
  updateAboutValidationSchema,
};
