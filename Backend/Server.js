const express = require("express")
const app = express()
const dotenv = require("dotenv").config();

const ConnectDB = require("./config/Db");





app.listen(process.env.PORT,()=>{
    ConnectDB();
    console.log(`server is running on : ${process.env.PORT}`)
})