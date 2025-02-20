import { Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
import { Context } from 'telegraf/typings/context';

@Injectable()
export class BotService {
  constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}

  async start(ctx: Context) {
    // Основная клавиатура
    const mainKeyboard = {
      reply_markup: {
        keyboard: [
          [
            { text: 'Лайк' },
            { text: 'Сообщение' },
          ],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };

    // Inline клавиатура с кнопкой для открытия Web App
    const inlineKeyboard = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'К знакомствам',
              web_app: {
                url: 'https://10.16.15.207:5173/', // Заменить на URL твоего веб-приложения
              },
            },
          ],
        ],
      },
    };

    // Отправляем первое сообщение с основной клавиатурой
    await ctx.reply('Добро пожаловать! Используйте кнопки ниже:', mainKeyboard);

    // Отправляем дополнительное сообщение с кнопкой в inline клавиатуре
    await ctx.reply('Нажми для перехода к знакомствам', inlineKeyboard);
  }
}