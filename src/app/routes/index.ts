import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { AboutRoutes } from '../modules/about/about.routes';
import { EducationRoutes } from '../modules/education/education.routes';
import { ExperienceRoutes } from '../modules/experience/experience.routes';
import { ServiceRoutes } from '../modules/service/service.routes';
import { TechnologyCategoryRoutes } from '../modules/TechnologyCategory/TechnologyCategory.routes';
import { TechnologyRoutes } from '../modules/Technology/Technology.routes';
import { ProjectRoutes } from '../modules/project/project.routes';
import { ProjectReviewRoutes } from '../modules/ProjectReview/ProjectReview.routes';
import { BlogCategoryRoutes } from '../modules/BlogCategory/BlogCategory.routes';
import { BlogRoutes } from '../modules/blog/blog.routes';
import { FaqRoutes } from '../modules/faq/faq.routes';
import { AdminContactRoutes } from '../modules/AdminContact/AdminContact.routes';

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
  },
  {
    path: '/services',
    route: ServiceRoutes,
  },
  {
    path: '/technologies-categories',
    route: TechnologyCategoryRoutes,
  },
  {
    path: '/technologies',
    route: TechnologyRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/project-reviews',
    route: ProjectReviewRoutes,
  },
  {
    path: '/blog-categories',
    route: BlogCategoryRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/faq',
    route: FaqRoutes,
  },
  {
    path: '/admin-contacts',
    route: AdminContactRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
