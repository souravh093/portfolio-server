"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnologyCategoryRoutes = void 0;
const express_1 = require("express");
const TechnologyCategory_controller_1 = require("./TechnologyCategory.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const TechnologyCategory_validation_1 = require("./TechnologyCategory.validation");
const router = (0, express_1.Router)();
router.get('/', TechnologyCategory_controller_1.TechnologyCategoryController.getTechnologyCategories);
router.get('/:id', TechnologyCategory_controller_1.TechnologyCategoryController.getTechnologyCategory);
router.post('/', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(TechnologyCategory_validation_1.TechnologyCategoryValidations.createTechnologyCategoryValidationSchema), TechnologyCategory_controller_1.TechnologyCategoryController.createTechnologyCategory);
router.put('/:id', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(TechnologyCategory_validation_1.TechnologyCategoryValidations.updateTechnologyCategoryValidationSchema), TechnologyCategory_controller_1.TechnologyCategoryController.updateTechnologyCategory);
router.delete('/:id', (0, auth_1.default)(client_1.Role.ADMIN), TechnologyCategory_controller_1.TechnologyCategoryController.deleteTechnologyCategory);
exports.TechnologyCategoryRoutes = router;
