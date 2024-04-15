const TelegramBot = require("node-telegram-bot-api");
const { MainMenuKeyboard, RequestPhoneNumberKeyboard } = require('./utils/bot-keyboard');
const DriverService = require("./services/driver.service");
const StepService = require("./services/step.service");
// const token  = '6409351590:AAHcPgNxZupAoHPH_1SHlN-IjPEB8CxUiKY'
const token = '6731749343:AAF-RpsU4y9JmUV3QGh5QKgjK1-151wfEts'



class Bot {
  static bot

  #driverService = new DriverService()
  #stepService = new StepService()

  constructor() {
    this.bot = new TelegramBot(token, { polling: true })
  }

  initialize() {
    this.bot.on('message', this.handleMessage.bind(this))
    this.bot.on('new_chat_members', this.handleMemberUpdateMessage.bind(this))
    this.bot.on('left_chat_member', this.handleMemberUpdateMessage.bind(this))
    this.bot.on('polling_error', (err) => { console.log(err) })
  }


  async handleMessage(msg) {
    if (msg.chat.type === 'private') {
      const user_telegram_id = msg.chat.id
      const user_command = msg.text

      const data = await this.#driverService.checkDriver(user_telegram_id)
      if (!data.is_exist) {
        this.bot.sendMessage(user_telegram_id, 'Royxatdan oting', RequestPhoneNumberKeyboard)
      } else {
        const userStep = await this.#stepService.getStep(user_telegram_id)

        if(userStep == '') {
          console.log("ok")
        }
      }
    }
  }

  handlePrivateChat(msg) {
    const userId = msg.chat.id
    this.bot.sendMessage(userId, 'salom', MainMenuKeyboard)

    if (msg.text == '/start') {
      this.bot.sendMessage(userId, 'salom', RequestPhoneNumberKeyboard)
    }
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

module.exports = newBot.initialize()
