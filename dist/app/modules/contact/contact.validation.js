"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactValidationSchema = exports.updateContactValidationSchema = void 0;
const zod_1 = require("zod");
const createContactValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
        email: zod_1.z
            .string({ required_error: 'Email is required' })
            .email({ message: 'Invalid email' }),
        subject: zod_1.z.string({ required_error: 'Subject is required' }),
        message: zod_1.z.string({ required_error: 'Message is required' }),
    }),
});
exports.updateContactValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        subject: zod_1.z.string().optional(),
        message: zod_1.z.string().optional(),
    }),
});
exports.ContactValidationSchema = {
    createContactValidationSchema,
    updateContactValidationSchema: exports.updateContactValidationSchema,
};
