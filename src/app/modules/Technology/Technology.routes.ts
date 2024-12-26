import { Router } from 'express';
import { TechnologyController } from './Technology.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validationRequest from '../../middlewares/validationRequest';
import { TechnologyValidationSchema } from './Technology.validation';

const router = Router();

router.get('/', TechnologyController.getTechnologies);
router.get('/:id', TechnologyController.getTechnologyById);
router.post(
  '/',
  auth(Role.ADMIN),
  validationRequest(
    TechnologyValidationSchema.createTechnologyValidationSchema,
  ),
  TechnologyController.createTechnology,
);
router.put(
  '/:id',
  auth(Role.ADMIN),
  validationRequest(
    TechnologyValidationSchema.updateTechnologyValidationSchema,
  ),
  TechnologyController.updateTechnologyById,
);
router.delete(
  '/:id',
  auth(Role.ADMIN),
  TechnologyController.deleteTechnologyById,
);

export const TechnologyRoutes = router;
