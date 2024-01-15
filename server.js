const express = require('express')
const cors = require('cors')
const db = require('./app/model/index')
const app = express()

const corsOptions = {
    origin: '*'
}

const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Connect to Database
db.mongoose.connect(db.URL, mongooseConfig)
.then(() => {
    console.log('Connected to the database!')
})
.catch(err => {
    console.log('Cannot connect to the database!', err)
    process.exit()
})

// Add cors middleware
app.use(cors(corsOptions))
app.use(express.json())

// Call mahasiswa route
require('./app/routes/mahasiswa.routes')(app)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) });