const drivers = require('../models/driver.model')

class DriverService {
  drivers = drivers

  async driverRetrieveAll(payload) {
    const driverList = await this.drivers.find().exec()


    return driverList
  }

  async checkDriver(telegram_id) {
    const driver = await this.drivers.findOne({
      telegram_id: telegram_id
    })

    return {
      driver,
      is_exist: !!driver
    }
  }

  async driverRetrieveOne(payload) {}

  async driverCreate(payload) {}

  async driverUpdate(payload) {}

  async driverDelete(payload) {}
}

module.exports = DriverService
