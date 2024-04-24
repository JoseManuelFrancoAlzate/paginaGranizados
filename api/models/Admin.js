const mongoose = require("mongoose")
const Schema = mongoose.Schema

const adminSchema = new Schema({
user: {
    type: String,
        required: true
},
password: {
    type: String,
        required: true
},
repeatPassword: {
    type: String,
    required: true
},
asset: {
    type: Boolean,
    default: false
}

})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin 