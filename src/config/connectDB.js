const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '86.38.243.4',
    user: 'u295066060_tger',
    password: 'Hostinger@99051',
    database: 'u295066060_tger',
});

export default connection;