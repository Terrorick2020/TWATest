"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const app_module_1 = require("./app/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const PORT = configService.get('PORT') ?? 3000;
    const PREFIX = configService.get('PREFIX') ?? '';
    const ALLOWED_ORIGINS = configService.get('ALLOWED_ORIGINS');
    const isDev = configService.get('isDev');
    app.enableCors({
        origin: isDev ? '*' : ALLOWED_ORIGINS,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Authorization',
    });
    app.setGlobalPrefix(PREFIX);
    await app.listen(PORT);
}
void bootstrap();
//# sourceMappingURL=main.js.map