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
exports.TechnologyServices = void 0;
const db_config_1 = __importDefault(require("../../../db/db.config"));
const createTechnologyIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.technology.create({
        data: payload,
    });
    return result;
});
const getTechnologiesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.technology.findMany();
    return result;
});
const getTechnologyByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.technology.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateTechnologyByIdInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.technology.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteTechnologyByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.technology.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.TechnologyServices = {
    createTechnologyIntoDB,
    getTechnologiesFromDB,
    getTechnologyByIdFromDB,
    updateTechnologyByIdInDB,
    deleteTechnologyByIdFromDB,
};
