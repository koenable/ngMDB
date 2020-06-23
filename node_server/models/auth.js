const mongoose = require('mongoose');

// user model
const User =  mongoose.Schema({

    _id:mongoose.Types.ObjectId,
    email:{
        type : String,
        required: true
    },
    password:{
        type : String,
        required: true
    }
})

module.exports = mongoose.model('user', User);

