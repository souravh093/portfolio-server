"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationValidations = void 0;
const zod_1 = require("zod");
const createValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        institutionName: zod_1.z.string({
            required_error: 'Institution name is required',
        }),
        degree: zod_1.z.string({ required_error: 'Degree is required' }),
        startDate: zod_1.z.string({ required_error: 'Start date is required' }),
        endDate: zod_1.z.string({ required_error: 'End date is required' }),
    }),
});
const updateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        institutionName: zod_1.z.string().optional(),
        degree: zod_1.z.string().optional(),
        startDate: zod_1.z.string().optional(),
        endDate: zod_1.z.string().optional(),
    }),
});
exports.EducationValidations = {
    createValidationSchema,
    updateValidationSchema,
};
