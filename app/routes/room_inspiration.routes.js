module.exports = app => {
    const room = require('../controller/room_inspiration.controller')
    const route = require('express').Router()
    const validateToken = require("../../middleware/validateTokenHandler");

    // route.get('/', validateToken, room.getAllRoom)
    // route.get('/:id', validateToken, room.getRoomById)
    // route.post('/create', validateToken, room.create)
    route.get('/', room.getAllRoom)
    route.get('/:id', room.getRoomById)
    route.post('/create', room.create)

    app.use('/room_inspiration', route)
}