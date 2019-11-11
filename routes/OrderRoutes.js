const express = require('express');
const OrdersController = require('../controllers/OrdersController');


function OrderRoutes(app) {
    const router = express.Router();
    const controller = new OrdersController();
    app.use('/api/orders', router);

    router.route('/')
        .get(controller.index)
        .post(controller.create);
    router.route('/:id')
        .get(controller.show)
        .put(controller.update)
        .delete(controller.delete);
}

module.exports = OrderRoutes;