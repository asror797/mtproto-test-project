require('dotenv').config({ path: '.env' })
const TelegramBot = require("node-telegram-bot-api");
const { 
  DriverService,
  StepService,
  RegionService,
  DistrictService
} = require('./services')
const { 
  botSteps, 
  botKeyboard,
  botTexts 
} = require('./utils')

const { TOKEN } = process.env

if (!TOKEN) throw new Error("Token Not Found")

// const token  = '6409351590:AAHcPgNxZupAoHPH_1SHlN-IjPEB8CxUiKY'
// const token = '6731749343:AAF-RpsU4y9JmUV3QGh5QKgjK1-151wfEts'

class Bot {
  static bot

  #driverService = new DriverService()
  #stepService = new StepService()
  #regionService = new RegionService()
  #districtService = new DistrictService()

  constructor() {
    this.bot = new TelegramBot(TOKEN, { polling: true })
  }

  initialize() {
    this.bot.on('message', this.handleMessage.bind(this))
    this.bot.on('new_chat_members', this.handleMemberUpdateMessage.bind(this))
    this.bot.on('left_chat_member', this.handleMemberUpdateMessage.bind(this))
    this.bot.on('polling_error', (err) => { console.log(err) })
  }


  async handleMessage(msg) {
    if (msg.chat.type === 'private') {
      await this.handlePrivateChat(msg)
    } else if (msg.chat.type === 'supergroup') {
      console.log(msg)
      this.handleGroupChat(msg)
    }
  }

  async handlePrivateChat(msg) {
    const user_telegram_id = msg.chat.id
    const user_command = msg.text
    const user_contact = msg.contact

    const userStep = await this.#stepService.getStep(user_telegram_id)
    const data = await this.#driverService.checkDriver(user_telegram_id)

    if (user_contact && userStep === botSteps.registerDriverMenu && !data.is_exist) {
      await this.#driverService.driverCreate({
        first_name: msg.chat.first_name,
        last_name: msg.chat.last_name ? msg.chat.last_name : '',
        telegram_id: user_telegram_id,
        phone_number: user_contact.phone_number
      })

      await this.#stepService.editStep(user_telegram_id, botSteps.enterFullName)
      this.bot.sendMessage(user_telegram_id, botTexts.EnterFullName, botKeyboard.CleanKeyboard)
    }

    if (!data.is_exist && !userStep) {
      await this.#stepService.editStep(user_telegram_id, botSteps.registerDriverMenu)
      this.bot.sendMessage(user_telegram_id, botTexts.AskAuth, botKeyboard.RequestPhoneNumberKeyboard)
    } else {

      if(userStep === botSteps.mainMenu) {

      }

      if(userStep === botSteps.enterFullName) {
        await this.#driverService.driverUpdate({
          telegram_id: user_telegram_id,
          fullname: user_command
        })

        await this.#stepService.editStep(user_telegram_id, botSteps.enterRegion)
        this.bot.sendMessage(user_telegram_id, botTexts.AskRegion, await this.#regionKeyboardMaker())
      }

      if(userStep === botSteps.enterRegion) {
        const region = await this.#regionService.regionRetrieveOne(user_command)
        console.log(region)
        await this.#driverService.driverUpdate({
          telegram_id: user_telegram_id,
          region: region.id
        })

        await this.#stepService.editStep(user_telegram_id, botSteps.enterDistrict)
        this.bot.sendMessage(user_telegram_id, botTexts.AskDistrict, await this.#districtKeyboardMaker(region.id))
      }

      if(userStep === botSteps.enterDistrict) {
        const district = await this.#districtService.districtRetrieveOne(user_command)
        await this.#driverService.driverUpdate({
          telegram_id: user_telegram_id,
          district: district ? district.id : 0
        })

        await this.#stepService.editStep(user_telegram_id, botSteps.enterAuto)
        this.bot.sendMessage(user_telegram_id, botTexts.AskAuto, botKeyboard.AutoKeyboard)
      }

      if(userStep === botSteps.enterAuto) {
        await this.#driverService.driverUpdate({
          telegram_id: user_telegram_id,
          auto: user_command
        })

        await this.#stepService.editStep(user_telegram_id, botSteps.mainMenu)
        this.bot.sendMessage(user_telegram_id, botTexts.Profile, botKeyboard.MainMenuKeyboard)
      }

      if(userStep === botSteps.mainMenu) {
        if (user_command === botTexts.Profile) {
          this.bot.sendMessage(user_telegram_id,`<b>Driver</b>: ${data.driver.fullname}\n<b>Automobil</b>:${data.driver.auto}\n<b>Phone</b>:${data.driver.phone_number}`, { parse_mode: 'HTML'})
        }
      }
    }
  }

  async handleGroupChat(msg) {
    const user_telegram_id = msg.chat.id
    const user_command = msg.text
  }

  handleMemberUpdateMessage(msg) {
    try {
      this.bot.deleteMessage(msg.chat.id,msg.message_id)
    } catch (error) {
      console.log(error)
    }
  }

  async #regionKeyboardMaker() {
    const regions = await this.#regionService.regionRetrieveAll()

    const KeyboardArray = []
    let keyboardLine = []

    regions.map((e) => {
      if (keyboardLine.length == 2) {
        KeyboardArray.push(keyboardLine)
        keyboardLine = [ { text: e.name_oz } ]
      } else {
        keyboardLine.push({
          text: e.name_oz
        })
      }
    })

    return {
      reply_markup: {
        keyboard: KeyboardArray,
        resize_keyboard: true
      },
      parse_mode: 'HTML'
    }
    
  }

  async #districtKeyboardMaker(name) {
    const districts = this.#districtService.districtRetrieveAll(name)

    const KeyboardArray = []
    let keyboardLine = []

    districts.map((e) => {
      if (keyboardLine.length == 2) {
        KeyboardArray.push(keyboardLine)
        keyboardLine = [ { text: e.name_oz } ]
      } else {
        keyboardLine.push({
          text: e.name_oz
        })
      }
    })

    return {
      reply_markup: {
        keyboard: KeyboardArray,
        resize_keyboard: true
      },
      parse_mode: 'HTML'
    }
    
  }
}


const newBot = new Bot()

module.exports = newBot.initialize()
