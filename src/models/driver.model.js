const { Schema, model } = require("mongoose");


const driverSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true
    },
    phone_number: {
      type: String,
      required: true
    },
    telegram_id: {
      type: Number,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

const drivers = model('driver', driverSchema)

module.exports = drivers
