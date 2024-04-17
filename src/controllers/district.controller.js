const { DistrictService } = require("../services");

class DistrictController {
  #districtService = new DistrictService()

  districtRetrieveAll = async(req,res,next) => {
    try {
      res.json(await this.#districtService.districtRetrieveAll())
    } catch (error) {
      next(error)
    }
  }


  districtRetrieveOne = async(req,res,next) => {
    try {
      res.json(await this.#districtService.districtRetrieveOne(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}

module.exports = DistrictController
