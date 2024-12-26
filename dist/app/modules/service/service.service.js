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
exports.ServiceServices = void 0;
const db_config_1 = __importDefault(require("../../../db/db.config"));
const createServiceIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.service.create({
        data: {
            name: payload.name,
            logo: payload.logo,
            description: payload.description,
        },
    });
    return result;
});
const getServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.service.findMany();
    return result;
});
const getServiceByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.service.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateServiceIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.service.update({
        where: {
            id,
        },
        data: {
            name: payload.name,
            logo: payload.logo,
            description: payload.description,
        },
    });
    return result;
});
const deleteServiceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.service.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.ServiceServices = {
    createServiceIntoDB,
    getServicesFromDB,
    getServiceByIdFromDB,
    updateServiceIntoDB,
    deleteServiceFromDB,
};
