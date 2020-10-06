# BigCommerce-Custom-App
Starting point for custom backend apps on Big Commerce.

## Installation

Before installing, copy the '.env.example' to '.env in the project root. If the app needs to use a database, change USE_DB in .env file to true and fill out connection details.

> npm install

## Development

> npm start

This will start 'nodemon' (which will watch for changes to app.js, .env, and anything in routes/).

## Production

I recommend using a production process manager like PM2.

> pm2 start app.js
