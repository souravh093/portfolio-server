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
exports.TechnologyCategoryServices = void 0;
const db_config_1 = __importDefault(require("../../../db/db.config"));
const createTechnologyCategoryIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.technologyCategory.create({
        data: payload,
    });
    return result;
});
const getTechnologyCategoryFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.technologyCategory.findUnique({
        where: {
            id,
        },
        include: {
            Technology: true,
        },
    });
    return result;
});
const getTechnologyCategoriesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.technologyCategory.findMany({
        include: {
            Technology: true,
        },
    });
    return result;
});
const updateTechnologyCategoryIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.technologyCategory.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteTechnologyCategoryFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.technologyCategory.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.TechnologyCategoryServices = {
    createTechnologyCategoryIntoDB,
    getTechnologyCategoryFromDB,
    getTechnologyCategoriesFromDB,
    updateTechnologyCategoryIntoDB,
    deleteTechnologyCategoryFromDB,
};
