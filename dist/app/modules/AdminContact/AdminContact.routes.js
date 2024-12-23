"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminContactRoutes = void 0;
const express_1 = require("express");
const AdminContact_controller_1 = require("./AdminContact.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const AdminContact_validation_1 = require("./AdminContact.validation");
const router = (0, express_1.Router)();
router.get('/', AdminContact_controller_1.AdminContactController.getAdminContact);
router.post('/', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(AdminContact_validation_1.AdminContactValidationSchema.createAdminContactValidationSchema), AdminContact_controller_1.AdminContactController.createAdminContact);
router.put('/:id', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(AdminContact_validation_1.AdminContactValidationSchema.updateAdminContactValidationSchema), AdminContact_controller_1.AdminContactController.updateAdminContact);
exports.AdminContactRoutes = router;
