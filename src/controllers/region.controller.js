const { RegionService } = require("../services");



class RegionController {
  #regionService = new RegionService()

  regionRetrieveAll = async(req,res,next) => {
    try {
      res.json(await this.#regionService.regionRetrieveAll())
    } catch (error) {
      next(error)
    }
  }


  regionRetrieveOne = async(req,res,next) => {
    try {
      res.json(await this.#regionService.regionRetrieveOne(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}

module.exports = RegionController
