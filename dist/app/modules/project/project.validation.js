"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectValidationSchema = void 0;
const zod_1 = require("zod");
const createProjectValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
        description: zod_1.z.string({ required_error: 'Description is required' }),
        videoUrl: zod_1.z
            .string({ required_error: 'Video URL is required' })
            .url({ message: 'Invalid URL' }),
        projectCategory: zod_1.z.enum(['FRONTEND', 'BACKEND', 'FULLSTACK', 'OTHER', 'MOBILE', 'DESKTOP'], { message: 'Invalid project category' }),
        client: zod_1.z.string().optional(),
        duration: zod_1.z.string({ required_error: 'Duration is required' }),
        country: zod_1.z.string({ required_error: 'Country is required' }),
        projectGallery: zod_1.z.array(zod_1.z.object({
            image: zod_1.z
                .string({ required_error: 'Image is required' })
                .url({ message: 'Invalid URL' }),
        })),
        projectUsedTechnology: zod_1.z.array(zod_1.z.object({
            technologyId: zod_1.z.string({ required_error: 'Technology ID is required' }),
        })),
    }),
});
const updateProjectValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        videoUrl: zod_1.z.string().url({ message: 'Invalid URL' }).optional(),
        projectCategory: zod_1.z.enum(['FRONTEND', 'BACKEND', 'FULLSTACK', 'OTHER', 'MOBILE', 'DESKTOP'], { message: 'Invalid project category' }),
        client: zod_1.z.string().optional(),
        duration: zod_1.z.string().optional(),
        country: zod_1.z.string().optional(),
        projectGallery: zod_1.z.array(zod_1.z.object({
            image: zod_1.z.string().url({ message: 'Invalid URL' }).optional(),
        })),
        projectUsedTechnology: zod_1.z.array(zod_1.z.object({
            technologyId: zod_1.z.string().optional(),
        })),
    }),
});
exports.ProjectValidationSchema = {
    createProjectValidationSchema,
    updateProjectValidationSchema,
};
