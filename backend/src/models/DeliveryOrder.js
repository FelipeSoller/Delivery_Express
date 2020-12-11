const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DeliveryOrderSchema = new mongoose.Schema({
    name: String,
    delivery_date: String,    
    location: {
        type: PointSchema,
        createIndexes: '2dsphere'
    }
});

module.exports = mongoose.model('DeliveryOrder', DeliveryOrderSchema);