const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    description : {
        type : String ,
        required : true
    },
    url : {
        type : String ,
        required : true
    },
    owner : {
        type : String ,
        required : true
    }
})

const fileModel = mongoose.model('file', fileSchema)
module.exports = fileModel





















