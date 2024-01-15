const { default: mongoose, SchemaType } = require("mongoose");

module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            nama_lengkap: String,
            tanggal_lahir: Date,
            email: String,
            password: String
        }, {
        timeStamps: true
    }
    )

    // schema.method('toJSON', function() {
    //     const [__v, _id, ...object] = this.toObject();
    //     object.id = _id
    //     return object;
    // })

    return mongoose.model("mahasiswa", schema)
}