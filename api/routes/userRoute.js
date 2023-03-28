// app/userRoute.js
// grab the nerd model we just created
const express = require("express");
const {createUser, editUser, deleteUser, getAll} = require("../controllers/userController");

const router = express.Router();

const regUserName = /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;
const regPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Create User
router.post('/create', createUser)

// Edit User
router.put('/edit', editUser)

// Delete User
router.delete('/delete', deleteUser)

// Get All User
router.get('/getAll', getAll);

module.exports = router