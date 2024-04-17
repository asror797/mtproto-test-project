const districts = require("../models/district.model");

class DistrictService {
  districts = districts

  async districtRetrieveAll(region_id) {
    const districts =  await this.districts.find().exec()

    return districts.map((e) => ({ id: e.id, region_id: e.region_id, name_uz: e.name_uz, name_oz: e.name_oz }))
  }

  async districtRetrieveOne(name) {
    return await this.districts.findOne({
      name_oz: name
    }).exec()
  }
}

module.exports = DistrictService
