const { Router } = require('express')
const RegionController = require('../controllers/region.controller')


class RegionRoute {
  path = '/region'
  router = Router()
  regionController = new RegionController()

  constructor() {
    this.initializeRoute()
  }

  initializeRoute() {
    this.router.get(`${this.path}`, this.regionController.regionRetrieveAll)
    this.router.get(`${this.path}`, this.regionController.regionRetrieveOne)
  }
}

module.exports = RegionRoute
