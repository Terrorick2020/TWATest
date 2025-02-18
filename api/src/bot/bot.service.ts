import { Injectable } from '@nestjs/common'
import { Context } from 'telegraf'

@Injectable()
export class BotService {
    async sendGreeting(ctx: Context) {
        await ctx.reply(
            '👋 Привет! Я твой Telegram-бот для знакомств на NestJS.',
        )
    }

    async sendHelp(ctx: Context) {
        await ctx.reply(
            '📖 Доступные команды:\n/start - Запуск бота\n/help - Помощь',
        )
    }
}
