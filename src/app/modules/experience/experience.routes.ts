import { Router } from 'express';
import { ExperienceController } from './experience.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validationRequest from '../../middlewares/validationRequest';
import { ExperienceValidations } from './experience.validation';

const router = Router();

router.get('/', ExperienceController.getExperience);
router.post(
  '/',
  auth(Role.ADMIN),
  validationRequest(ExperienceValidations.createExperienceValidationSchema),
  ExperienceController.createExperience,
);
router.put(
  '/:id',
  auth(Role.ADMIN),
  validationRequest(ExperienceValidations.updateExperienceValidationSchema),
  ExperienceController.updateExperience,
);
router.delete('/:id', auth(Role.ADMIN), ExperienceController.deleteExperience);

export const ExperienceRoutes = router;
