const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const AnswerCreateTask = require('../answers/answer-create-task')

class InlineQueryHandler {
  constructor() {

  }

  handle({ inlineQuery, answerInlineQuery}) {
    let answers = []
    
    if (inlineQuery) {
      answers.push(this.buildAnswer(new AnswerCreateTask(inlineQuery.query)))
    }
    
    return answerInlineQuery(answers)
  }


  buildAnswer({id, title, description, message, keyboard}) {
    return {
      id,
      title,
      description,
      type: 'article',
      input_message_content: {
        message_text: message,
        parse_mode: 'Markdown'
      },
      reply_markup: {
        inline_keyboard: keyboard
      }
    }
  
  }



  getHandler() {
    return this.handle.bind(this)
  }

}



module.exports = InlineQueryHandler