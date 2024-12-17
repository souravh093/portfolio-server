import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { AboutRoutes } from '../modules/about/about.routes';
import { EducationRoutes } from '../modules/education/education.routes';
import { ExperienceRoutes } from '../modules/experience/experience.routes';

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
  {
    path: '/educations',
    route: EducationRoutes,
  },
  {
    path: '/experiences',
    route: ExperienceRoutes,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
