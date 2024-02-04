"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sevController_1 = require("../controller/sevController");
const router = express_1.default.Router();
router.use(express_1.default.json());
router.route('/').post(sevController_1.addSev).get(sevController_1.getSev);
router.route('/:id').put(sevController_1.updateSev).delete(sevController_1.deleteSev);
router.get('/stats', sevController_1.getStats);
exports.default = router;
