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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const api_errors_1 = require("../utils/api-errors");
const criptografy_1 = require("../utils/criptografy");
class Test {
    error_handler(req, res) {
        throw new api_errors_1.UnauthorizedError('Sem autorização!');
    }
    online(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).json({ message: 'API is online' });
        });
    }
    auth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.headers.authorization;
            const user = (0, criptografy_1.decode)(token);
            res
                .status(200)
                .json({ message: 'User authenticated', token, id: user === null || user === void 0 ? void 0 : user.id });
        });
    }
}
exports.Test = Test;
