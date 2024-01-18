require('dotenv').config();
const asyncHandler = require("express-async-handler");
const db = require('../model')
const jwt = require('jsonwebtoken')
const product = db.product

// Get All Product
exports.getAllProduct = (async (req, res) => {
    const productAvailable = await product.find()
    if (!productAvailable) {
        return res.status(400).send({
            message: "Product not found"
        })
    }

    return res.status(200).send({
        message: productAvailable
    })
});

// Create Product
exports.create = (async (req, res) => {
    const { name, room_inspiration_id } = req.body

    product.create({
        name: name,
        room_inspiration_id: room_inspiration_id
    })
        .then(() => {
            return res.status(200).send({
                message: 'Product created!'
            })
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
})

// Get Product By Id
exports.getProductById = (async (req, res) => {
    const { id } = req.params

    const productAvailable = await product.findOne({ _id: id })
    console.log("product : ", productAvailable);
    if (!productAvailable) {
        return res.status(400).send({
            message: "Product not found"
        })
    }

    return res.status(200).send({
        message: productAvailable
    })
});


// Get Porduct By Room Id
exports.getProductByRoomInspirationId = (async (req, res) => {
    const { room_inspiration_id } = req.params

    const productAvailable = await product.find({ room_inspiration_id: room_inspiration_id })
    if (!productAvailable) {
        return res.status(400).send({
            message: "Product not found"
        })
    }

    return res.status(200).send({
        message: productAvailable
    })
});