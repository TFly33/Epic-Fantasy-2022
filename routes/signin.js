// I'm going to try passport in a couple of different ways and see what I can get to work. Going to hold on to this code for a bit but not necessarily use it. 

const router = require("express").Router();
// const signinController = require("./../controllers/signinController");
// Might need that sign in controller here later. 
const User = require("../models/Login/User");

module.exports = (app) => {

    app.post("/api/account/signup", (req, res, next) => {
        const { body } = req;
        const {
            email,
            password
        } = body;

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

        // Verify email doesn't exist. 

        User.find({
            email: email
        }, (err, previousUsers) => {
            if (err) {
                res.end("Error: Servor Error");
            } else if (previousUsers.length > 0) {
                res.end("Error: Account already exists")
            }

            // Save the new user 
            const newUser = new User();

            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
                    res.end({
                        success: false,
                        message: "Error: Server Error"
                    });
                }
                res.end({
                    success: true,
                    message: "Signed up."
                });
            });
        });
    });
};

