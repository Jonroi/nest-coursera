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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const sum_service_service_1 = require("./sum-service/sum-service.service");
const app_dto_1 = require("./dto/app.dto");
let AppController = class AppController {
    appService;
    sumService;
    constructor(appService, sumService) {
        this.appService = appService;
        this.sumService = sumService;
    }
    getSum(a, b) {
        return parseInt(this.sumService.getSum(a, b));
    }
    askQuestion() {
        return 'how are you?';
    }
    answer(getAnswerDto, req, res) {
        let response;
        let status;
        if (req.body.answer === 'yes') {
            response = 'it is yes';
            status = 200;
        }
        else {
            throw new common_1.BadRequestException();
        }
        res.status(status).json({ res: response });
    }
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('/sum'),
    __param(0, (0, common_1.Query)('num1')),
    __param(1, (0, common_1.Query)('num2')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Number)
], AppController.prototype, "getSum", null);
__decorate([
    (0, common_1.Get)('/askquestion'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "askQuestion", null);
__decorate([
    (0, common_1.Post)('answer'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.AnswerDto, Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "answer", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        sum_service_service_1.SumServiceService])
], AppController);
//# sourceMappingURL=app.controller.js.map