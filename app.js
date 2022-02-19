const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const PORT = 2500;
const mongoose = require('mongoose')
const URL  = "mongodb+srv://Brainiacs_user:jPxVoB5sOM4UdVq1@cluster0.wmwkp.mongodb.net/test"

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())


const dbConnect =   ()=>{
    mongoose.connect(URL, ()=>{console.log("db connected")})
}

dbConnect()

app.get('/', (req, res)=>{
    return res.json({
        name: "dush"
    })
})

app.post('/new', (req, res)=>{

    return req.body
})


app.listen(PORT, ()=>{console.log("server running .....")})