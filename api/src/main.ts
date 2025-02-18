import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app/app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const configService: ConfigService<EnvConfig> = app.get(ConfigService)

    const PORT: number = configService.get<number>('PORT')
    const PREFIX: string = configService.get<string>('PREFIX')
    const ALLOWED_ORIGINS: string = configService.get<string>('ALLOWED_ORIGINS')
    const isDev: boolean = configService.get<boolean>('isDev')

    app.enableCors({
        origin: isDev ? '*' : ALLOWED_ORIGINS,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Authorization',
    })

    app.setGlobalPrefix(PREFIX)
    await app.listen(PORT)
}

bootstrap()
