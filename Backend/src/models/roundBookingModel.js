let mongoose = require('mongoose');
let rooundBookingModel = new mongoose.Schema({
    bookingID: { type: Number,unique:true},
    origin: { type: String},
    destination: { type: String},
    departDate: { type: Date },
    returnDate: { type: Date }
   });
module.exports = mongoose.model('rooundBookingModel',rooundBookingModel);