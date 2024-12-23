"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceRoutes = void 0;
const express_1 = require("express");
const experience_controller_1 = require("./experience.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const experience_validation_1 = require("./experience.validation");
const router = (0, express_1.Router)();
router.get('/', experience_controller_1.ExperienceController.getExperience);
router.post('/', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(experience_validation_1.ExperienceValidations.createExperienceValidationSchema), experience_controller_1.ExperienceController.createExperience);
router.put('/:id', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(experience_validation_1.ExperienceValidations.updateExperienceValidationSchema), experience_controller_1.ExperienceController.updateExperience);
router.delete('/:id', (0, auth_1.default)(client_1.Role.ADMIN), experience_controller_1.ExperienceController.deleteExperience);
exports.ExperienceRoutes = router;
