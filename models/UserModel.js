const mongoose      = require('mongoose')

const Schema = mongoose.Schema

const userScema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        email: true,
    }, 
    password: String,
    name: String
}, {timestamps: true})

const User = mongoose.model('User', userScema)
module.exports = User