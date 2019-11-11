const MongoLib = require('../lib');
const { ObjectId } = require('mongodb');

class OrdersService {
    constructor() {
        this.order = 'order';
        this.products = 'orderProducts'
        this.mongoDB = new MongoLib();
    }

    async getOrders({ tags }) {
        const query = tags && { tags: { $in: tags } };
        const orders = await this.mongoDB.getAll(this.order, query);
        return orders || [];
    }

    async getOrder({ orderId }) {
        const order = await this.mongoDB.get(this.order, orderId);
        const products = await this.mongoDB.getAll(this.products, { _order: ObjectId(orderId) });
        return { ...order, products }

    }

    async createOrder({ order, products }) {
        const createdOrderId = await this.mongoDB.create(this.order, { _client: ObjectId(order._client) });
        products = products.map(product => ({ ...product, _order: ObjectId(createdOrderId) }))
        const createdIdsOrderProducts = await this.mongoDB.createMany(this.products, products);
        return { createdOrderId, createdIdsOrderProducts };
    }

    async updateOrder({ orderId, order, products }) {
        let updatedOrderId = null;
        let updatedIdsOrderProducts = null;
        let deletedListProducts = null;
        if(order) {
            updatedOrderId = await this.mongoDB.update(this.order, orderId, { _client: ObjectId(order._client) });
        }
        if(products) {
            deletedListProducts = await this.mongoDB.deleteMany(this.products, { _order: ObjectId(orderId) });
            products = products.map(product => ({ ...product, _order: ObjectId(orderId) })); 
            updatedIdsOrderProducts = await this.mongoDB.createMany(this.products, products);
        }
        return { updatedOrderId, updatedIdsOrderProducts, deletedListProducts };
    }

    async deleteOrder({ orderId }) {
        const deletedOrderId = await this.mongoDB.delete(this.order, orderId);
        const deletedListProducts = await this.mongoDB.deleteMany(this.products, { _order: ObjectId(orderId)});
        return { deletedOrderId, deletedListProducts };
    }
} 

module.exports = OrdersService;