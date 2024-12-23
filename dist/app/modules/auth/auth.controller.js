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
exports.AuthController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const auth_service_1 = require("./auth.service");
const loginUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthServices.loginUserFromDB(req.body);
    const { accessToken, refreshToken, userExists } = result;
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        sameSite: true,
        maxAge: 365 * 24 * 60 * 60 * 1000,
    });
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Login successfully',
        token: {
            accessToken,
            refreshToken,
        },
        data: userExists,
    });
}));
const refreshToken = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.cookies;
    const result = yield auth_service_1.AuthServices.refreshToken(refreshToken);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Token refreshed successfully',
        data: result,
    });
}));
const forgetPassword = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthServices.forgetPasswordIntoDB(req.body.email);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: result,
    });
}));
const resetPassword = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.id;
    const newPassword = req.body.newPassword;
    const token = req.body.token;
    const result = yield auth_service_1.AuthServices.resetPasswordIntoDB(id, newPassword, token);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: result,
    });
}));
const changedPassword = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    const result = yield auth_service_1.AuthServices.changePasswordIntDB(email, oldPassword, newPassword);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: result,
    });
}));
exports.AuthController = {
    loginUser,
    forgetPassword,
    resetPassword,
    changedPassword,
    refreshToken,
};
