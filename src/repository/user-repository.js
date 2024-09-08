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
exports.UserRepository = void 0;
const database_1 = __importDefault(require("../config/database"));
class UserRepository {
    havePermission(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.default.permission.findUnique({
                where: { email },
                select: { id: true },
            });
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.default.user.create({
                data: {
                    email: user.email,
                    password: user.password,
                    username: user.username,
                    birth: user.birth,
                },
            });
        });
    }
    existsEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.default.user.findUnique({
                where: { email },
                select: { id: true },
            });
        });
    }
    find(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.default.user.findUnique({
                where: { email },
                select: { id: true, password: true },
            });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.default.user.findUnique({
                where: { id },
                select: { id: true, email: true, username: true, birth: true },
            });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.default.user.findMany({
                select: { id: true, username: true },
            });
        });
    }
}
exports.UserRepository = UserRepository;
