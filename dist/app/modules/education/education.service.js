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
exports.EducationServices = void 0;
const db_config_1 = __importDefault(require("../../../db/db.config"));
const createEducationIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.education.create({
        data: payload,
    });
    return result;
});
const getEducationFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.education.findMany();
    return result;
});
const getEducationByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.education.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateEducationIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_config_1.default.education.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const result = yield db_config_1.default.education.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteEducationFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_config_1.default.education.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const result = yield db_config_1.default.education.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.EducationServices = {
    createEducationIntoDB,
    getEducationFromDB,
    getEducationByIdFromDB,
    updateEducationIntoDB,
    deleteEducationFromDB,
};
