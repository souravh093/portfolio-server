"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqRoutes = void 0;
const express_1 = require("express");
const faq_controller_1 = require("./faq.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const faq_validaiton_1 = require("./faq.validaiton");
const router = (0, express_1.Router)();
router.get('/', faq_controller_1.FaqController.getFaqs);
router.post('/', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(faq_validaiton_1.FaqValidationSchema.createFaqValidationSchema), faq_controller_1.FaqController.createFaq);
router.put('/:id', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(faq_validaiton_1.FaqValidationSchema.updateFaqValidationSchema), faq_controller_1.FaqController.updateFaq);
router.delete('/:id', (0, auth_1.default)(client_1.Role.ADMIN), faq_controller_1.FaqController.deleteFaq);
exports.FaqRoutes = router;
