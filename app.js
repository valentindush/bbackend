const express = require('express')
const app = express()
const PORT = 2500;
const mongoose = require('mongoose')
const URL  = "mongodb+srv://Brainiacs_user:jPxVoB5sOM4UdVq1@cluster0.wmwkp.mongodb.net/test"

const dbConnect =   ()=>{
    mongoose.connect(URL, ()=>{console.log("db connected")})
}

dbConnect()


app.listen(PORT, ()=>{console.log("server running .....")})