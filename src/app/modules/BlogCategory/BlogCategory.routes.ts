import { Router } from 'express';
import { BlogCategoryController } from './BlogCategory.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validationRequest from '../../middlewares/validationRequest';
import { BlogCategoryValidationSchema } from './BlogCategory.validation';

const router = Router();

router.get('/', BlogCategoryController.getBlogCategory);
router.post(
  '/',
  auth(Role.ADMIN),
  validationRequest(
    BlogCategoryValidationSchema.createBlogCategoryValidationSchema,
  ),
  BlogCategoryController.createBlogCategory,
);
router.put(
  '/:id',
  auth(Role.ADMIN),
  validationRequest(
    BlogCategoryValidationSchema.updateBlogCategoryValidationSchema,
  ),
  BlogCategoryController.updateBlogCategory,
);
router.delete(
  '/:id',
  auth(Role.ADMIN),
  BlogCategoryController.deleteBlogCategory,
);

export const BlogCategoryRoutes = router;
