const { default: mongoose, SchemaType } = require("mongoose");
const bcrypt = require("bcrypt");

module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            username: {
                required: true,
                type: String,
            },
            email: {
                required: true,
                type: String,
                unique: true
            },
            password: {
                required: true,
                type: String
            },
            tokens: [
                {
                    token: {
                        type: String,
                        required: true,
                    },
                },
            ],
        }, {
        timeStamps: true
    }
    )

    return mongoose.model("user", schema)
}