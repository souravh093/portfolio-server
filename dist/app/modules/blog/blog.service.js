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
exports.BlogServices = void 0;
const db_config_1 = __importDefault(require("../../../db/db.config"));
const createBlogIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.blog.create({
        data: payload,
    });
    return result;
});
const getBlogsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.blog.findMany();
    return result;
});
const getBlogByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.blog.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateBlogByIdInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.blog.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteBlogByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.blog.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.BlogServices = {
    createBlogIntoDB,
    getBlogsFromDB,
    getBlogByIdFromDB,
    updateBlogByIdInDB,
    deleteBlogByIdFromDB,
};
