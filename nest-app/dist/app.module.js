"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const sum_service_service_1 = require("./sum-service/sum-service.service");
const sayname_module_1 = require("./sayname/sayname.module");
const authchec_middleware_1 = require("./middleware/authchec.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(authchec_middleware_1.AuthchecMiddleware)
            .forRoutes({ path: '', method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [sayname_module_1.SaynameModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, sum_service_service_1.SumServiceService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map