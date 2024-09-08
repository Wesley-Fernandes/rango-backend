"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    JWT_SECRET_CODE: zod_1.z.string(),
    PORT: zod_1.z.string().min(4).transform(Number),
    DATABASE_URL: zod_1.z.string(),
});
exports.default = envSchema.parse(process.env);
