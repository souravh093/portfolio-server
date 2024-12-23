"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialMediaValidationSchema = void 0;
const zod_1 = require("zod");
const createSocialMediaValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
        icon: zod_1.z
            .string({ required_error: 'Icon is required' })
            .url({ message: 'Icon must be a valid URL' }),
        url: zod_1.z
            .string({ required_error: 'URL is required' })
            .url({ message: 'URL must be a valid URL' }),
    }),
});
const updateSocialMediaValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        icon: zod_1.z.string().url().optional(),
        url: zod_1.z.string().url().optional(),
    }),
});
exports.SocialMediaValidationSchema = {
    createSocialMediaValidationSchema,
    updateSocialMediaValidationSchema,
};
