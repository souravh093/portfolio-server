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
exports.TechnologyController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const Technology_service_1 = require("./Technology.service");
const createTechnology = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Technology_service_1.TechnologyServices.createTechnologyIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: 'Technology created successfully',
        data: result,
    });
}));
const getTechnologies = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Technology_service_1.TechnologyServices.getTechnologiesFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Technologies fetched successfully',
        data: result,
    });
}));
const getTechnologyById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Technology_service_1.TechnologyServices.getTechnologyByIdFromDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Technology fetched successfully',
        data: result,
    });
}));
const updateTechnologyById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Technology_service_1.TechnologyServices.updateTechnologyByIdInDB(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Technology updated successfully',
        data: result,
    });
}));
const deleteTechnologyById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Technology_service_1.TechnologyServices.deleteTechnologyByIdFromDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 204,
        success: true,
        message: 'Technology deleted successfully',
    });
}));
exports.TechnologyController = {
    createTechnology,
    getTechnologies,
    getTechnologyById,
    updateTechnologyById,
    deleteTechnologyById,
};
