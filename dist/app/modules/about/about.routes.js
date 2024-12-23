"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const about_validation_1 = require("./about.validation");
const about_controller_1 = require("./about.controller");
const router = (0, express_1.Router)();
router.get('/', about_controller_1.AboutController.createAbout);
router.post('/', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(about_validation_1.AboutValidations.updateAboutValidationSchema), about_controller_1.AboutController.updateAbout);
router.put('/', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(about_validation_1.AboutValidations.updateAboutValidationSchema), about_controller_1.AboutController.updateAbout);
exports.AboutRoutes = router;
