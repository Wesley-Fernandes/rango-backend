"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkRoutes = void 0;
const controllers_1 = __importDefault(require("../controllers"));
class WorkRoutes {
    constructor(router) {
        this.work = new controllers_1.default.Work();
        this.route = router;
        this.route.post('/create', this.work.createWork);
        this.route.get('/find/:id', this.work.getWork);
        this.route.get('/list', this.work.getWorks);
        this.route.patch('/find/:id', this.work.updateWork);
        this.route.delete('/find/:id', this.work.eraseWork);
        this.route.get('/schedule', this.work.queryWorks);
    }
}
exports.WorkRoutes = WorkRoutes;
