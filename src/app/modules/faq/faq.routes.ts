import { Router } from 'express';
import { FaqController } from './faq.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validationRequest from '../../middlewares/validationRequest';
import { FaqValidationSchema } from './faq.validaiton';

const router = Router();

router.get('/', FaqController.getFaqs);
router.post(
  '/',
  auth(Role.ADMIN),
  validationRequest(FaqValidationSchema.createFaqValidationSchema),
  FaqController.createFaq,
);
router.put(
  '/:id',
  auth(Role.ADMIN),
  validationRequest(FaqValidationSchema.updateFaqValidationSchema),
  FaqController.updateFaq,
);
router.delete('/:id', auth(Role.ADMIN), FaqController.deleteFaq);


export const FaqRoutes = router;
