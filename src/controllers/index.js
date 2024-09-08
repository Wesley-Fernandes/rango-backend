"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
const admin_1 = require("./admin");
const test_1 = require("./test");
const work_1 = require("./work");
exports.default = {
    Auth: auth_1.Auth,
    Test: test_1.Test,
    Admin: admin_1.Admin,
    Work: work_1.Work
};
