"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const configuration_1 = __importDefault(require("./config/configuration"));
const runner_1 = __importDefault(require("./config/runner"));
const app = (0, express_1.default)();
(0, configuration_1.default)(app);
(0, runner_1.default)(app);
