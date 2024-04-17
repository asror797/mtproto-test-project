const regions = require("./../utils/regions")

class RegionService {
  regions = regions

  regionRetrieveAll() {
    return this.regions
  }

  regionRetrieveOne(name) {
    return  this.regions.find((e) => e.name_oz == name)
  }

  regionRetrieveById(region_id) {
    return this.regions.find((e) => e.id == region_id) || ""
  }
}

module.exports = RegionService
