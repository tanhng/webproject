const mongoose= require('mongoose');

const receiptSchema= new mongoose.Schema({
    userEmail:{
        type: String,
        required: true,
    },
    car_id:{
        type: String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    car_name:{
        type:String,
        required: true,
    },
    dateStart:{
        type: Date,
        required:true,
    },
    status:{
        type:Number,
        required:true,
    },
    soNgayThue:{
        type: Number,
        required:true,
    },
    soNgayThueThem:{
        type: Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
})

module.exports=mongoose.model('Receipt',receiptSchema);