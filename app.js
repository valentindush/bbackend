const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const PORT = 2500;
const mongoose = require('mongoose');
const { userSchema } = require('./models/user.schema');
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

app.post('/new', async (req, res)=>{

    try {
        const user = new userSchema({
            fname: req.body.fname,
            lname: req.body.lname,
            age:req.body.age,
            password:req.body.password
        })
    
        await user.save()
        
    } catch (error) {
        console.log("Error "+error);
    }

})

app.get("/user",async(req,res)=>{
    const users=await userSchema.find();
    if (users.length==0) {
        return res.send("no users found");
    }
    return res.status(200).json({
        count:users.length,
        data:users
    })
})

app.put("/user/:id",async(req,res)=>{
    console.log(req.params.id);
    const user=await userSchema.findByIdAndUpdate(req.params.id,{
        fname:req.body.fname
    })
    await user.save();
    if (!user) {
        return res.status(400).send("Unable to update user")
    }
    return res.status(200).send("User updated")
})


app.listen(PORT, ()=>{console.log("server running .....")})