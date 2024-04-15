const mongoose = require("mongoose")
const Schema = mongoose.Schema

const granizadosSchema = new Schema({
name: String,
image: String,
price: Number,
})

const Granizados = mongoose.model('Granizados', granizadosSchema)

module.exports = Granizados