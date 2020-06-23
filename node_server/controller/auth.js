const mongoose = require('mongoose');
const express = require('express');
const { json } = require('body-parser');
var router = express.Router();


// Import User model
const User = require('./../models/auth');
const { error } = require('protractor');

router.get('/', (req, res) => {
    // Find and return all applications
    User.find({}, (error, docs) => {
        if (error) throw (error)
        return res.json({
            msg: "List of all user applications",
            data: docs
        })
    })
})


// register new user if user does not ex
router.post('/', async (req, res) => {
    const {
        email,
        password
    } = req.body;

    // if user exists
    foundOne = await User.findOne({ email: email });
    if (foundOne) {
       
        if(foundOne.password == password){
            return res.json({
                msg: "LogInsuccess",
                data:foundOne
            })
      }
      return res.json({
          msg:"Password Doesnt matach. Try again.",
      })
    
    }

    try {
        const user = new User({
            _id: mongoose.Types.ObjectId(),
            email,
            password
        })

        await user.save()
            .then((success, error) => {
                if (error) throw (error)
                return res.json({
                    msg: "Registeresuccess",
                    data: success
                })
            })
            .catch(() => { 
                return res.json({
                    msg: "Registration Failed, Please try again.",
                })
            })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Request Failed',
            data:err
        });
    }

});


module.exports = router;


