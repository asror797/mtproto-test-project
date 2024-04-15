const DriverService = require('./../services/driver.service')

class DriverController {
  driverService = new DriverService()

  driverRetrieveAll = async(req,res,next) => {
    try {
      console.log(req)
      res.json("ok")
    } catch (error) {
      next(error)
    }
  }
}

module.exports = DriverController
