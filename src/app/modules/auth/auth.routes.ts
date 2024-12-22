import { Router } from 'express';
import validationRequest from '../../middlewares/validationRequest';
import { AuthValidations } from './auth.validation';
import { AuthController } from './auth.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';

const router = Router();

router.post(
  '/login',
  validationRequest(AuthValidations.loginValidation),
  AuthController.loginUser,
);

router.post('/refresh-token', AuthController.refreshToken);

router.post(
  '/forget-password',
  validationRequest(AuthValidations.forgetPasswordValidation),
  AuthController.forgetPassword,
);

router.post(
  '/reset-password',
  validationRequest(AuthValidations.resetPasswordValidation),
  AuthController.resetPassword,
);

router.post(
  '/change-password',
  auth(Role.ADMIN),
  validationRequest(AuthValidations.changePasswordValidation),
  AuthController.changedPassword,
);

export const AuthRoutes = router;
