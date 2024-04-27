const mongoose = require("mongoose")
const Schema = mongoose.Schema

const granizadosSchema = new Schema({
name:{ type:String,required: true},
image:{ type:String, required: true},
price:{ type:String,required: true},
description:{type:String, required: true}
})

const Granizados = mongoose.model('Granizados', granizadosSchema)

module.exports = Granizados  