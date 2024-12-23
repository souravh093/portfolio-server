"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = require("express");
const project_controller_1 = require("./project.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const project_validation_1 = require("./project.validation");
const router = (0, express_1.Router)();
router.get('/', project_controller_1.ProjectController.getProjects);
router.get('/:id', project_controller_1.ProjectController.getProjectById);
router.post('/', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(project_validation_1.ProjectValidationSchema.createProjectValidationSchema), project_controller_1.ProjectController.createProject);
router.put('/:id', (0, auth_1.default)(client_1.Role.ADMIN), (0, validationRequest_1.default)(project_validation_1.ProjectValidationSchema.updateProjectValidationSchema), project_controller_1.ProjectController.updateProject);
router.delete('/:id', (0, auth_1.default)(client_1.Role.ADMIN), project_controller_1.ProjectController.deleteProject);
exports.ProjectRoutes = router;
