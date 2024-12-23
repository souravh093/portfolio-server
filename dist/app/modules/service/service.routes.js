"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = require("express");
const service_controller_1 = require("./service.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const service_validation_1 = require("./service.validation");
const router = (0, express_1.Router)();
router.get('/', service_controller_1.ServiceController.getServices);
router.get('/:id', service_controller_1.ServiceController.getServiceById);
router.post('/', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(service_validation_1.ServiceValidations.createServiceValidationSchema), service_controller_1.ServiceController.createService);
router.put('/:id', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(service_validation_1.ServiceValidations.updateServiceValidationSchema), service_controller_1.ServiceController.updateService);
router.delete('/:id', (0, auth_1.default)(client_1.Role.ADMIN), service_controller_1.ServiceController.deleteService);
exports.ServiceRoutes = router;
