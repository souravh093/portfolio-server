import { Router } from 'express';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validationRequest from '../../middlewares/validationRequest';
import { EducationValidations } from './education.validation';
import { EducationController } from './education.controller';

const router = Router();

router.post(
  '/',
  auth(Role.ADMIN),
  validationRequest(EducationValidations.createValidationSchema),
  EducationController.createEducation,
);
router.get('/', EducationController.getEducation);
router.get('/:id', EducationController.getEducationById);
router.put(
  '/:id',
  auth(Role.ADMIN),
  validationRequest(EducationValidations.updateValidationSchema),
  EducationController.updateEducation,
);
router.delete('/:id', auth(Role.ADMIN), EducationController.deleteEducation);

export const EducationRoutes = router;
