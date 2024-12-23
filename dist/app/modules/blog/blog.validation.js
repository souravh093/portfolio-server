"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogValidationSchema = void 0;
const zod_1 = require("zod");
const createBlogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required' }),
        description: zod_1.z.string({ required_error: 'Description is required' }),
        image: zod_1.z
            .string({ required_error: 'Image is required' })
            .url({ message: 'Image must be a valid URL' }),
        blogCategoryId: zod_1.z.string({ required_error: 'Blog Category is required' }),
    }),
});
const updateBlogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        image: zod_1.z.string().url().optional(),
    }),
});
exports.BlogValidationSchema = {
    createBlogValidationSchema,
    updateBlogValidationSchema,
};
