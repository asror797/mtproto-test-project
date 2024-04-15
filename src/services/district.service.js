const districts = require("../models/district.model");

class DistrictService {
  districts = districts

  async districtRetrieveAll(region_id) {
    return await this.districts.find({
      region_id: region_id
    }).exec()
  }

  async districtRetrieveOne(name) {
    return await this.districts.findOne({
      name_oz: name
    }).exec()
  }
}

module.exports = DistrictService
