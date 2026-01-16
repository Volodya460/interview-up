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
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const flashcards_module_1 = require("./flashcards/flashcards.module");
const prisma_module_1 = require("./prisma/prisma.module");
const entity_exists_middleware_1 = require("./common/middleware/entity-exists.middleware");
const tests_module_1 = require("./tests/tests.module");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const email_sender_module_1 = require("./email-sender/email-sender.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(entity_exists_middleware_1.EntityExistsMiddleware)
            .forRoutes('flashcards/:id', 'tests/:id');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            flashcards_module_1.FlashcardsModule,
            prisma_module_1.PrismaModule,
            tests_module_1.TestsModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            email_sender_module_1.EmailSenderModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map