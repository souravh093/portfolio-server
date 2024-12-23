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
exports.AboutServices = void 0;
const db_config_1 = __importDefault(require("../../../db/db.config"));
const createAboutIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.about.create({
        data: payload,
    });
    return result;
});
const getAboutFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.about.findFirst();
    return result;
});
const updateAboutIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistAbout = yield db_config_1.default.about.findFirstOrThrow();
    const result = yield db_config_1.default.about.update({
        where: {
            id: isExistAbout.id,
        },
        data: payload,
    });
    return result;
});
exports.AboutServices = {
    createAboutIntoDB,
    getAboutFromDB,
    updateAboutIntoDB,
};
