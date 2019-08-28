let mongoose = require('mongoose');
let oneBookingModel = new mongoose.Schema({
 bookingID: { type: Number,unique:true},
 origin: { type: String},
 destination: { type: String},
 departDate: { type: Date },
});
module.exports = mongoose.model('oneBookingModel',oneBookingModel);