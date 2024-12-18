import { Router } from 'express';
import { TechnologyCategoryController } from './TechnologyCategory.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validationRequest from '../../middlewares/validationRequest';
import { TechnologyCategoryValidations } from './TechnologyCategory.validation';

const router = Router();

router.get('/', TechnologyCategoryController.getTechnologyCategories);
router.get('/:id', TechnologyCategoryController.getTechnologyCategory);
router.post(
  '/',
  auth(Role.ADMIN),
  validationRequest(
    TechnologyCategoryValidations.createTechnologyCategoryValidationSchema,
  ),
  TechnologyCategoryController.createTechnologyCategory,
);
router.put(
  '/:id',
  auth(Role.ADMIN),
  validationRequest(
    TechnologyCategoryValidations.updateTechnologyCategoryValidationSchema,
  ),
  TechnologyCategoryController.updateTechnologyCategory,
);
router.delete(
  '/:id',
  auth(Role.ADMIN),
  TechnologyCategoryController.deleteTechnologyCategory,
);

export const TechnologyCategoryRoutes = router;
