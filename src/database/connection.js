import * as dotenv from 'dotenv';
dotenv.config();
import mysql2 from "mysql2/promise"

const pool = mysql2.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_DATABASE,
    waitForConnections : true,
    connectionLimit : 10,
    queueLimit : 0,
    port : 3306,
    ssl : {
        rejectUnauthorized: false,
    },
});

//Comprobando la Base de Datos
const test = async () => {
    const [rows, fields] = await pool.query("SELECT 1+1 AS TEST");
    if(rows[0].TEST === 2){
        console.log('DB Connected!');
    } else { console.log('Wrong Conected!') };
}

test();

export default pool;