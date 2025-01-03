"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnologyRoutes = void 0;
const express_1 = require("express");
const Technology_controller_1 = require("./Technology.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const Technology_validation_1 = require("./Technology.validation");
const router = (0, express_1.Router)();
router.get('/', Technology_controller_1.TechnologyController.getTechnologies);
router.get('/:id', Technology_controller_1.TechnologyController.getTechnologyById);
router.post('/', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(Technology_validation_1.TechnologyValidationSchema.createTechnologyValidationSchema), Technology_controller_1.TechnologyController.createTechnology);
router.put('/:id', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(Technology_validation_1.TechnologyValidationSchema.updateTechnologyValidationSchema), Technology_controller_1.TechnologyController.updateTechnologyById);
router.delete('/:id', (0, auth_1.default)(client_1.Role.ADMIN), Technology_controller_1.TechnologyController.deleteTechnologyById);
exports.TechnologyRoutes = router;
