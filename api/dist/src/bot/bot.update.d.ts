import { Context } from 'telegraf';
import { BotService } from './bot.service';
export declare class BotUpdate {
    private readonly botService;
    constructor(botService: BotService);
    onStart(ctx: Context): Promise<void>;
}
