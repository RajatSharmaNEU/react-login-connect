const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const regUserName = /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;
const regPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userController = {
    'createUser': async (req, res) => {
        const {name, email, password} = req.body;

        // All three fields is mandatory
        if (!email) {
            return res.status(400).send({
                message: "Please enter email.",
            });
        }
        if (!password) {
            return res.status(400).send({
                message: "Please enter password.",
            });
        }
        if (!name) {
            return res.status(400).send({
                message: "Please enter name.",
            });
        }

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(409).send({
                message: "User already exist with same email id.",
            });
        }

        if (!name.match(regUserName)) {
            return res.status(400).send({
                message: "Invalid name, please enter alphabetic first & last name, separate by space only.",
            });
        }
        if (!password.match(regPassword)) {
            return res.status(400).send({
                message: "Password must have 8 characters with at least a symbol, upper and lower case letters and a number",
            });
        }
        if (!email.match(regEmail)) {
            return res.status(400).send({
                message: "Please enter a proper email.",
            });
        }

        bcrypt.hash(password, 12, function (err, hash) {
            if (err) {
                return res.status(500).send({
                    message: "internal server error.",
                });
            }
            console.log(hash);


            const newUser = new User({
                name: name,
                email: email,
                password: hash
            })
            newUser.save().then(() => {
                res.send({
                    status: 201,
                    message: "User created successfully.",
                })
            })
        })


    },
    'editUser': async (req, res) => {
        const {name, password} = req.body;
        const email = req.query.email;

        // All three fields is mandatory
        if (!email) {
            return res.status(400).send({
                message: "Please enter email.",
            });
        }
        if (!password) {
            return res.status(400).send({
                message: "Please enter password.",
            });
        }
        if (!name) {
            return res.status(400).send({
                message: "Please enter name.",
            });
        }

        const existingUser = await User.findOne({email: email});
        if (!existingUser) {
            return res.status(404).send({
                message: "User not found.",
            });
        }

        if (!name.match(regUserName)) {
            return res.status(400).send({
                message: "Invalid name, please enter alphabetic first & last name, separate by space only.",
            });
        }
        if (!password.match(regPassword)) {
            return res.status(400).send({
                message: "Password must have 8 characters with at least a symbol, upper and lower case letters and a number.",
            });
        }
        if (!email.match(regEmail)) {
            return res.status(400).send({
                message: "Please enter a proper email.",
            });
        }

        bcrypt.hash(password, 12, function (err, hash) {
            if (err) {
                return res.status(500).send({
                    message: "internal server error",
                });
            }

            User.updateOne(
                {email},
                {name, password: hash}
            ).then(() => {
                res.send({
                    status: 200,
                    message: "User updated successfully",
                })
            })
        })
    },
    'deleteUser': async (req, res) => {
        const {email} = req.body;
        const existingUser = await User.findOneAndRemove({email});
        if (!existingUser) {
            return res.status(404).send({
                message: "User not found.",
            });
        } else {
            return res.status(200).send({
                message: "User Deleted Successfully!",
                user: existingUser
            });
        }
    },
    'getAll': async (req, res) => {
        const users = await User.find();
        if (users.length === 0) {
            res.status(204).send(users);
        } else {
            res.status(200).send(users);
        }
    }
}
module.exports = userController;