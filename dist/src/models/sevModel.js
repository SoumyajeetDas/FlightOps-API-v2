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
class SevDatas {
}
__decorate([
    (0, typegoose_1.prop)({
        required: [true, 'Please provide the title of the Ticket'],
        unique: true,
    }),
    __metadata("design:type", String)
], SevDatas.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: [true, 'Please enter the Ticket No. or keep as N/A'] }),
    __metadata("design:type", String)
], SevDatas.prototype, "tickNos", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: [true, 'Please enter the MI No. or keep as N/A'] }),
    __metadata("design:type", String)
], SevDatas.prototype, "miNos", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: [true, 'Please enter the application type'],
        enum: {
            values: [
                'ACARS',
                'Aircraft Performance',
                'FOGS',
                'Jetplan',
                'Pilot Briefing',
                'QXEFB',
                'S4A',
                'VisOps',
                'VisOps DB',
                'WAM',
                'Weather',
                'WebSendTimes',
                'Related to other Team',
                'Multiple System Down',
                'FlightEventsPublisherSvc',
                'ESM/FSM',
            ],
            message: 'Please enter the correct application type',
        },
    }),
    __metadata("design:type", String)
], SevDatas.prototype, "applications", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: [true, 'Please enter the type of Ticket'],
        enum: {
            values: ['Sev1', 'Sev2'],
            message: 'Please enter the correct ticket type',
        },
    }),
    __metadata("design:type", String)
], SevDatas.prototype, "ticketType", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: [true, 'Please enter the date'] }),
    __metadata("design:type", Date)
], SevDatas.prototype, "timeOccured", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: [true, 'Please enter the description'] }),
    __metadata("design:type", String)
], SevDatas.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.prop)({ trim: true, default: '' }),
    __metadata("design:type", String)
], SevDatas.prototype, "link", void 0);
const SevModel = (0, typegoose_1.getModelForClass)(SevDatas);
exports.default = SevModel;
