const db = require('../model')
const mahasiswa = db.mahasiswa

exports.create = (req, res) => {
    req.body.tanggal_lahir = new Date(req.body.tanggal_lahir)
    mahasiswa.create(req.body)
        .then(() => { res.send({ message: 'Created!' }) })
        .catch(err => { res.status(500).send({ message: err.message }) })
}

exports.findAll = (req, res) => {
    mahasiswa.find()
        .then((data) => { res.send(data) })
        .catch(err => { res.status(500).send({ message: err.message }) })
}

exports.find = (req, res) => {
    const id = req.params.id;
    mahasiswa.findById(id)
        .then((data) => { res.send(data) })
        .catch(err => { res.status(500).send({ message: err.message }) })
}

exports.update = (req, res) => {
    const id = req.params.id;
    // req.body.tanggal_lahir = new Date(req.body.tanggal_lahir)
    mahasiswa.findByIdAndUpdate(id, req.body, { userFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Data not found!" })
            }
            res.send({ message: 'Data Successfully Updated' })
        })
        .catch(err => { res.status(500).send({ message: err.message }) })
}

exports.delete = (req, res) => {
    // Write a code logic to delete mahasiswa data
    // Route: route.delete('/delete/:id', mahasiswa.delete)
    // get the id from the request parameters
    const id = req.params.id;

    // find and delete the data from the database
    mahasiswa.findByIdAndDelete(id)
        .then((data) => {
            // check if data was found
            if (data) {
                // send the deleted data as response
                res.send({ message: 'Data successfully deleted', data: data });
            }
            // handle data not found
            else {
                res.status(404).send({ message: 'Data not found' });
            }
        })
        .catch((err) => {
            // handle error
            res.status(500).send({ message: err.message });
        });
}