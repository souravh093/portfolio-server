"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnologyValidationSchema = void 0;
const zod_1 = require("zod");
const createTechnologyValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
        logo: zod_1.z
            .string({ required_error: 'Logo is required' })
            .url({ message: 'Logo must be a valid URL' }),
        technologyCategoryId: zod_1.z.string({
            required_error: 'Technology Category is required',
        }),
    }),
});
const updateTechnologyValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        logo: zod_1.z.string().url().optional(),
        technologyCategoryId: zod_1.z.string().optional(),
    }),
});
exports.TechnologyValidationSchema = {
    createTechnologyValidationSchema,
    updateTechnologyValidationSchema,
};
