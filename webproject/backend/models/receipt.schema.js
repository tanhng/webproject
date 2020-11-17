const mongoose= require('mongoose');

const receiptSchema= new mongoose.Schema({
    user_id:{
        type: String,
        required: true,
    },
    car_id:{
        type: Number,
        required:true,
    },
    datestart:{
        type: Date,
        required:true,
    },
    datefinish:{
        type:Date,
        required:true,
    },

    status:{
        type:Number,
        required:true,
    },
    
    price:{
        type:Number,
        required:true,
    },
})

module.exports=mongoose.model('Receipt',receiptSchema);