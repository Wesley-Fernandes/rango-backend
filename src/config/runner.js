"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("./env"));
const runner = (app) => {
    app.listen(env_1.default.PORT, () => console.log(`Server is running on port ${env_1.default.PORT}`));
};
exports.default = runner;
