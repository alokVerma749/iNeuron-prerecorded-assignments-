const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
    // })
    // const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        default: null
    },
    lastname: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    token: {
        type: String
    }
})

module.exports = mongoose('user', userSchema);