require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') })
const mysql = require('mysql2/promise');
(async _=>{
    try {
        const connection = await mysql.createConnection({host: process.env.DB_HOST, user: process.env.DB_USER, password: process.env.DB_PASS});
        await connection.query('drop database if exists '+process.env.DB_NAME +';')
        connection.end()
        console.log('Database deleted.')
    } catch(e){console.error('\n', e);process.exit(1)}
})();