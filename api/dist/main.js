"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const bot_module_1 = require("./bot/bot.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(bot_module_1.BotModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Authorization',
    });
    await app.listen("3000");
}
void bootstrap();
//# sourceMappingURL=main.js.map