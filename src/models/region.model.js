const { Schema, model } = require("mongoose");

const regionSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      uniqeu: true
    },
    name_uz: {
      type: String,
      required: true
    },
    name_oz: {
      type: String,
      required: true
    },
    name_ru: {
      type: String,
      required: true
    },
  },
  {
    versionKey: false
  }
)

const regions = model('region', regionSchema)

module.exports = regions