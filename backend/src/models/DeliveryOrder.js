const mongoose = require('mongoose');

const DeliveryOrderSchema = new mongoose.Schema({
    name: String,
    inputDate: String,    
    startPoint: String,
    endPoint: String
});

module.exports = mongoose.model('DeliveryOrder', DeliveryOrderSchema);