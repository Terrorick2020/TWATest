import { Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
import { Context } from 'telegraf/typings/context';

@Injectable()
export class BotService {
  constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}

  async setWebAppButton() {

    await this.bot.telegram.setChatMenuButton({
      menuButton: {
        type: 'web_app',
        text: 'Знакомства',
        web_app: {
          url: 'https://10.16.15.207:5173/',
        },
      },
    });
  }


  async start(ctx: Context) {

    const inlineKeyboard = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'К знакомствам',
              web_app: {
                url: 'https://10.16.15.207:5173/',
              },
            },
          ],
        ],
      },
    };

    await ctx.reply('Добро пожаловать! Здесь можно протестировать выполнение техниеского задания!', inlineKeyboard)

  }
}