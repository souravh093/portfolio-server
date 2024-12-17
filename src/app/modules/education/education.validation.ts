import { z } from 'zod';

const createValidationSchema = z.object({
  body: z.object({
    institutionName: z.string({
      required_error: 'Institution name is required',
    }),
    degree: z.string({ required_error: 'Degree is required' }),
    startDate: z.string({ required_error: 'Start date is required' }),
    endDate: z.string({ required_error: 'End date is required' }),
  }),
});

const updateValidationSchema = z.object({
  body: z.object({
    institutionName: z.string().optional(),
    degree: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
  }),
});

export const EducationValidations = {
  createValidationSchema,
  updateValidationSchema,
};
