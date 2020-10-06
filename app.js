require('dotenv').config()
const app = require('polka')()

//const bc = require('./helpers/bigCommerce'), error = require('./helpers/errors'), db = require('./helpers/db')

//TODO Add endpoints here.

app.listen(process.env.HOST_PORT)