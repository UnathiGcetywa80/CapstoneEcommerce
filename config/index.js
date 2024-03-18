import {createPool} from "mysql";
import {config} from 'dotenv'
// // database connection for mysql
config();

let connection = createPool({
    host: process.env.Db_host,
    database: process.env.Db_dbName,
    user: process.env.Db_userName,
    password: process.env.Db_userPassword,
    multipleStatements: true,
    connectionLimit: 30
})

export{
    connection
}
