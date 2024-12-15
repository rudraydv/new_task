const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    discountPercentage:{
        type:Number,
        require:true,
    },
    rating:{
        type:Number,
        require:true,
        min:[0,'wrong min Rating'],max:[5,'wrong max rating'],
        default:0,
    },
    stock:{
        type:Number
    },
    brand:{
        type:String
    },
    description:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;
