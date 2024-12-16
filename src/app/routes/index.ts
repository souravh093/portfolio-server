import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { AboutRoutes } from '../modules/about/about.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auths',
    route: AuthRoutes,
  },
  {
    path: '/about',
    route: AboutRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
