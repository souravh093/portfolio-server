"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectReviewRoutes = void 0;
const express_1 = require("express");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const ProjectReview_controller_1 = require("./ProjectReview.controller");
const ProjectReview_validation_1 = require("./ProjectReview.validation");
const router = (0, express_1.Router)();
router.post('/', (0, validationRequest_1.default)(ProjectReview_validation_1.ProjectReviewValidationSchema.createProjectReviewValidationSchema), ProjectReview_controller_1.ProjectReviewController.createProjectReview);
exports.ProjectReviewRoutes = router;
