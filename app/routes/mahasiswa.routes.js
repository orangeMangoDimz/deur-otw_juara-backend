module.exports = app => {
    const mahasiswa = require('../controller/mahasiswa.controller')
    const route = require('express').Router()

    route.get('/', mahasiswa.findAll)
    route.get('/:id', mahasiswa.find)
    route.post('/create', mahasiswa.create)
    route.put('/update/:id', mahasiswa.update)
    route.delete('/delete/:id', mahasiswa.delete)

    app.use('/mahasiswa', route)
}