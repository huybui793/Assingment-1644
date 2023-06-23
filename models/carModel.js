var mongoose = require('mongoose');

var carSchema = mongoose.Schema(
    {
        Name: String,
        Brand: String,
        Quantity: String,
        Price: Number,
        Date: Date, 
        Brand: String,
        BestSeller: String ,
        
    },



);

var carModel = mongoose.model("car", carSchema, "car");

module.exports = carModel;