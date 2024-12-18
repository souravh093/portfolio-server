import { Router } from 'express';
import { ServiceController } from './service.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validationRequest from '../../middlewares/validationRequest';
import { ServiceValidations } from './service.validation';

const router = Router();

router.get('/', ServiceController.getServices);
router.get('/:id', ServiceController.getServiceById);
router.post(
  '/',
  auth(Role.ADMIN),
  validationRequest(ServiceValidations.createServiceValidationSchema),
  ServiceController.createService,
);
router.put(
  '/:id',
  auth(Role.ADMIN),
  validationRequest(ServiceValidations.updateServiceValidationSchema),
  ServiceController.updateService,
);
router.delete('/:id', auth(Role.ADMIN), ServiceController.deleteService);

export const ServiceRoutes = router;
