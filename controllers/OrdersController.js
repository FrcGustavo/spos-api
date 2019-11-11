const OrdersService = require('../services/OrdersService');

class OrdersController {
    constructor() {
        this.ordersService = new OrdersService();
        this.index = this.index.bind(this);
        this.create = this.create.bind(this);
        this.show = this.show.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async index(req, res, next) {
        const { tags } = req.query;
        try {
            const orders = await this.ordersService.getOrders({ tags });
            res.status(200).json({
                data: orders,
                message: 'orders listed'
            });
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        const { order, products } = req.body;
        try {
            const createdOrderId = await this.ordersService.createOrder({ order, products });
            res.status(201).json({
                data: createdOrderId,
                message: 'order created'
            });
        } catch (error) {
            next(error);
        }
    }

    async show(req, res, next) {
        const { id: orderId } = req.params;
        try {
            const order = await this.ordersService.getOrder({ orderId });
            res.status(200).json({
                data: order,
                message: 'order retrieved'
            });
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        const { id: orderId } = req.params;
        const { order, products } = req.body;
        try {
            const updatedOrderId = await this.ordersService.updateOrder({ orderId, order, products });
            res.status(200).json({
                data: updatedOrderId,
                message: 'order updated'
            })
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        const { id: orderId } = req.params;
        try {
            const deletedOrderId = await this.ordersService.deleteOrder({ orderId });
            res.status(200).json({
                data: deletedOrderId,
                message: 'order deleted'
            })
        } catch (error) {
            next(error);
        }
    }
}

module.exports = OrdersController;