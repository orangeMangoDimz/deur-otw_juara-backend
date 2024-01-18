module.exports = app => {
    const product = require('../controller/product.controller')
    const route = require('express').Router()
    const validateToken = require("../../middleware/validateTokenHandler");

    route.get('/', product.getAllProduct)
    route.get('/:id', product.getProductById)
    route.get('/room-inspiration/:room_inspiration_id', product.getProductByRoomInspirationId)
    route.post('/create', product.create)

    app.use('/product', route)
}
