"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = require("../modules/auth/auth.routes");
const about_routes_1 = require("../modules/about/about.routes");
const education_routes_1 = require("../modules/education/education.routes");
const experience_routes_1 = require("../modules/experience/experience.routes");
const service_routes_1 = require("../modules/service/service.routes");
const Technology_routes_1 = require("../modules/Technology/Technology.routes");
const project_routes_1 = require("../modules/project/project.routes");
const ProjectReview_routes_1 = require("../modules/ProjectReview/ProjectReview.routes");
const blog_routes_1 = require("../modules/blog/blog.routes");
const faq_routes_1 = require("../modules/faq/faq.routes");
const AdminContact_routes_1 = require("../modules/AdminContact/AdminContact.routes");
const contact_routes_1 = require("../modules/contact/contact.routes");
const socialMedia_routes_1 = require("../modules/socialMedia/socialMedia.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_routes_1.AuthRoutes,
    },
    {
        path: '/about',
        route: about_routes_1.AboutRoutes,
    },
    {
        path: '/educations',
        route: education_routes_1.EducationRoutes,
    },
    {
        path: '/experiences',
        route: experience_routes_1.ExperienceRoutes,
    },
    {
        path: '/services',
        route: service_routes_1.ServiceRoutes,
    },
    {
        path: '/technologies',
        route: Technology_routes_1.TechnologyRoutes,
    },
    {
        path: '/projects',
        route: project_routes_1.ProjectRoutes,
    },
    {
        path: '/project-reviews',
        route: ProjectReview_routes_1.ProjectReviewRoutes,
    },
    {
        path: '/blogs',
        route: blog_routes_1.BlogRoutes,
    },
    {
        path: '/faq',
        route: faq_routes_1.FaqRoutes,
    },
    {
        path: '/admin-contacts',
        route: AdminContact_routes_1.AdminContactRoutes,
    },
    {
        path: '/contacts',
        route: contact_routes_1.ContactRoutes,
    },
    {
        path: '/social-medias',
        route: socialMedia_routes_1.SocialMediaRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
