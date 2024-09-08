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
exports.convertToDate = exports.convertToDateString = exports.converToMoney = exports.getMouthParams = exports.getDatasParams = void 0;
const date_fns_1 = require("date-fns");
const getDatasParams = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (now = new Date()) {
    const lastMomentOfCurrentMonth = (0, date_fns_1.endOfMonth)(now);
    const firstMomentOfCurrentMonth = (0, date_fns_1.startOfMonth)(now);
    const max = lastMomentOfCurrentMonth.toISOString();
    const min = firstMomentOfCurrentMonth.toISOString();
    return { max, min };
});
exports.getDatasParams = getDatasParams;
const getMouthParams = (now) => __awaiter(void 0, void 0, void 0, function* () {
    const lastMomentOfCurrentMonth = (0, date_fns_1.endOfMonth)(now);
    const firstMomentOfCurrentMonth = (0, date_fns_1.startOfMonth)(now);
    const max = lastMomentOfCurrentMonth.getTime();
    const min = firstMomentOfCurrentMonth.getTime();
    return { max, min };
});
exports.getMouthParams = getMouthParams;
const converToMoney = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
};
exports.converToMoney = converToMoney;
const convertToDateString = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleString('pt-BR').replace(',', ' ');
};
exports.convertToDateString = convertToDateString;
const convertToDate = (timestamp) => {
    return new Date(timestamp * 1000);
};
exports.convertToDate = convertToDate;
