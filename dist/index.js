"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./src/app"));
//Configuring the required environment into Node JS which is present in config.env file.
dotenv_1.default.config({ path: './.env' });
// Connecting to DB
// Need to do a type assertion with string otherwise it is throwing error as it is thinking CONNECTION_STRING can be undefined and
// mongoose cannot be connected to an undefined connection string
const connectionString = (_a = process.env.DB_CONNSRTING) === null || _a === void 0 ? void 0 : _a.replace('<password>', process.env.DB_PASSWORD || '');
mongoose_1.default
    .connect(connectionString)
    .then(() => {
    console.log('Database Successfully Connected');
})
    .catch((err) => {
    var error = {
        status: 'Cannot Connect to DB',
        error: err,
    };
    console.log(error);
});
// Configuring port number
let port = process.env.NODE_ENV === 'production' ? process.env.PORT || 5000 : 6000;
console.log(port);
app_1.default.listen(port, () => {
    console.log('Connected to the port : ', port);
});
