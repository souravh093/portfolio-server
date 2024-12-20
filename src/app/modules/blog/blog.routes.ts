import { Router } from 'express';
import { BlogController } from './blog.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import validationRequest from '../../middlewares/validationRequest';
import { BlogValidationSchema } from './blog.validation';

const router = Router();

router.get('/', BlogController.getBlogs);
router.get('/:id', BlogController.getBlogById);
router.post(
  '/',
  auth(Role.ADMIN),
  validationRequest(BlogValidationSchema.createBlogValidationSchema),
  BlogController.createBlog,
);
router.put(
  '/:id',
  auth(Role.ADMIN),
  validationRequest(BlogValidationSchema.updateBlogValidationSchema),
  BlogController.updateBlogById,
);
router.delete('/:id', auth(Role.ADMIN), BlogController.deleteBlogById);

export const BlogRoutes = router;
