"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const middleware_1 = require("../schema/middleware");
const jsonwebtoken_1 = require("jsonwebtoken");
const api_errors_1 = require("../utils/api-errors");
const env_1 = __importDefault(require("../config/env"));
const isAuthenticated = (req, res, next) => {
    try {
        const { authorization } = middleware_1.AuthMiddlewareSchema.parse(req.headers);
        (0, jsonwebtoken_1.verify)(authorization, env_1.default.JWT_SECRET_CODE, (error, data) => {
            if (error) {
                throw new api_errors_1.UnauthorizedError('Token invalido!');
            }
            next();
        });
    }
    catch (error) {
        throw new api_errors_1.UnauthorizedError('Token invalido!');
    }
};
exports.isAuthenticated = isAuthenticated;
