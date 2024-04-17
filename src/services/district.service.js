const districts = require("./../utils/districts")

class DistrictService {
  districts = districts

  districtRetrieveAll(region_id) {
    return this.districts.filter((e) => e.region_id == region_id)
  }

  districtRetrieveOne(name) {
    return this.districts.find((e) => e.name_oz == name)
  }

  districtRetrieveById(district_id) {
    return this.districts.find((e) => e.id == district_id) || ""
  }
}

module.exports = DistrictService
