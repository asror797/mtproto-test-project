const redis = require('redis')

class RedisService {

  #client

  constructor() {
    this.#client = redis.createClient({
      url: 'redis://localhost:6379'
    })

    this.#client.connect()

    this.#client.on('connect', () => {
      console.log('Redis connected')
    })

    this.#client.on('error',(err) => {
      console.log(err)
    })
  }

  async getValue(key) {
    try {
      return await this.#client.get(key)
    } catch (error) {
      console.log(error)
    }
  }

  async setValue(key, value) {
    try {
      return await this.#client.set(key, value)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new RedisService()
