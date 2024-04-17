const regions = require("../models/region.model")


class RegionService {
  regions = regions

  async regionRetrieveAll() {
    return await this.regions.find().exec()
  }

  async regionRetrieveOne(name) {
    return  await this.regions.findOne().exec()
  }
}

module.exports = RegionService
