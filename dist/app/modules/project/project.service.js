"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectServices = void 0;
const db_config_1 = __importDefault(require("../../../db/db.config"));
const createProjectIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.project.create({
        data: {
            name: payload.name,
            description: payload.description,
            projectCategory: payload.projectCategory,
            duration: payload.duration,
            githubClientUrl: payload.githubClientUrl,
            githubServerUrl: payload.githubServerUrl,
            image: payload.image,
            projectUrl: payload.projectUrl,
            projectUsedTechnology: {
                create: payload.projectUsedTechnology.map((technology) => ({
                    technologyId: technology.technologyId,
                })),
            },
        },
    });
    return result;
});
const getProjectsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.project.findMany({
        include: {
            projectUsedTechnology: {
                include: {
                    technology: true,
                }
            },
        },
    });
    return result;
});
const getProjectByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.project.findUnique({
        where: {
            id,
        },
        include: {
            projectUsedTechnology: {
                include: {
                    technology: true,
                }
            },
        },
    });
    return result;
});
const updateProjectIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.project.update({
        where: {
            id,
        },
        data: {
            name: payload.name,
            description: payload.description,
            projectCategory: payload.projectCategory,
            duration: payload.duration,
            githubClientUrl: payload.githubClientUrl,
            githubServerUrl: payload.githubServerUrl,
            image: payload.image,
            projectUrl: payload.projectUrl,
            projectUsedTechnology: {
                deleteMany: {},
                create: payload.projectUsedTechnology.map((technology) => ({
                    technologyId: technology,
                })),
            },
        },
    });
    return result;
});
const deleteProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.project.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.ProjectServices = {
    createProjectIntoDB,
    getProjectsFromDB,
    getProjectByIdFromDB,
    updateProjectIntoDB,
    deleteProjectFromDB,
};
