const DriverService = require('./../services/driver.service')

class DriverController {
  driverService = new DriverService()

  driverRetrieveAll = async(req,res,next) => {
    try {
      res.json(await this.driverService.driverRetrieveAll())
    } catch (error) {
      next(error)
    }
  }

  driverUpdate = async(req,res,next) => {
    try {
      
    } catch (error) {
      next(error)
    }
  }

  driverDelete = async(req,res,next) => {
    try {
      
    } catch (error) {
      next(error)
    }
  }
}

module.exports = DriverController
