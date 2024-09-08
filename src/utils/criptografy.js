"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genToken = exports.decript = exports.encript = void 0;
exports.decode = decode;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const env_1 = __importDefault(require("../config/env"));
const encript = (password) => {
    const salt = (0, bcrypt_1.genSaltSync)(10);
    const hash = (0, bcrypt_1.hashSync)(password, salt);
    return hash;
};
exports.encript = encript;
const decript = (password, hashedPassword) => {
    return (0, bcrypt_1.compareSync)(password, hashedPassword);
};
exports.decript = decript;
const genToken = (id) => {
    return (0, jsonwebtoken_1.sign)({ id }, env_1.default.JWT_SECRET_CODE, { expiresIn: '2h' });
};
exports.genToken = genToken;
function decode(token) {
    try {
        const decoded = (0, jsonwebtoken_1.verify)(token, env_1.default.JWT_SECRET_CODE);
        return decoded;
    }
    catch (error) {
        console.error('Invalid token', error);
        return null;
    }
}
