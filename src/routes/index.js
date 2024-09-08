"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("./auth");
const test_1 = require("./test");
const admin_1 = require("./admin");
const work_1 = require("./work");
class Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.test_routes = new test_1.TestRoutes(this.router);
        this.auth_routes = new auth_1.AuthRoutes(this.router);
        this.admin_routes = new admin_1.AdminRoutes(this.router);
        this.work_routes = new work_1.WorkRoutes(this.router);
        this.router.use('/auth', this.auth_routes.route);
        this.router.use('/test', this.test_routes.route);
        this.router.use('/admin', this.admin_routes.route);
        this.router.use('/work', this.work_routes.route);
    }
}
const routes = new Routes();
exports.default = routes;
