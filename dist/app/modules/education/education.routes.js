"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const education_validation_1 = require("./education.validation");
const education_controller_1 = require("./education.controller");
const router = (0, express_1.Router)();
router.post('/', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(education_validation_1.EducationValidations.createValidationSchema), education_controller_1.EducationController.createEducation);
router.get('/', education_controller_1.EducationController.getEducation);
router.get('/:id', education_controller_1.EducationController.getEducationById);
router.put('/:id', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(education_validation_1.EducationValidations.updateValidationSchema), education_controller_1.EducationController.updateEducation);
router.delete('/:id', (0, auth_1.default)(client_1.Role.ADMIN), education_controller_1.EducationController.deleteEducation);
exports.EducationRoutes = router;
