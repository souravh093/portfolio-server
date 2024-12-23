"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminContactValidationSchema = void 0;
const zod_1 = require("zod");
const createAdminContactValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        phone: zod_1.z
            .string({ required_error: 'Phone Number required' })
            .min(10)
            .max(13),
        email: zod_1.z
            .string({ required_error: 'Email required' })
            .email({ message: 'Invalid Email' }),
        address: zod_1.z.string({ required_error: 'Address required' }),
        mapUrl: zod_1.z
            .string({ required_error: 'Map URL required' })
            .url({ message: 'Invalid URL' }),
    }),
});
const updateAdminContactValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        phone: zod_1.z.string().min(10).max(13).optional(),
        email: zod_1.z.string().email({ message: 'Invalid Email' }).optional(),
        address: zod_1.z.string().optional(),
        mapUrl: zod_1.z.string().url({ message: 'Invalid URL' }).optional(),
    }),
});
exports.AdminContactValidationSchema = {
    createAdminContactValidationSchema,
    updateAdminContactValidationSchema,
};
