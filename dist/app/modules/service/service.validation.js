"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidations = void 0;
const zod_1 = require("zod");
const createServiceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Service name is required',
        }),
        logo: zod_1.z
            .string({
            required_error: 'Service logo is required',
        })
            .url({
            message: 'Invalid URL',
        }),
        description: zod_1.z.string({
            required_error: 'Service description is required',
        }),
        videoUrl: zod_1.z.string({ required_error: 'Service video URL is required' }),
        serviceGallery: zod_1.z.array(zod_1.z.object({
            image: zod_1.z
                .string({
                required_error: 'Service gallery image is required',
            })
                .url({
                message: 'Invalid URL',
            }),
        })),
    }),
});
const updateServiceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        logo: zod_1.z.string().url({ message: 'Invalid URL' }).optional(),
        description: zod_1.z.string().optional(),
        videoUrl: zod_1.z.string().optional(),
        serviceGallery: zod_1.z.array(zod_1.z.object({
            image: zod_1.z.string().url({ message: 'Invalid URL' }).optional(),
        })),
    }),
});
exports.ServiceValidations = {
    createServiceValidationSchema,
    updateServiceValidationSchema,
};
