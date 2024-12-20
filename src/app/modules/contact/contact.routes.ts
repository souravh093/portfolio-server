import { Router } from 'express';
import { ContactController } from './contact.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validationRequest from '../../middlewares/validationRequest';
import { ContactValidationSchema } from './contact.validation';

const router = Router();

router.get('/', ContactController.getContact);
router.get('/:id', ContactController.getContactById);
router.post(
  '/',
  validationRequest(ContactValidationSchema.createContactValidationSchema),
  ContactController.createContact,
);
router.put(
  '/:id',
  auth(Role.ADMIN),
  validationRequest(ContactValidationSchema.updateContactValidationSchema),
  ContactController.updateContact,
);
router.delete('/:id', auth(Role.ADMIN), ContactController.deleteContact);

export const ContactRoutes = router;
