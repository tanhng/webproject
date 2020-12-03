const mongoose= require('mongoose');

const receiptSchema= new mongoose.Schema({
    userEmail:{
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
    datereturn:{
        type:Date,
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