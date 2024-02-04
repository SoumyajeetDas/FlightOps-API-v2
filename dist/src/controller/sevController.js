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
exports.getStats = exports.deleteSev = exports.updateSev = exports.addSev = exports.getSev = void 0;
const sevModel_1 = __importDefault(require("../models/sevModel"));
const getSev = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Sorting the data in descending order wrt timeOccured and ascending order with title
        const sevData = yield sevModel_1.default.find().sort({ timeOccured: -1, title: 1 });
        if (sevData.length === 0) {
            return res.status(400).send({
                status: '400 Bad Request',
                message: 'No data to show',
            });
        }
        res.status(200).send({
            status: '200 OK',
            length: sevData.length,
            data: {
                sevs: sevData,
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
exports.getSev = getSev;
const addSev = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body) {
            return res.status(400).send({
                status: '400 Bad Request',
                message: 'No data to add',
            });
        }
        const newSev = yield sevModel_1.default.create(req.body);
        res.status(201).send({
            status: '201 Created',
            newSev,
        });
    }
    catch (err) {
        res.status(500).send({
            status: '500 Internal Server Error',
            message: err.message,
        });
    }
});
exports.addSev = addSev;
const updateSev = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.params.id) {
            return res.status(400).send({
                status: '400 Bad Request',
                message: 'No id is present',
            });
        }
        const sevData = yield sevModel_1.default.findById(req.params.id);
        if (!sevData) {
            return res.status(400).send({
                status: '400 Bad Request',
                message: 'Severity Incident is not present',
            });
        }
        const updatedSev = yield sevModel_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).send({
            status: 'Data got updated',
            updatedSev,
        });
    }
    catch (err) {
        res.status(500).send({
            status: '500 Internal Server Error',
            message: err.message,
        });
    }
});
exports.updateSev = updateSev;
const deleteSev = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.params.id) {
            return res.status(400).send({
                status: '400 Bad Request',
                message: 'No id is present',
            });
        }
        const sevData = yield sevModel_1.default.findById(req.params.id);
        if (!sevData) {
            return res.status(400).send({
                status: '400 Bad Request',
                message: 'Severity Incident is not present',
            });
        }
        yield sevModel_1.default.findByIdAndDelete(req.params.id);
        res.status(200).send({
            status: '200 Ok',
            message: 'Data got deleted',
        });
    }
    catch (err) {
        res.status(500).send({
            status: '500 Internal Server Error',
            message: err.message,
        });
    }
});
exports.deleteSev = deleteSev;
const getStats = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // First groupby with the application name and then find the total sum and then sort with respect to the application name.
        // _id will have the application name.
        let data = yield sevModel_1.default.aggregate([
            {
                $group: {
                    _id: '$applications',
                    sumTotal: { $sum: 1 },
                },
            },
            {
                $sort: { sumTotal: -1 },
            },
        ]);
        if (data.length === 0) {
            return res.status(400).send({
                status: '400 Bad Request',
                message: 'No data to show',
            });
        }
        res.status(200).send({
            status: '200 OK',
            length: data.length,
            data: {
                dbData: data,
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
exports.getStats = getStats;
