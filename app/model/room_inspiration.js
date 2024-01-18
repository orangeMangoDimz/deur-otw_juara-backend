const { default: mongoose, SchemaType } = require("mongoose");

module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            name: {
                required: true,
                type: String,
            },
            image: {
                required: false,
                type: String,
            }
        }, {
        timeStamps: true
    }
    )

    return mongoose.model("room_inspiration", schema)
}