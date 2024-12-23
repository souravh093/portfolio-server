"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogCategoryRoutes = void 0;
const express_1 = require("express");
const BlogCategory_controller_1 = require("./BlogCategory.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const BlogCategory_validation_1 = require("./BlogCategory.validation");
const router = (0, express_1.Router)();
router.get('/', BlogCategory_controller_1.BlogCategoryController.getBlogCategory);
router.post('/', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(BlogCategory_validation_1.BlogCategoryValidationSchema.createBlogCategoryValidationSchema), BlogCategory_controller_1.BlogCategoryController.createBlogCategory);
router.put('/:id', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(BlogCategory_validation_1.BlogCategoryValidationSchema.updateBlogCategoryValidationSchema), BlogCategory_controller_1.BlogCategoryController.updateBlogCategory);
router.delete('/:id', (0, auth_1.default)(client_1.Role.ADMIN), BlogCategory_controller_1.BlogCategoryController.deleteBlogCategory);
exports.BlogCategoryRoutes = router;
