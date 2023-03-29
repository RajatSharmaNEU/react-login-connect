// app/userRoute.js
// grab the nerd model we just created
const express = require("express");
const {loginUser} = require("../controllers/loginController");

const router = express.Router();

// validate User
router.get('/login', loginUser);

module.exports = router