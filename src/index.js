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
} = require('./utils');
const botCallback = require('./constants/bot.callback');

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
    this.bot.on('callback_query', this.handleInlineChats.bind(this))
    this.bot.on('new_chat_members', this.handleMemberUpdateMessage.bind(this))
    this.bot.on('left_chat_member', this.handleMemberUpdateMessage.bind(this))
    this.bot.on('polling_error', (err) => { console.log(err) })
  }


  async handleInlineChats(msg) {
    if (msg.data == botCallback.ChangeDirectionCallBack) {
      const trimmedText = msg.message.text.split('\n').filter(line => line.trim() !== '')
      const newArr = []
  
      trimmedText.map((e,i) => {
        if (i == 0) {
          newArr.push(trimmedText[1])
        } else if (i == 1) {
          newArr.push(trimmedText[0])
        } else {
          newArr.push(e)
        }
      })
      const callbackData = msg.data
      const arrayText = msg.message.text.split('\n').filter(line => line.trim() !== '')
  
      this.bot.editMessageText(`${newArr.join('\n\n')}`, { 
        inline_message_id: msg.id,
        message_id: msg.message.message_id,
        chat_id: msg.from.id,
        reply_markup: {
          inline_keyboard: msg.message.reply_markup.inline_keyboard
        }
      })
    }

    if (msg.data.split("_")[0] == botCallback.ChangeEmptySeat) {
      console.log(msg.data.split("_")[1])
      // this.bot.editMessageText('sas', {
      //   inline_message_id: msg.id,
      //   message_id: msg.message,message_id,
      //   chat_id: msg.from.id,
      //   reply_markup: { 
      //     inline_keyboard: msg.message.reply_markup.inline_keyboard
      //   }
      // })
    }

    if (msg.data == botCallback.SelectDepartTime) {
      console.log("ok")
    }

    if (msg.data == "forward") {
      this.bot.editMessageReplyMarkup({ inline_keyboard: [] }, { 
        inline_message_id: msg.id,
        message_id: msg.message.message_id,
        chat_id: msg.from.id
      })
    }
  }


  async handleMessage(msg) {
    if (msg.chat.type === 'private') {
      console.log(msg)
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
    console.log(data, userStep)

    if (user_command === '/start') {
      if (!data.is_exist) {
        await this.#stepService.editStep(user_telegram_id, botSteps.registerDriverMenu)
        this.bot.sendMessage(user_telegram_id, botTexts.AskAuth, botKeyboard.RequestPhoneNumberKeyboard)
      } else {
        await this.#stepService.editStep(user_telegram_id, botSteps.mainMenu)
        this.bot.sendMessage(user_telegram_id, botTexts.Profile, botKeyboard.MainMenuKeyboard)
      }
    } else {
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
          if (user_command == botTexts.Settings) {
            await this.#stepService.editStep(user_telegram_id, botSteps.profileEdit)
            this.bot.sendMessage(user_telegram_id, botTexts.Settings, botKeyboard.ProfileKeyboard)
          }

          if (user_command == botTexts.NewAdSend) {
            this.bot.sendMessage(user_telegram_id, this.newAdCreate(data.driver), { 
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: "Йўналишини ўзгартириш 🔄",
                      callback_data: botCallback.ChangeDirectionCallBack
                    }
                  ],
                  [
                    {
                      text: "Одам Сони Тангланг ⬇️",
                      callback_data: botCallback.SelectEmptySeat
                    }
                  ],
                  [
                    {
                      text: "1",
                      callback_data: botCallback.ChangeEmptySeatOne
                    },
                    {
                      text: "2",
                      callback_data: botCallback.ChangeEmptySeatTwo
                    },
                    {
                      text: "3",
                      callback_data: botCallback.ChangeEmptySeatThree
                    },
                    {
                      text: "4 ✅",
                      callback_data: botCallback.ChangeEmptySeatFour
                    }
                  ],
                  [
                    {
                      text: "Faqat pochta olaman",
                      callback_data: "empt"
                    },
                    {
                      text: "Ayollar bor",
                      callback_data: "game"
                    }
                  ],
                  [
                    {
                      text: "Қачон Вақтни Танланг ⬇️",
                      callback_data: botCallback.SelectDepartTime
                    }
                  ],
                  [
                    {
                      text: "13:00 - 14:00",
                      callback_data: "date"
                    },
                    {
                      text: "14:00 - 15:00",
                      callback_data: "date"
                    }
                  ],
                  [
                    {
                      text: "15:00 - 16:00",
                      callback_data: "date"
                    },
                    {
                      text: "16:00 - 17:00",
                      callback_data: "date"
                    }
                  ],
                  [
                    {
                      text: "17:00 - 18:00",
                      callback_data: "date"
                    },
                    {
                      text: "18:00 - 19:00",
                      callback_data: "date"
                    }
                  ],
                  [
                    {
                      text: "Тайёр 👍 (Юбориш)",
                      callback_data: "forward",
                    }
                  ]
                ],
              },
              parse_mode: 'HTML'
            })
          }
        }

        if (userStep === botSteps.profileEdit) {
          if (user_command === botTexts.BackMenu) {
            await this.#stepService.editStep(user_telegram_id, botSteps.mainMenu)
            this.bot.sendMessage(user_telegram_id, botTexts.MainMenu, botKeyboard.MainMenuKeyboard)
          }

          if (user_command === botTexts.ProfileEditFullName) {
            await this.#stepService.editStep(user_telegram_id, botSteps.enterFullName)
            this.bot.sendMessage(user_telegram_id, botTexts.EnterFullName, botKeyboard.CleanKeyboard)
          }
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
          this.textLengthChecker(user_command)
          const region = this.#regionService.regionRetrieveOne(user_command)
          if (region) {
            await this.#driverService.driverUpdate({
              telegram_id: user_telegram_id,
              region: region.id
            })
    
            await this.#stepService.editStep(user_telegram_id, botSteps.enterDistrict)
            this.bot.sendMessage(user_telegram_id, botTexts.AskDistrict, await this.#districtKeyboardMaker(region.id))
          } else {
            this.bot.sendMessage(user_telegram_id, 'Iltimos foydalangin')
          }
        }

        if(userStep === botSteps.enterDistrict) {
          this.textLengthChecker(user_command)
          const district = this.#districtService.districtRetrieveOne(user_command)
          if (district) {
            await this.#driverService.driverUpdate({
              telegram_id: user_telegram_id,
              district: district ? district.id : 0
            })
            await this.#stepService.editStep(user_telegram_id, botSteps.enterAuto)
            this.bot.sendMessage(user_telegram_id, botTexts.AskAuto, botKeyboard.AutoKeyboard)
          } else {
            this.bot.sendMessage(user_telegram_id,'Iltimos pastdagi tugmadan foydalan')
          }
        }

        if(userStep === botSteps.enterAuto) {
          this.textLengthChecker(user_command)
          await this.#driverService.driverUpdate({
            telegram_id: user_telegram_id,
            auto: user_command
          })

          await this.#stepService.editStep(user_telegram_id, botSteps.mainMenu)
          this.bot.sendMessage(user_telegram_id, botTexts.Profile, botKeyboard.MainMenuKeyboard)
        }

        if(userStep === botSteps.mainMenu) {
          if (user_command === botTexts.Profile) {
            this.bot.sendMessage(user_telegram_id,`<b>Ҳайдовчи: </b>\n\n👮‍♂️ ${data.driver.fullname}\n\n<b>Автомобил: </b>\n\n🚖 ${data.driver.auto}\n\n<b>Телефон рақам: </b>\n\n📞 ${data.driver.phone_number}\n\n<b>Вилоят: </b>\n\n🌆 ${data.driver.region.name_oz}\n\n<b>Туман: </b>\n\n📍 ${data.driver.district.name_oz}\n\n<b>Қўшимча Туманлар: </b>\n${data.driver.locations ? data.driver.location : ""}`, { parse_mode: 'HTML'})
          }
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

  newAdCreate(data) {
    const arrayText = []
    const location = 'Toshkent'
    arrayText.push(`◀️ <b>${data.region.name_oz.toUpperCase()}DAN</b>\n\n`)
    arrayText.push(`▶️ <b>${location.toUpperCase()}GA</b>\n\n`)
    // soat
    arrayText.push(`⏰ <b>Hozir yuraman srochniy</b>\n\n`)
 
    // odam soni 
    arrayText.push(`👥 <b>3 ta odam kerak</b>\n\n`)

    // pochta
    arrayText.push(`📦 <b>Pochta Olaman</b>\n\n`)

    // telefon raqami
    arrayText.push(`🚖 Moshina: <b>${data.auto}</b>\n\n`)
    arrayText.push(`📞 <b>${data.phone_number}</b>\n`)

    return arrayText.join('')
  }


  textLengthChecker(text) {
    if (text.length > 40) {
      throw new Error("Too long text")
    }
  }
}


const newBot = new Bot()

module.exports = newBot.initialize()
