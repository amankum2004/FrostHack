const mongoose = require("mongoose");
const { type } = require("os");
// const jwt = require("jsonwebtoken")
// const secret = require("../controller/auth-config")


const userSchema = new mongoose.Schema({
    voterId:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    constituency:{
        type:String,
        require:true
    }
})


const User = new mongoose.model("User",userSchema)

module.exports = User;