const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        min:3,
        max:30,
        required:true
    },
    lname:{
        type: String,
        min:3,
        max:30,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    password:{
        type: String,
        required:true
    },

})

module.exports.userSchema = mongoose.model('users', userSchema)