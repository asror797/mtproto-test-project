const App = require('./app')
const DriverRoute = require('./routes/driver.route')
require('./index')


const app = new App([
  new DriverRoute()
])

app.bootstrapServer()
