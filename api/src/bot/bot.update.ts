import { Update, Command, Ctx } from 'nestjs-telegraf'
import { Context } from 'telegraf'
import { BotService } from './bot.service'

@Update()
export class BotUpdate {
    constructor(private readonly botService: BotService) {}

    @Command('start')
    async onStart(@Ctx() ctx: Context) {
        await this.botService.start(ctx)
    }
}
