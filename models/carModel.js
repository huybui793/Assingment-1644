var mongoose = require('mongoose');

var carSchema = mongoose.Schema(
    {
        Name: String,
        Brand: String,
        Quantity: String,
        Price: Number,
        Date: Number, 
        Brand: String,
        BestSeller: String ,
        
    },



);

var carModel = mongoose.model("cars", carSchema, "car");

module.exports = carModel;