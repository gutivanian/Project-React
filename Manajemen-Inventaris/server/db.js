const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: '123456',
    database: 'manajemen_inventaris',
    host: 'localhost',
    port: 5432
});

module.exports = pool;