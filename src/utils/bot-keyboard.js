const { Profile, NewAdSend, Settings, RequestPhoneNumber } = require('./bot-texts')



module.exports = {
  MainMenuKeyboard: {
    reply_markup: {
      keyboard: [
        [
          {
            text: NewAdSend
          },
          {
            text: Profile
          }
        ],
        [
          {
            text: Settings
          }
        ]
      ],
      resize_keyboard: true
    },
    parse_mode: 'HTML'
  },
  RequestPhoneNumberKeyboard: {
    reply_markup: {
      keyboard: [
        [
          {
            text: RequestPhoneNumber,
            request_contact: true
          }
        ]
      ],
      resize_keyboard: true
    },
    parse_mode: 'HTML'
  }
}