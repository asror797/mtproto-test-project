const App = require('./app')
const DistrictRoute = require('./routes/district.route')
const DriverRoute = require('./routes/driver.route')
const RegionRoute = require('./routes/region.route')
require('./index')

const app = new App([
  new DriverRoute(),
  new RegionRoute(),
  new DistrictRoute()
])

app.bootstrapServer()
