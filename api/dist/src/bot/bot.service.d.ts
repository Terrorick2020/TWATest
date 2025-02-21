import { Telegraf } from 'telegraf';
import { Context } from 'telegraf/typings/context';
export declare class BotService {
    private readonly bot;
    constructor(bot: Telegraf<Context>);
    setWebAppButton(): Promise<void>;
    start(ctx: Context): Promise<void>;
}
