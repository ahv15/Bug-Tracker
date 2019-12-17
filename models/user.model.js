const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        minlength: 4
    },
    last_name: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        minlength: 4
    }, 
    password: {
        type: String,
        required: true,
        minlength: 4
    }
})

module.exports = user = mongoose.model('user',userSchema)