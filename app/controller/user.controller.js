require('dotenv').config();
const asyncHandler = require("express-async-handler");
const db = require('../model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user = db.user

// Register user
exports.register = async (req, res) => {
    const { username, email, password } = req.body

    // Check if user has filled the form
    if (!username || !email || !password) {
        return res.status(400).send({
            message: "Please fill all the fields"
        })
    }

    // Check if the user is already exist
    const userAvailable = await user.findOne({ email })
    console.log("user : ", userAvailable);
    if (userAvailable) {
        return res.status(400).send({
            message: "User already exist"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    user.create({
        username: username,
        email: email,
        password: hashedPassword
    })
        .then(() => {
            return res.status(200).send({
                message: 'User created!'
            })
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.login = async (req, res) => {
    const { email, password } = req.body
    console.log("Email : ", email);
    console.log("Password : ", password);

    // Check if user has filled the form
    if (!email || !password) {
        return res.status(400).send({
            message: "Please fill all the fields"
        })
    }

    // Get user from db
    const userDB = await user.findOne({ email: email })
    console.log("userDB : ", userDB);
    const decodedPassword = await bcrypt.compare(password, userDB.password)
    console.log("decodedPassword : ", decodedPassword);

    // Check availability of user
    if (userDB && decodedPassword) {
        const accessToken = jwt.sign({
            user: {
                id: userDB.id,
                username: userDB.username,
                email: userDB.email,
            }
        }, process.env.JWT_KEY, { expiresIn: '1h' })
        return res.status(200).send({ accessToken })
    }

    return res.status(401).send({
        message: 'Email or Password is Incorrect!'
    })
}

exports.current = asyncHandler(async (req, res) => {
    res.json(req.user);
  });