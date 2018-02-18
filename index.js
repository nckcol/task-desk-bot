const dotenv = require('dotenv');
dotenv.config();

const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

const Telegram = require('telegraf/telegram');
const telegram = new Telegram(process.env.BOT_TOKEN);

const InlineQueryHandler = require('./handlers/inline-query-handler');
const inlineQueryHandler = new InlineQueryHandler();

const database = require('./database');

/* middleware */
bot.use(
  database.middleware({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
  })
);

bot.start(ctx => {
  console.log('started:', ctx.from.id);
  return ctx.reply('Welcome!');
});
bot.command('help', ctx => ctx.reply('Try send a sticker!'));
bot.command('show users', ctx => {
  ctx.db.models.User.findAll()
    .then(users => {
      ctx.reply(users)
    })
})
bot.on('inline_query', inlineQueryHandler.getHandler());
bot.action('CREATE_TASK', ctx => {
  ctx.editMessageText(`@${ctx.from.username} accepted task`);
});
bot.startPolling();
