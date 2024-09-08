"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_repository_1 = require("./admin-repository");
const user_repository_1 = require("./user-repository");
const work_repository_1 = require("./work-repository");
class Repository {
    constructor() {
        this.user = new user_repository_1.UserRepository();
        this.admin = new admin_repository_1.AdminRepository();
        this.work = new work_repository_1.WorkRepository();
    }
}
const REPOSITORY = new Repository();
exports.default = REPOSITORY;
