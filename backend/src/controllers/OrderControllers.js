const DeliveryOrder = require('../models/DeliveryOrder');

module.exports = {
    async index(request, response) {
        const orders = await DeliveryOrder.find();

        return response.json(orders)
    },

    async create(request, response) {
        const {
            name,
            delivery_date,
            latitude,
            longitude
        } = request.body;        
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }
    
        const order = await DeliveryOrder.create({
            name,
            delivery_date,            
            location
        })
    
        return response.json(order);
    }
}