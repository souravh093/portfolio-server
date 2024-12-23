"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoutes = void 0;
const express_1 = require("express");
const contact_controller_1 = require("./contact.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const contact_validation_1 = require("./contact.validation");
const router = (0, express_1.Router)();
router.get('/', contact_controller_1.ContactController.getContact);
router.get('/:id', contact_controller_1.ContactController.getContactById);
router.post('/', (0, validationRequest_1.default)(contact_validation_1.ContactValidationSchema.createContactValidationSchema), contact_controller_1.ContactController.createContact);
router.put('/:id', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(contact_validation_1.ContactValidationSchema.updateContactValidationSchema), contact_controller_1.ContactController.updateContact);
router.delete('/:id', (0, auth_1.default)(client_1.Role.ADMIN), contact_controller_1.ContactController.deleteContact);
exports.ContactRoutes = router;
