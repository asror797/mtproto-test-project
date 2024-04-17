const drivers = require('../models/driver.model')
const DistrictService = require('./district.service')
const RegionService = require('./region.service')

class DriverService {
  drivers = drivers
  #regionService = new RegionService()
  #districtService = new DistrictService()

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

    if (driver) {
      return {
        is_exist: true,
        driver: {
          _id: driver['_id'],
          fullname: driver.fullname,
          phone_number: driver.phone_number,
          telegram_id: driver.telegram_id,
          auto: driver.auto,
          district: this.#districtService.districtRetrieveById(driver.district),
          region: this.#regionService.regionRetrieveById(driver.region)
        }
      }
    } else {
      return {
        driver,
        is_exist: false
      }
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
