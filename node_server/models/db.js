// connection string
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/facebook', {useNewUrlParser:true}, (err) =>{
    if(!err) {console.log('Mango connection was Successfull')}else{
        console.log('Error connection:' + err);
    }
})

require('./auth')