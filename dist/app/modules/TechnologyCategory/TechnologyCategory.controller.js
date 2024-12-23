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
exports.TechnologyCategoryController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const TechnologyCategory_service_1 = require("./TechnologyCategory.service");
const createTechnologyCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield TechnologyCategory_service_1.TechnologyCategoryServices.createTechnologyCategoryIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: 'Technology Category created successfully',
        data: result,
    });
}));
const getTechnologyCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield TechnologyCategory_service_1.TechnologyCategoryServices.getTechnologyCategoryFromDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Technology Category fetched successfully',
        data: result,
    });
}));
const getTechnologyCategories = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield TechnologyCategory_service_1.TechnologyCategoryServices.getTechnologyCategoriesFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Technology Categories fetched successfully',
        data: result,
    });
}));
const updateTechnologyCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield TechnologyCategory_service_1.TechnologyCategoryServices.updateTechnologyCategoryIntoDB(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Technology Category updated successfully',
        data: result,
    });
}));
const deleteTechnologyCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield TechnologyCategory_service_1.TechnologyCategoryServices.deleteTechnologyCategoryFromDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Technology Category deleted successfully',
        data: result,
    });
}));
exports.TechnologyCategoryController = {
    createTechnologyCategory,
    getTechnologyCategory,
    getTechnologyCategories,
    updateTechnologyCategory,
    deleteTechnologyCategory,
};
