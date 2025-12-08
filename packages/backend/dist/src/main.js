"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const httpExceptionFilter_1 = require("./common/httpExceptionFilter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new httpExceptionFilter_1.HttpExceptionFilter());
    await app.listen(process.env.PORT ?? 3000);
    console.log(`🚀 Backend is running`);
}
bootstrap().catch((err) => {
    console.log('❌ Failed to start application:', err);
});
//# sourceMappingURL=main.js.map