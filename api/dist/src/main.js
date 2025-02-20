"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const bot_module_1 = require("./bot/bot.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(bot_module_1.BotModule);
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