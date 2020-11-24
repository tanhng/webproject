const mongoose= require('mongoose');

const usersSchema= new mongoose.Schema({
    name:{
        type: String,
        // required: true,
    },
    phonenumber:{
        type: String,
        // required: true,
    },
    email:{
        type: String,
        required: true,
    },
    role:{
        type: Number,
        default: 0,
    },
    password:{
        type: String,
        required: true,
    },
    
})

module.exports=mongoose.model('User',usersSchema);