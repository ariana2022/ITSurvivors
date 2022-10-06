const { Client } = require('mysql');

async function getConnection(){
    const client = new Client({
        host: 'localhost',
        port: 3306,
        user: 'proyect',
        password: 'proyect123',
        database: 'itsurvivors'
    })
    await client.connection()
    return client;
}

module.exports = getConnection;