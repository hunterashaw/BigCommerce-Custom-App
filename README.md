# BigCommerce-Custom-App
Starting point for custom backend apps on Big Commerce.

## Installation

Before installing, copy the .env.example to .env in the project root. If the app needs to use a database, change USE_DB in .env file to true and fill out connection details.

> npm install

## Development

> npm start

This will start 'nodemon' (which will watch for changes to app.js, .env, and anything in routes/).

#### Endpoints

Although this project uses PolkaJS, it functions the same as ExpressJS and you can swap them out if necessary. Endpoints are defined using the same syntax as Express:

```js
app.get('/', (req, res) = {res.end('get response')});
app.post('/', (req, res) = {const data = req.body; res.end('post response')});
```

To keep the project clean, you can define endpoints in the routes folder and import it into app.js as a 'sub-application'.

```js
// routes/products.js

const app = require('polka')()

app.get('/', (req, res) => {res.end('a list of all the products')}

modules.exports = app
```

```js
// in app.js

app.use('/products', require('./routes/products')

// now a GET at /products/ will return 'a list of all products'
```

#### BigCommerce Api

The BigCommerce helper will give you quick access to API endpoints. It uses the node-bigcommerce module. You must fill out the credentials in .env.

```js
const bc = require('./helpers/bigCommerce');
bc.get('/catalog/products');
```

#### Database

To utilize a database in the project, set USE_DB to true in the .env and fill out the connection info.

You can define the tables you'd like created in the database (DB_NAME) inside the db-tables.json file. Each table needs a name and columns array, and each column object needs a name and type. If the column name is 'id' (case insensitive), it will automatically ignore the type and create an unsigned integer primary key with auto_increment.

To create the new database, run:
> npm install

If you have significantly modified the tables in db-tables.json and the database needs rebuilt:

> npm run reinstall

This will DELETE current database and reinstall it fresh.

The database helper will provide a promise based connection pool from the mysql2 module.

```js
const db = require('./helpers/db')
(async _=>{await db.query('select 1;')})();
```

## Production

I recommend using a production process manager like PM2.

> pm2 start app.js
