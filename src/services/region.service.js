const regions = require("./../utils/regions")

class RegionService {
  regions = regions

  regionRetrieveAll() {
    return this.regions
  }

  regionRetrieveOne(name) {
    return  this.regions.find((e) => e.name_oz == name)
  }
}

module.exports = RegionService
