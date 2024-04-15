const { Router } = require('express')
const DriverController = require('./../controllers/driver.controller')

class DriverRoute {
  path = '/driver'
  router = Router()
  driverController = new DriverController()

  constructor() {
    this.initializeRoutes()
  }

  initializeRoutes() {
    this.router.get(`${this.path}`, this.driverController.driverRetrieveAll)
  }
}

module.exports = DriverRoute
