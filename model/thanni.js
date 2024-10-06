const mongoose = require("mongoose")

const thanniSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
},{timestamps: true})

const thanniModel = mongoose.model("thanni",thanniSchema)

module.exports = thanniModel;