const dbConfig = require('../config/database')
const mongoose = require('mongoose')

module.exports = {
    mongoose,
    URL: dbConfig.URL,
    mahasiswa: require('../model/mahasiswa')(mongoose),
    user: require('../model/user')(mongoose),
    product: require('../model/product')(mongoose),
    room_inspiration: require('./room_inspiration')(mongoose),
}