const mongoose = require('mongoose') //importe mongoose


const userSchema = new mongoose.Schema({ //creer un schema (une structure)
    name : {
        type : String ,
        required : true
    },
    firstname : {
        type : String ,
        required : true
    },
    email : {
        type : String ,
        required : true
    },
    password : {
        type : String ,
        required : true
    }
})

const userModel = mongoose.model('user', userSchema) //on creer notre model via la fonction mongoose.model qui prend en parametre un nom qui sera d"fini dans la base et une structure 
module.exports = userModel //une sorte de return





















