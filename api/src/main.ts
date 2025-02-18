import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app/app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const configService: ConfigService = app.get(ConfigService)

    const PORT = configService.get<number>('PORT') ?? 3000
    const PREFIX = configService.get<string>('PREFIX') ?? ''
    const ALLOWED_ORIGINS = configService.get<string>('ALLOWED_ORIGINS')
    const isDev = configService.get<boolean>('isDev')

    app.enableCors({
        origin: isDev ? '*' : ALLOWED_ORIGINS,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Authorization',
    })

    app.setGlobalPrefix(PREFIX)
    await app.listen(PORT)
}

void bootstrap()
