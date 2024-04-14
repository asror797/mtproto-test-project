const TelegramBot = require("node-telegram-bot-api");

const token  = '6409351590:AAHcPgNxZupAoHPH_1SHlN-IjPEB8CxUiKY'



class Bot {
  static bot 

  constructor() {
    this.bot = new TelegramBot(token, { polling: true })
  }

  initialize() {
    this.bot.on('message', this.handleMessage.bind(this))
    this.bot.on('new_chat_members', this.handleMemberUpdateMessage.bind(this))
    this.bot.on('left_chat_member', this.handleMemberUpdateMessage.bind(this))
  }


  handleMessage(msg) {
    console.log(msg)
  }

  handleInlineMessage() {}

  handleInlineQueryMessage() {}

  handleMemberUpdateMessage(msg) {
    try {
      this.bot.deleteMessage(msg.chat.id,msg.message_id)
    } catch (error) {
      console.log(error)
    }
  }
}


const newBot = new Bot()

newBot.initialize()
