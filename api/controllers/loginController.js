const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const loginController = {
    'loginUser': async (req, res) => {
        const {email, password} = req.query;
        const existingUser = await User.findOne({email});

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

        if(existingUser === null){
            return res.status(401).send({
                message: "User not found",
            });
        }

        bcrypt.compare(password, existingUser.password, async (error, result) => {
            if (error) {
                return res.status(500).send({
                    message: "internal server error.",
                });
            }

            if (result) {
                return res.status(200).send({
                    message: "User exist",
                });
            } else {
                return res.status(404).send({
                    message: "User not found",
                });
            }

        })
    }
}
module.exports = loginController;