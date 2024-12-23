"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = require("express");
const blog_controller_1 = require("./blog.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const blog_validation_1 = require("./blog.validation");
const router = (0, express_1.Router)();
router.get('/', blog_controller_1.BlogController.getBlogs);
router.get('/:id', blog_controller_1.BlogController.getBlogById);
router.post('/', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(blog_validation_1.BlogValidationSchema.createBlogValidationSchema), blog_controller_1.BlogController.createBlog);
router.put('/:id', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(blog_validation_1.BlogValidationSchema.updateBlogValidationSchema), blog_controller_1.BlogController.updateBlogById);
router.delete('/:id', (0, auth_1.default)(client_1.Role.ADMIN), blog_controller_1.BlogController.deleteBlogById);
exports.BlogRoutes = router;
