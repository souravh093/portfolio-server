"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutValidations = void 0;
const zod_1 = require("zod");
const createAboutValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required' }),
        description: zod_1.z.string({ required_error: 'Description is required' }),
        projectCompleted: zod_1.z.number({
            required_error: 'Project completed is required',
        }),
        yearExperience: zod_1.z.number({
            required_error: 'Years of experience is required',
        }),
        clientServe: zod_1.z.number({ required_error: 'Client serve is required' }),
        signature: zod_1.z
            .string({ required_error: 'Signature is required' })
            .url({ message: 'Invalid url' }),
        resumeUrl: zod_1.z
            .string({ required_error: 'Resume url is required' })
            .url({ message: 'Invalid url' }),
        cvUrl: zod_1.z
            .string({ required_error: 'CV url is required' })
            .url({ message: 'Invalid url' }),
    }),
});
const updateAboutValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        projectCompleted: zod_1.z.number().optional(),
        yearExperience: zod_1.z.number().optional(),
        clientServe: zod_1.z.number().optional(),
        signature: zod_1.z.string().url().optional(),
        resumeUrl: zod_1.z.string().url().optional(),
        cvUrl: zod_1.z.string().url().optional(),
    }),
});
exports.AboutValidations = {
    createAboutValidationSchema,
    updateAboutValidationSchema,
};
