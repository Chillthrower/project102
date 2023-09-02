// const {createPool}= require('pg')

// const pool = createPool({
//     host: 'localhost',
//     username:'postgres',
//     password : '123456',
    
// })
// pool.query(`select * from emp`,(err,res)=>{
//     if(err)
//     {
//         console.log("Error")
//     }
//     else{
//     console.log(res)
//     }
// })

// require('dotenv').config();
// const {Pool}=require("pg")
// const isProduction=process.env.NODE_ENV==='production'
// const connectionString=`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
// const pool=new Pool({
//     connectionString:isProduction?process.env.DATABASE_URL:connectionString
// })
// module.exports={pool}
// const mysql = require('mysql2');

// // create a new MySQL connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'pass@123',
//   database: 'database_name'
// });
// // connect to the MySQL database
// connection.connect((error) => {
//   if (error) {
//     console.error('Error connecting to MySQL database:', error);
//   } else {
//     console.log('Connected to MySQL database!');
//   }
// });

// // close the MySQL connection
// connection.end();

// import mysql from "mysql"

// export const db = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password: process.env.DB_KEY,
//   database:"blog"
// })

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise'); // Using promise-based version

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

const db = mysql.createPool({
    host: 'db',
    user: 'qwert',
    password: '12345',
    database: 'project102',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});