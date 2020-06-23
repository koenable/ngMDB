//import dependencies
const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// app users
app.use(bodyParser.urlencoded({extended:false}) )
app.use(bodyParser.json())

// start app
app.listen(port, ()=>{
    return console.log("Node started on port: " + port)
})

