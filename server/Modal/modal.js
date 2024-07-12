const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/PreetiRasoi')

const myschema = new mongoose.Schema({
    name : String,
    email:String,
    password:String,
    mobile:Number,
    address:String
})
const myModal = mongoose.model("users",myschema)

module.exports = myModal;