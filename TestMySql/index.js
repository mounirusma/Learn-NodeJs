import express from "express"
import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';

const app = express();



const sequelize = new Sequelize({
    dialect: MySqlDialect,
    database: 'MyDb',
    user: 'Mounir',
    password: 'mounir1234',
    host: 'localhost',
    port: 3306,
});

sequelize.authenticate().then(()=>console.log("MySql is ready "));








app.listen( 2000,()=>{
console.log("Server is runinng in port 2000");
})