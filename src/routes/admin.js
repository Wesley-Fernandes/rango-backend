"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const controllers_1 = __importDefault(require("../controllers"));
class AdminRoutes {
    constructor(router) {
        this.admin = new controllers_1.default.Admin();
        this.route = router;
        this.route.post('/create-permission', this.admin.createPermission);
        this.route.patch('/update-permission', this.admin.updatePermission);
        this.route.get('/receive-permission', this.admin.getPermission);
        this.route.delete('/erase-permission', this.admin.erasePermission);
    }
}
exports.AdminRoutes = AdminRoutes;
