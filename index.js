const dotenv = require('dotenv');
dotenv.config();

const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

const Telegram = require('telegraf/telegram');
const telegram = new Telegram(process.env.BOT_TOKEN);

const InlineQueryHandler = require('./handlers/inline-query-handler');
const inlineQueryHandler = new InlineQueryHandler();

const database = require('./database');
const configDatabase = require('./config/database');

/* middleware */
bot.use(
  database.middleware(configDatabase[process.env.NODE_ENV || 'development'])
);

bot.start(ctx => {
  console.log('started:', ctx.from.id);
  return ctx.reply('Welcome!');
});
bot.command('help', ctx => ctx.reply('Try send a sticker!'));
bot.on('inline_query', inlineQueryHandler.getHandler());
bot.action('CREATE_TASK', ctx => {
  ctx.editMessageText(`@${ctx.from.username} accepted task`);
});
bot.startPolling();
