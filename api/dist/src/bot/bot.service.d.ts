import { Context } from 'telegraf';
export declare class BotService {
    sendGreeting(ctx: Context): Promise<void>;
    sendHelp(ctx: Context): Promise<void>;
}
