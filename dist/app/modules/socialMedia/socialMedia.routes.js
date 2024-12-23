"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialMediaRoutes = void 0;
const express_1 = require("express");
const socialMedia_controller_1 = require("./socialMedia.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const socialMedia_validation_1 = require("./socialMedia.validation");
const router = (0, express_1.Router)();
router.get('/', socialMedia_controller_1.socialMediaController.getSocialMedia);
router.post('/', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(socialMedia_validation_1.SocialMediaValidationSchema.createSocialMediaValidationSchema), socialMedia_controller_1.socialMediaController.createSocialMedia);
router.put('/:id', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(socialMedia_validation_1.SocialMediaValidationSchema.updateSocialMediaValidationSchema), socialMedia_controller_1.socialMediaController.updateSocialMedia);
router.delete('/', (0, auth_1.default)(client_1.Role.ADMIN), socialMedia_controller_1.socialMediaController.deleteSocialMedia);
exports.SocialMediaRoutes = router;
