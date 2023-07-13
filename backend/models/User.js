const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
      id: {required: true, type: String}
    , name: { required: true, type: String }
    , email: { required: true, type: String }
    , phone: { required: true, type: Number }
    
}, { timestamps: true })

const User = mongoose.model("User",userSchema)
module.exports = User