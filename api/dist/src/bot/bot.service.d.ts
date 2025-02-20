import { Telegraf } from 'telegraf';
import { Context } from 'telegraf/typings/context';
export declare class BotService {
    private readonly bot;
    constructor(bot: Telegraf<Context>);
    start(ctx: Context): Promise<void>;
}
