const mongoose= require('mongoose');
const productsSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    odometer:{
        type: Number,
        required:true,
    },
    imageUrl:{
        type:String,
        require:true,
    },
    color:{
        type: String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    seats:{
        type:Number,
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
    soLanThue:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    dealerComments:{
        type:String,
    },
})
module.exports=mongoose.model('Product',productsSchema);