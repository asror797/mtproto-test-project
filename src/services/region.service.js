const regions = require("../models/region.model")


class RegionService {
  regions = regions

  async regionRetrieveAll() {
    const districts =  await this.regions.find().exec()


    return districts.map((e) => ({ id: e.id, name_uz: e.name_uz, name_oz: e.name_oz}))
  }

  async regionRetrieveOne(name) {
    return  await this.regions.findOne({ region_id: name}).exec()
  }
}

module.exports = RegionService
