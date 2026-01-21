"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const httpExceptionFilter_1 = require("./common/httpExceptionFilter");
const common_1 = require("@nestjs/common");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:5173',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.use((0, cookie_parser_1.default)());
    app.useGlobalFilters(new httpExceptionFilter_1.HttpExceptionFilter());
    await app.listen(process.env.PORT ?? 3000);
    console.log(`🚀 Backend is running`);
}
bootstrap().catch((err) => {
    console.log('❌ Failed to start application:', err);
});
//# sourceMappingURL=main.js.map