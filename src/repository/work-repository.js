"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkRepository = void 0;
const database_1 = __importDefault(require("../config/database"));
class WorkRepository {
    createWork(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.default.work.create({ data: {
                    description: data.description,
                    userID: data.userID,
                    prevID: data.prevID,
                    nextID: data === null || data === void 0 ? void 0 : data.nextID,
                    finish: data === null || data === void 0 ? void 0 : data.finish,
                    end: data.end ? new Date(data.end) : undefined,
                    start: data === null || data === void 0 ? void 0 : data.start
                } });
        });
    }
    existPermission(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.default.permission.findUnique({
                where: { email },
                select: { id: true },
            });
        });
    }
    updateWork(id, data, userID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.default.work.update({
                where: { id, userID },
                data: data,
            });
        });
    }
    deleteWork(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.default.work.delete({ where: { id } });
        });
    }
    getWork(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.default.work.findUnique({ where: { id } });
        });
    }
    getWorks(grant, lower) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.default.work.findMany({
                where: {
                    start: {
                        lte: new Date(grant),
                        gte: new Date(lower)
                    }
                }
            });
        });
    }
}
exports.WorkRepository = WorkRepository;
