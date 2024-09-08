"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = void 0;
const errors = (error, req, res, next) => {
    var _a;
    console.log('Error:', error);
    const statusCode = (_a = error.statusCode) !== null && _a !== void 0 ? _a : 500;
    const message = error.statusCode ? error.message : 'Internal Server Error';
    return res.status(statusCode).json({ message });
};
exports.errors = errors;
