module.exports = app => {
    const user = require('../controller/user.controller')
    const route = require('express').Router()
    const validateToken = require("../../middleware/validateTokenHandler");

    route.post('/register', user.register)
    route.post('/login', user.login)
    route.get('/current', validateToken, user.current)

    app.use('/user', route)
}