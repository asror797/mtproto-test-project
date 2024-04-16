const drivers = require('../models/driver.model')

class DriverService {
  drivers = drivers

  async driverRetrieveAll(payload) {
    const driverList = await this.drivers.find().select('-updatedAt').exec()

    const driverCount = await this.drivers.countDocuments().exec()

    return {
      count: driverCount,
      driverList: driverList
    }
  }

  async checkDriver(telegram_id) {
    const driver = await this.drivers
      .findOne({
        telegram_id: telegram_id
      })
      .select('-createdAt -updatedAt')
      .exec()

    return {
      driver,
      is_exist: !!driver
    }
  }

  async driverRetrieveOne(payload) {}

  async driverCreate(payload) {
    const driver = await this.drivers.create({
      fullname: `${payload.first_name + ' ' + payload.last_name}`,
      telegram_id: payload.telegram_id,
      phone_number: payload.phone_number
    })
    return driver
  }

  async driverUpdate(payload) {
    let updateObj = {}

    if (payload.region) {
      updateObj.region = payload.region
    }

    if (payload.district) {
      updateObj.district = payload.district
    }

    if (payload.auto) {
      updateObj.auto = payload.auto
    }

    if (payload.phone_number) {
      updateObj.phone_number = payload.phone_number
    }

    if (payload.fullname) {
      updateObj.fullname = payload.fullname
    }


    await this.drivers.updateOne({
      telegram_id: payload.telegram_id
    }, updateObj)
  }

  async driverDelete(payload) {}
}

module.exports = DriverService
