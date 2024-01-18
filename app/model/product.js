const { default: mongoose, SchemaType } = require("mongoose");

module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            name: {
                required: true,
                type: String,
            },
            room_inspiration_id: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "room_inspiration",
            },
            image: {
                required: false,
                type: String,
            }
        }, {
        timeStamps: true
    }
    )

    return mongoose.model("product", schema)
}