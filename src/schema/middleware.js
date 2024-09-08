"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddlewareSchema = void 0;
const zod_1 = require("zod");
exports.AuthMiddlewareSchema = zod_1.z.object({
    authorization: zod_1.z.string(),
});
