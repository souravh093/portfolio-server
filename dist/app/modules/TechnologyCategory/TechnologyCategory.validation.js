"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnologyCategoryValidations = void 0;
const zod_1 = require("zod");
const createTechnologyCategoryValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
    }),
});
const updateTechnologyCategoryValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
    }),
});
exports.TechnologyCategoryValidations = {
    createTechnologyCategoryValidationSchema,
    updateTechnologyCategoryValidationSchema,
};
