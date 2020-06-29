const mysql = require("mysql");
const util = require("util");

const pool = mysql.createPool({
    connectionLimit: 5,
    connectTimeout: 60*60*1000,
    acquireTimeout: 60*60*1000,
    timeout: 60*60*1000,
    host: 'bjnuk1c6cufdbufzs5y8-mysql.services.clever-cloud.com',
    user: 'ullbqbrma5uy2cew',
    password: 'dyrgXZtEAdp4gdNhMPQH',
    database: 'bjnuk1c6cufdbufzs5y8',
    debug: false
})

pool.getConnection((err,connection)=>{
    if(err){
        console.log(err)
    }
    if(connection)
        connection.release()
    return
})

pool.query = util.promisify(pool.query);
module.exports = pool;