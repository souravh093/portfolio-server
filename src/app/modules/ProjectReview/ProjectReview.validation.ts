import { z } from 'zod';

const createProjectReviewValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Email is required' }),
    projectId: z.string({ required_error: 'Project ID is required' }),
    rating: z.number({ required_error: 'Rating is required' }),
    review: z.string({ required_error: 'Review is required' }),
  }),
});

const updateProjectReviewValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    projectId: z.string().optional(),
    rating: z.number().optional(),
    review: z.string().optional(),
  }),
});

export const ProjectReviewValidationSchema = {
  createProjectReviewValidationSchema,
  updateProjectReviewValidationSchema,
};
