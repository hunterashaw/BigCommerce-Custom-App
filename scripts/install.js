require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') })
const tables = JSON.parse(require('fs').readFileSync('db-tables.json'))

const mysql = require('mysql2/promise');

(async _=>{
    try {
        const connection = await mysql.createConnection({host: process.env.DB_HOST, user: process.env.DB_USER, password: process.env.DB_PASS});
        console.log('Creating database ' + process.env.DB_NAME + ' if doesn\'t exist.')
        await connection.query('create database if not exists '+process.env.DB_NAME +';')
        await connection.query('use '+process.env.DB_NAME+';')
        
        for (let table of tables){
            console.log('Creating table ' + table.name + ' if doesn\'t exist.')
            let query = 'create table if not exists ' + table.name + ' ('
            let lastColumnIndex = table.columns.length-1
            for (let columnIndex in table.columns){
                let column = table.columns[columnIndex]
                if (column.name.toLowerCase() == 'id')
                    query += column.name + ' int unsigned auto_increment primary key'
                else
                    query += column.name + ' ' + column.type;
                if (columnIndex < lastColumnIndex)
                    query += ', '
            }
            query += ');'
            await connection.query(query)
        }
        connection.end()
        console.log('Database install complete.')
    } catch(e){console.error('\n', e);process.exit(1)}
})();