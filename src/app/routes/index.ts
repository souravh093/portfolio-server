import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { AboutRoutes } from '../modules/about/about.routes';
import { EducationRoutes } from '../modules/education/education.routes';
import { ExperienceRoutes } from '../modules/experience/experience.routes';
import { ServiceRoutes } from '../modules/service/service.routes';
import { TechnologyRoutes } from '../modules/Technology/Technology.routes';
import { ProjectRoutes } from '../modules/project/project.routes';
import { ProjectReviewRoutes } from '../modules/ProjectReview/ProjectReview.routes';
import { BlogRoutes } from '../modules/blog/blog.routes';
import { FaqRoutes } from '../modules/faq/faq.routes';
import { AdminContactRoutes } from '../modules/AdminContact/AdminContact.routes';
import { ContactRoutes } from '../modules/contact/contact.routes';
import { SocialMediaRoutes } from '../modules/socialMedia/socialMedia.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
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
  {
    path: '/contacts',
    route: ContactRoutes,
  },
  {
    path: '/social-medias',
    route: SocialMediaRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
