const regions = require("../models/region.model");

class RegionService {
  regions = regions

  async regionRetrieveAll(payload) {

    return await this.regions.find().exec()
  }

  async regionRetrieveOne(name) {
    return await this.regions.findOne({
      name_oz: name
    }).exec()
  }
}

module.exports = RegionService
