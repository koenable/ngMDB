require('./models/db')
//import dependencies
const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4000;

// app users
app.use(bodyParser.urlencoded({extended:false}) )
app.use(bodyParser.json())
app.use(cors());

// start app
app.listen(port, ()=>{
    return console.log("Node started on port: " + port)
})

//add controller. initiate controller
const authCntrl = require('./controller/auth');
app.use("/auth", authCntrl);
