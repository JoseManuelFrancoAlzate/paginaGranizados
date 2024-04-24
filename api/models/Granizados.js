const mongoose = require("mongoose")
const Schema = mongoose.Schema

const granizadosSchema = new Schema({
name:{ type:String,required: true},
image:{ type:String},
price:{ type:String,required: true},
})

const Granizados = mongoose.model('Granizados', granizadosSchema)

module.exports = Granizados  