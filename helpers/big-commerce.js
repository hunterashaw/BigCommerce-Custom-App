const BigCommerce = require('node-bigcommerce');

module.exports = new BigCommerce({
    clientId: process.env.BIG_COMMERCE_CLIENT_ID,
    accessToken: process.env.BIG_COMMERCE_TOKEN,
    storeHash: process.env.BIG_COMMERCE_STORE_HASH,
    responseType: 'json',
    apiVersion: 'v3'
});