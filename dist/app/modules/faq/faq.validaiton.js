"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqValidationSchema = void 0;
const zod_1 = require("zod");
const createFaqValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        question: zod_1.z.string({ required_error: 'Question is required' }),
        answer: zod_1.z.string({ required_error: 'Answer is required' }),
    }),
});
const updateFaqValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        question: zod_1.z.string().optional(),
        answer: zod_1.z.string().optional(),
    }),
});
exports.FaqValidationSchema = {
    createFaqValidationSchema,
    updateFaqValidationSchema,
};
