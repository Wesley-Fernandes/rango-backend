"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const controllers_1 = __importDefault(require("../controllers"));
class AuthRoutes {
    constructor(router) {
        this.auth = new controllers_1.default.Auth();
        this.route = router;
        this.route.post('/register', this.auth.register);
        this.route.post('/login', this.auth.login);
        this.route.get('/users', this.auth.list);
        this.route.get('/users/:id', this.auth.unique);
    }
}
exports.AuthRoutes = AuthRoutes;
