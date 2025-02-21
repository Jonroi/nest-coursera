"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaynameModule = void 0;
const common_1 = require("@nestjs/common");
const sayname_controller_1 = require("./sayname.controller");
const sayname_service_1 = require("./sayname.service");
let SaynameModule = class SaynameModule {
};
exports.SaynameModule = SaynameModule;
exports.SaynameModule = SaynameModule = __decorate([
    (0, common_1.Module)({
        controllers: [sayname_controller_1.SaynameController],
        providers: [sayname_service_1.SaynameService],
    })
], SaynameModule);
//# sourceMappingURL=sayname.module.js.map