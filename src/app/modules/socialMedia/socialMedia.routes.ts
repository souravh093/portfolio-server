import { Router } from 'express';
import { socialMediaController } from './socialMedia.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validationRequest from '../../middlewares/validationRequest';
import { SocialMediaValidationSchema } from './socialMedia.validation';

const router = Router();

router.get('/', socialMediaController.getSocialMedia);
router.post(
  '/',
  auth(Role.ADMIN),
  validationRequest(
    SocialMediaValidationSchema.createSocialMediaValidationSchema,
  ),
  socialMediaController.createSocialMedia,
);
router.put(
  '/:id',
  auth(Role.ADMIN),
  validationRequest(
    SocialMediaValidationSchema.updateSocialMediaValidationSchema,
  ),
  socialMediaController.updateSocialMedia,
);
router.delete('/', auth(Role.ADMIN), socialMediaController.deleteSocialMedia);

export const SocialMediaRoutes = router;
