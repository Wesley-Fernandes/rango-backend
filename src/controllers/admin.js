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
exports.Admin = void 0;
const repository_1 = __importDefault(require("../repository"));
class Admin {
    createPermission(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const props = req.body;
            if (!props.email || !props.role) {
                return res.status(401).json({ message: 'Forneça a ROLE e o EMAIL do usuario.' });
            }
            if (yield repository_1.default.admin.existPermission(props.email)) {
                return res.status(409).json({ message: 'Já existe uma permissão para este email.' });
            }
            yield repository_1.default.admin.createPermission(props);
            return res.status(201).json({ message: 'Permissão criada.' });
        });
    }
    getPermission(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const props = req.body;
            if (!props.email) {
                return res.status(401).json({ message: 'Forneça o EMAIL do usuario.' });
            }
            const permission = yield repository_1.default.admin.getPermission(props.email);
            if (!permission) {
                return res.status(404).json({ message: 'Permissão não existe.' });
            }
            return res.status(200).json(permission);
        });
    }
    erasePermission(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const props = req.body;
            if (!props.email) {
                return res.status(401).json({ message: 'Forneça o EMAIL do usuario.' });
            }
            yield repository_1.default.admin.deletePermission(props.email);
            return res.status(200).json({ message: 'Permissão deletada.' });
        });
    }
    updatePermission(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const props = req.body;
            if (!props.email || !props.role) {
                return res.status(401).json({ message: 'Forneça a ROLE e o EMAIL do usuario.' });
            }
            if ((yield repository_1.default.admin.existPermission(props.email)) == null) {
                return res.status(409).json({ message: 'Não existe permissão para esse usuario.' });
            }
            yield repository_1.default.admin.updatePermission(props);
            return res.status(201).json({ message: 'Permissão atualizada.' });
        });
    }
}
exports.Admin = Admin;
