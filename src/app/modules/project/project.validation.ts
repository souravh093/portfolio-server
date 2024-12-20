import { z } from 'zod';

const createProjectValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    description: z.string({ required_error: 'Description is required' }),
    videoUrl: z
      .string({ required_error: 'Video URL is required' })
      .url({ message: 'Invalid URL' }),
    projectCategory: z.enum(
      ['FRONTEND', 'BACKEND', 'FULLSTACK', 'OTHER', 'MOBILE', 'DESKTOP'],
      { message: 'Invalid project category' },
    ),
    client: z.string().optional(),
    duration: z.string({ required_error: 'Duration is required' }),
    country: z.string({ required_error: 'Country is required' }),
    projectGallery: z.array(
      z.object({
        image: z
          .string({ required_error: 'Image is required' })
          .url({ message: 'Invalid URL' }),
      }),
    ),
    projectUsedTechnology: z.array(
      z.object({
        technologyId: z.string({ required_error: 'Technology ID is required' }),
      }),
    ),
  }),
});

const updateProjectValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    videoUrl: z.string().url({ message: 'Invalid URL' }).optional(),
    projectCategory: z.enum(
      ['FRONTEND', 'BACKEND', 'FULLSTACK', 'OTHER', 'MOBILE', 'DESKTOP'],
      { message: 'Invalid project category' },
    ),
    client: z.string().optional(),
    duration: z.string().optional(),
    country: z.string().optional(),
    projectGallery: z.array(
      z.object({
        image: z.string().url({ message: 'Invalid URL' }).optional(),
      }),
    ),
    projectUsedTechnology: z.array(
      z.object({
        technologyId: z.string().optional(),
      }),
    ),
  }),
});

export const ProjectValidationSchema = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
