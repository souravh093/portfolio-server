"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceValidations = void 0;
const zod_1 = require("zod");
const createExperienceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        companyName: zod_1.z.string({
            required_error: 'Company name is required',
        }),
        position: zod_1.z.string({
            required_error: 'Position is required',
        }),
        startDate: zod_1.z.string({
            required_error: 'Start date is required',
        }),
        endDate: zod_1.z.string({
            required_error: 'End date is required',
        }),
    }),
});
const updateExperienceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        companyName: zod_1.z.string().optional(),
        position: zod_1.z.string().optional(),
        startDate: zod_1.z.string().optional(),
        endDate: zod_1.z.string().optional(),
    }),
});
exports.ExperienceValidations = {
    createExperienceValidationSchema,
    updateExperienceValidationSchema,
};
