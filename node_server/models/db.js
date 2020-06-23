const mongoose =  require('mongoose')

// connection string
mongoose.connect('mongodb\\:localhost:27027')
.then(()=>{ return console.log("Connection success")})
.catch(error => {return "Failed to connec: " + error})