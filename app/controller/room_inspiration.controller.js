require('dotenv').config();
const asyncHandler = require("express-async-handler");
const db = require('../model')
const jwt = require('jsonwebtoken')
const room = db.room_inspiration

// Get All Room
exports.getAllRoom = async (req, res) => {
    const roomAvailable = await room.find()
    if (!roomAvailable) {
        return res.status(400).send({
            message: "Room not found"
        })
    }

    return res.status(200).send({
        message: roomAvailable
    })
};

// Create Room
exports.create = async (req, res) => {
    const { name } = req.body
    room.create({
        name: name,
    })
        .then(() => {
            return res.status(200).send({
                message: 'Room created!'
            })
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

// Get Room By Id
exports.getRoomById = async (req, res) => {
    const { id } = req.params
    const roomAvailable = await room.findOne({ _id: id })
    if (!roomAvailable) {
        return res.status(400).send({
            message: "Room not found"
        })
    }

    return res.status(200).send({
        message: roomAvailable
    })
};