const dotenv = require('dotenv')
const Telegraf = require('telegraf')
const Telegram = require('telegraf/telegram')

const InlineQueryHandler = require('./handlers/inline-query-handler')

dotenv.config()

const inlineQueryHandler = new InlineQueryHandler()

const bot = new Telegraf(process.env.BOT_TOKEN)
const telegram = new Telegram(process.env.BOT_TOKEN)

bot.start((ctx) => {
  console.log('started:', ctx.from.id)
  return ctx.reply('Welcome!')
})
bot.command('help', (ctx) => ctx.reply('Try send a sticker!'))
bot.on('inline_query', inlineQueryHandler.getHandler())
bot.action('CREATE_TASK', (ctx) => {
  ctx.editMessageText(`@${ctx.from.username} accepted task`)
})
bot.startPolling()