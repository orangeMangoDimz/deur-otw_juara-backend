const dbConfig = require('../config/database')
const mongoose = require('mongoose')

module.exports = {
    mongoose,
    URL: dbConfig.URL,
    mahasiswa: require('../model/mahasiswa')(mongoose),
    user: require('../model/user')(mongoose),
}