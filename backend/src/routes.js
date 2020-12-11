const {
    Router
} = require('express');
const OrderController = require('./controllers/OrderControllers');

const routes = Router();

routes.get('/orders', OrderController.index);
routes.post('/orders', OrderController.create);

module.exports = routes;