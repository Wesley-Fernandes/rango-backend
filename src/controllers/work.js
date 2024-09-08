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
exports.Work = void 0;
const repository_1 = __importDefault(require("../repository"));
const criptografy_1 = require("../utils/criptografy");
const date_1 = require("../utils/date");
class Work {
    createWork(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const props = req.body;
            yield repository_1.default.work.createWork(props);
            return res.status(201).json({ message: 'Trabalho agendado.' });
        });
    }
    getWork(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (!id) {
                return res.status(401).json({ message: 'Forneça o ID do registro.' });
            }
            const work = yield repository_1.default.work.getWork(id);
            if (!work) {
                return res.status(404).json({ message: 'Registro não existe.' });
            }
            return res.status(200).json(work);
        });
    }
    getWorks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { max, min } = yield (0, date_1.getDatasParams)();
            console.log({ max, min });
            const works = yield repository_1.default.work.getWorks(max, min);
            if (works.length < 1) {
                return res.status(404).json({ message: 'Não foi encontrado registros.' });
            }
            return res.status(200).json(works);
        });
    }
    //http://localhost:2840/api/auth/work/schedule?month=january&year=2024
    queryWorks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { month, year } = req.query;
            if (!month || !year) {
                return res.status(401).json({ message: 'Forneça MONTH e YEAR dos registros.' });
            }
            const date = new Date();
            date.setFullYear(Number(year), Number(month));
            const { max, min } = yield (0, date_1.getDatasParams)(date);
            const works = yield repository_1.default.work.getWorks(max, min);
            if (works.length < 1) {
                return res.status(404).json({ message: 'Não foi encontrado registros.' });
            }
            return res.status(200).json(works);
        });
    }
    updateWork(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.headers.authorization;
            const user = (0, criptografy_1.decode)(token);
            const props = req.body;
            const { id } = req.params;
            if (!id || !user) {
                return res.status(401).json({ message: 'Forneça o ID do registro.' });
            }
            const work = yield repository_1.default.work.updateWork(id, props, user.id);
            if (!work) {
                return res.status(404).json({ message: 'Registro atualizado.' });
            }
            return res.status(200).json(work);
        });
    }
    eraseWork(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (!id) {
                return res.status(401).json({ message: 'Forneça o ID do registro.' });
            }
            yield repository_1.default.work.deleteWork(id);
            return res.status(200).json({ message: 'Registro deletado.' });
        });
    }
}
exports.Work = Work;
