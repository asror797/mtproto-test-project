const { Router } = require('express')
const DistrictController = require('../controllers/district.controller')


class DistrictRoute {
  path = '/district'
  router = Router()
  districtController = new DistrictController()

  constructor() {
    this.initializeRoutes()
  }

  initializeRoutes() {
    this.router.get(`${this.path}`, this.districtController.driverRetrieveAll)
    this.router.patch(`${this.path}/:id`,this.districtController.driverUpdate)
    this.router.delete(`${this.path}/:id`,this.districtController.driverDelete)
  }
}

module.exports = DistrictRoute
