const DeliveryOrder = require('../models/DeliveryOrder');

module.exports = {
    async index(request, response) {
        const orders = await DeliveryOrder.find();

        return response.json(orders)
    },

    async create(request, response) {
        const {
            name,
            inputDate,
            startPoint,
            endPoint
        } = request.body;   
    
        const order = await DeliveryOrder.create({
            name,
            inputDate,            
            startPoint,
            endPoint
        })
    
        return response.json(order);
    }
}