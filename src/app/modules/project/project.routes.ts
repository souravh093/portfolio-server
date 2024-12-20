import { Router } from 'express';
import { ProjectController } from './project.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validationRequest from '../../middlewares/validationRequest';
import { ProjectValidationSchema } from './project.validation';

const router = Router();

router.get('/', ProjectController.getProjects);
router.get('/:id', ProjectController.getProjectById);
router.post(
  '/',
  auth(Role.ADMIN),
  validationRequest(ProjectValidationSchema.createProjectValidationSchema),
  ProjectController.createProject,
);
router.put(
  '/:id',
  auth(Role.ADMIN),
  validationRequest(ProjectValidationSchema.updateProjectValidationSchema),
  ProjectController.updateProject,
);
router.delete('/:id', auth(Role.ADMIN), ProjectController.deleteProject);

export const ProjectRoutes = router;
