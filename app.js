require('dotenv').config()
const app = require('polka')()

const bigCommerce = require('./helpers/bigCommerce'), error = require('./helpers/errors')
const db = require('./helpers/db'); // use: const [rows] = await db.query("select * from table")

app.get('/', async (req, res) => {
    try {res.end(JSON.stringify((await bigCommerce.get('/catalog/products?include_fields=name,categories')).data))}
    catch(e) {error.ServerError(res);console.log(e)}
})

app.listen(process.env.HOST_PORT)