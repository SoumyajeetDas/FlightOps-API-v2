"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const contentRouter_1 = __importDefault(require("./routes/contentRouter"));
const sevRouter_1 = __importDefault(require("./routes/sevRouter"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: [
        'https://main--bejewelled-longma-891e99.netlify.app',
        'http://localhost:3000',
        'https://sumolibrary.netlify.app',
    ],
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'], // This will allow CORS to be effective for all the route methods otherwise
    // by default only for GET
}));
// app.options('*',cors());
// app.options('*',cors({
//     origin: ['https://main--bejewelled-longma-891e99.netlify.app', 'http://localhost:3000']
// }));
app.use('/api/v1/fops/contents', contentRouter_1.default);
app.use('/api/v1/fops/sevs', sevRouter_1.default);
// 404 Error
app.all('*', (res) => {
    res.status(404).send({
        status: '404 Error',
        message: 'Url not present',
    });
});
exports.default = app;
