const botTexts = require('./bot-texts')
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
  },
  RegionsKeyboard: {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Наманган"
          },
          {
            text: "Андижон"
          }
        ],
        [
          {
            text: "Фарғона"
          },
          {
            text: "Қашқадарё"
          }
        ],
        [
          {
            text: "Самарқанд"
          },
          {
            text: "Жиззах"
          }
        ],
        [
          {
            text: "Бухоро"
          },
          {
            text: "Сурхондарё"
          }
        ],
        [
          {
            text: "Бухоро"
          },
          {
            text: "Сурхондарё"
          }
        ]
      ],
      resize_keyboard: true
    },
    parse_mode: 'HTML'
  },
  DistrictKeyboard: {
    reply_markup: {
      keyboard: [
        [
          {
            text: ""
          }
        ]
      ],
      resize_keyboard: true
    },
    parse_mode: 'HTML'
  },
  CleanKeyboard: {
    reply_markup: {
      remove_keyboard: true
    },
    parse_mode: 'HTML'
  },
  AutoKeyboard: {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Cobalt"
          },
          {
            text: "Jentra"
          }
        ],
        [
          {
            text: "Lacetti"
          },
          {
            text: "Epica"
          }
        ]
      ],
      resize_keyboard: true
    },
    parse_mode: 'HTML'
  },
  ProfileKeyboard: {
    reply_markup: {
      keyboard: [
        [
          {
            text: botTexts.ProfileEditFullName
          }
        ],
        [
          {
            text: botTexts.ProfileEditAddPhoneNumber
          }
        ],
        [
          {
            text: botTexts.ProfileEditRegion
          }
        ],
        [
          {
            text: botTexts.ProfileEditDistrict
          }
        ]
      ],
      resize_keyboard: true
    },
    parse_mode: 'HTML'
  }
}
