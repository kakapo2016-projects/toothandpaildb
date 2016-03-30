// CLEANED //

var express = require('express')
var cors = require('cors')
var compression = require('compression')
var routes = require('./dbroutes')
var knex = require('knex')

var app = express()
app.use(compression())

app.use(cors({
  origin: 'http://toothandpail.herokuapp.com'
}))

routes(app)
if (require.main === module) {
  var PORT = process.env.PORT || 3000
  app.listen(PORT, function() {
    console.log('Production Teeth server running at localhost:' + PORT)
  })
}

module.exports = app
