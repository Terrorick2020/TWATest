import { Module } from '@nestjs/common'
import { TelegrafModule } from 'nestjs-telegraf'
import { BotService } from './bot.service'
import { ConfigModule } from '@nestjs/config'
import { BotUpdate } from './bot.update'

@Module({
    imports: [
        ConfigModule.forRoot(),
        TelegrafModule.forRoot({
            token: process.env.BOT_TOKEN || '',
        }),
    ],
    providers: [BotService, BotUpdate],
})
export class BotModule {}
