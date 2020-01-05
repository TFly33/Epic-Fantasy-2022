const router = require("express").Router();
// const signinController = require("./../controllers/signinController");
// Might need that sign in controller here later. 
const User = require("../models/Login/User");

router.route("/api/account/signup", (req, res, next) => {
    const { body } = req;
    const {
        firstName,
        lastName,
        email,
        password
    } = body;
    
    if (!firstName) {
        return res.send({
            success: false,
            message: "Error: First name cannot be blank."
        });
    }
    if (!lastName) {
        return res.send({
            success: false,
            message: "Error: Last name cannot be blank."
        });
    }
    if (!email) {
        return res.send({
            success: false,
            message: "Error: Email cannot be blank."
        });
    }
    if (!password) {
        return res.send({
            success: false,
            message: "Error: Password cannot be blank."
        });
    }

    email = email.toLowerCase(); 

    User.find({
        email: email
    },(err,previousUsers) => {
        if (err) {
            res.end("Error: Servor Error");
        } else if (previousUsers.length > 0) {
            res.end("Error: Account already exists")
        }

        // Save the new user 
        const newUser = new User();

        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lasName = lasName;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) => {
            if (err) {
                res.end({
                    success: false,
                    message: "Error: Server Error"
                });
            }
            res.end({
                success:true,
                message: "Signed up."
            });
        });
    });
    // Steps: 
    // 1. Verify Email doesn't exist 
    // 2. Save 
});


module.exports = router;