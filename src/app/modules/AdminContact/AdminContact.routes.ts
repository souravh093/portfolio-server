import { Router } from 'express';
import { AdminContactController } from './AdminContact.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validationRequest from '../../middlewares/validationRequest';
import { AdminContactValidationSchema } from './AdminContact.validation';

const router = Router();

router.get('/', AdminContactController.getAdminContact);
router.post(
  '/',
  auth(Role.ADMIN),
  validationRequest(
    AdminContactValidationSchema.createAdminContactValidationSchema,
  ),
  AdminContactController.createAdminContact,
);
router.put(
  '/:id',
  auth(Role.ADMIN),
  validationRequest(
    AdminContactValidationSchema.updateAdminContactValidationSchema,
  ),
  AdminContactController.updateAdminContact,
);

export const AdminContactRoutes = router;
