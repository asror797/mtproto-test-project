const express = require('express')
const cors = require('cors')
const { connect } = require('mongoose')
const database = require('./database')

class App {
  app

  constructor(routes) {
    this.app = express()

    this.connectionToDatabase()
    this.initializeRoutes(routes)
    this.initializeMiddlewares()
  }

  bootstrapServer() {
    this.app.listen(5050, () => {
      console.log('Server is runing', 5050)
    })
  }

  async connectionToDatabase() {
    try {
      await connect(database.uri, database.options)
      console.log('Database connected')
    } catch (error) {
      console.log(error)
    }
  }

  initializeRoutes(routes) {
    routes.forEach((route) => {
      this.app.use('/', route.router)
    })
  }

  initializeMiddlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }
}


module.exports = App
