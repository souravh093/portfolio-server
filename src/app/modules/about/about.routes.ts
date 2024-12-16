import { Router } from 'express';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validationRequest from '../../middlewares/validationRequest';
import { AboutValidations } from './about.validation';
import { AboutController } from './about.controller';

const router = Router();

router.get('/', AboutController.createAbout);
router.post(
  '/',
  auth(Role.ADMIN),
  validationRequest(AboutValidations.updateAboutValidationSchema),
  AboutController.updateAbout,
);
router.put(
  '/',
  auth(Role.ADMIN),
  validationRequest(AboutValidations.updateAboutValidationSchema),
  AboutController.updateAbout,
);

export const AboutRoutes = router;
