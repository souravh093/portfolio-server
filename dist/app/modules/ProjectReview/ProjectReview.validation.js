"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectReviewValidationSchema = void 0;
const zod_1 = require("zod");
const createProjectReviewValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
        email: zod_1.z.string({ required_error: 'Email is required' }),
        projectId: zod_1.z.string({ required_error: 'Project ID is required' }),
        rating: zod_1.z.number({ required_error: 'Rating is required' }),
        review: zod_1.z.string({ required_error: 'Review is required' }),
    }),
});
const updateProjectReviewValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        projectId: zod_1.z.string().optional(),
        rating: zod_1.z.number().optional(),
        review: zod_1.z.string().optional(),
    }),
});
exports.ProjectReviewValidationSchema = {
    createProjectReviewValidationSchema,
    updateProjectReviewValidationSchema,
};
