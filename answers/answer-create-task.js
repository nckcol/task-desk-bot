const Markup = require('telegraf/markup')


class AnswerCreateTask {
    constructor(query) {
        
        this.id = 'CREATE_TASK'
        this.title = 'Create Task?'
        this.description = 'Press here'
        this.message = `*Do you want to assign this task to member?*\n\n${query}`
        this.keyboard = [
            [
                Markup.callbackButton('OK', `${this.id}`),
                Markup.callbackButton('Cancel', 'CANCEL')
            ]
        ]
    }
}


module.exports = AnswerCreateTask