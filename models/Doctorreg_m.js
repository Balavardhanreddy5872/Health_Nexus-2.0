const mongoose = require('mongoose');
const { Schema } = mongoose

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    specialization:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('doctorreg', userschema);