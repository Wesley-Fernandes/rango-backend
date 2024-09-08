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
exports.Auth = void 0;
const user_1 = require("../schema/user");
const criptografy_1 = require("../utils/criptografy");
const repository_1 = __importDefault(require("../repository"));
class Auth {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { birth, email, username, password: FPassword } = user_1.userSchema.parse(req.body);
            if ((yield repository_1.default.user.havePermission(email)) == null) {
                return res.status(401).json({ message: 'Você não tem permissão para cadastrar esse email.' });
            }
            if (yield repository_1.default.user.existsEmail(email)) {
                return res.status(409).json({ message: 'Email já cadastrado.' });
            }
            const password = (0, criptografy_1.encript)(FPassword);
            yield repository_1.default.user.createUser({ birth, email, username, password });
            return res.status(201).json({ message: 'Conta criada com sucesso!' });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = user_1.userLoginSchema.parse(req.body);
            const found = yield repository_1.default.user.find(user.email);
            if (!found)
                return res.status(404).json({ message: 'Usuário não existe.' });
            if ((0, criptografy_1.decript)(user.password, found.password)) {
                res.setHeader('authorization', (0, criptografy_1.genToken)(found.id));
                return res.status(200).json({ message: 'Login efetuado com sucesso.' });
            }
            return res.status(401).json({ message: 'Dados invalidos.' });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield repository_1.default.user.list();
            return res.status(200).json(users);
        });
    }
    unique(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            if (!id) {
                return res.status(401).json({ message: 'ID não fornecido.' });
            }
            const users = yield repository_1.default.user.findById(id);
            return res.status(200).json(users);
        });
    }
}
exports.Auth = Auth;
