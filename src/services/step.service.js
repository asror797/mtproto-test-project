const redisService = require("./redis.service")

class StepService {
  #rediService = redisService

  async editStep(telegram_id, step) {
    await this.#rediService.setValue(`${telegram_id}`, step)
  }

  async getStep(telegram_id) {
    return await this.#rediService.getValue(`${telegram_id}`)
  }
}

module.exports = StepService
