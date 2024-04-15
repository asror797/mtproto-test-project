const { Schema, model } = require("mongoose");

const districtSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      uniqeu: true
    },
    region_id: {
      type: String,
      required: true
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


const districts = model('district', districtSchema)

module.exports = districts
