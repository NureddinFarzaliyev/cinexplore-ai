const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    movies: {
        type: Array,
        required: true
    },
    tv: {
        type: Array,
        required: true
    },
    token: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User