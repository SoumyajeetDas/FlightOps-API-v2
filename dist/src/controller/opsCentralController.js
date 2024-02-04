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
const opsCentralModel_1 = __importDefault(require("../models/opsCentralModel"));
const getAllOpsCentral = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let opsCentralData = yield opsCentralModel_1.default.find().sort({ name: 1 });
        res.status(200).send({
            status: '200 OK',
            length: opsCentralData.length,
            data: {
                dbData: opsCentralData,
            },
        });
    }
    catch (err) {
        res.status(500).send({
            status: '500 Internal Server Error',
            message: err.message,
        });
    }
});
exports.default = getAllOpsCentral;
