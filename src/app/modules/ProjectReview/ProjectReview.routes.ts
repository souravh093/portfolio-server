import { Router } from 'express';
import validationRequest from '../../middlewares/validationRequest';
import { ProjectReviewController } from './ProjectReview.controller';
import { ProjectReviewValidationSchema } from './ProjectReview.validation';

const router = Router();

router.post(
  '/',
  validationRequest(
    ProjectReviewValidationSchema.createProjectReviewValidationSchema,
  ),
  ProjectReviewController.createProjectReview,
);

export const ProjectReviewRoutes = router;
