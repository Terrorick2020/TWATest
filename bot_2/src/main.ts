import { NestFactory } from '@nestjs/core'
import { BotModule } from './bot/bot.module'

async function bootstrap() {
    const app = await NestFactory.create(BotModule)

    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Authorization',
    })

    await app.listen("4000")
}

void bootstrap()
