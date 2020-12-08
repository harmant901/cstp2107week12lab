const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: String,
    make: String,
    model: String,
    year: Number
},{
    versionKey: false //Turn mongoose versioning off
})

module.exports = mongoose.model("car", schema);