"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("@typegoose/typegoose");
class AdsumoQueries {
}
__decorate([
    (0, typegoose_1.prop)({ default: 'SavedSearchWithScheduleSyncDefinition' }),
    __metadata("design:type", String)
], AdsumoQueries.prototype, "type", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: [true, 'Please enter the name'], unique: true }),
    __metadata("design:type", String)
], AdsumoQueries.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({
        queryText: { required: [true, 'Please enter the queryText'] },
        byReceiptTime: { default: false },
        viewName: { default: '' },
        parsingMode: { default: 'AutoParse' },
        allowMixed: typegoose_1.Severity.ALLOW,
    }),
    __metadata("design:type", Object)
], AdsumoQueries.prototype, "search", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: null }),
    __metadata("design:type", Date)
], AdsumoQueries.prototype, "searchSchedule", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: null }),
    __metadata("design:type", String)
], AdsumoQueries.prototype, "description", void 0);
const AdSumoModel = (0, typegoose_1.getModelForClass)(AdsumoQueries);
exports.default = AdSumoModel;
