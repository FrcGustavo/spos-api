const assert = require('assert');
const proxyquire = require('proxyquire');
const { 
    MongoLibMock, 
    getAllStub, 
    getStub, 
    createStub, 
    createManyStub,
    updateStub,
    deleteStub,
    deleteManyStub
} = require('../utils/mocks/mongoLib');
const { ordersMock } = require('../utils/mocks/orders');

describe('service - orders', function() {
    const OrdersService = proxyquire('../services/OrdersService', {
        '../lib': MongoLibMock
    });

    const ordersService = new OrdersService();

    describe('when getoOrders method is called', async function() {
        it('should call the getAll MongoLib method', async function() {
            await ordersService.getOrders({});
            assert.strictEqual(getAllStub.called, true);
        });

        it('should return an array of orders', async function() {
            const result = await ordersService.getOrders({});
            const expected = ordersMock.orders;
            assert.deepEqual(result, expected);
        });
    });

    describe('when getOrder method is called', async function() {
        it('should call the get MongoLib method', async function() {
            await ordersService.getOrder({ orderId: ordersMock.orders[0]._id });
            assert.strictEqual(getStub.called, true);
        });

        it('should return an order with products', async function() {
            const result = await ordersService.getOrder({ orderId: ordersMock.orders[0]._id });
            const expected = {
                ...ordersMock.orders[0],
                products: ordersMock.products
            };
            assert.deepEqual(result, expected);
        });
    });

    describe('when createOrder method is called', async function() {
        it('should call the create and createMany MongoLib method', async function() {
            await ordersService.createOrder({ 
                order: ordersMock.orders[0], 
                products: ordersMock.products
            });
            assert.strictEqual(createStub.called, true);
            assert.strictEqual(createManyStub.called, true);
        });

        it('should return an new object with order and its products', async function() {
            const result = await ordersService.createOrder({ 
                order: ordersMock.orders[0], 
                products: ordersMock.products
            });
            const productsIds = ordersMock.products.map(({_id}) => _id);
            const expected = {
                createdOrderId: ordersMock.orders[0]._id,  
                createdIdsOrderProducts: productsIds
            };
            assert.deepEqual(result, expected);
        });
    });

    describe('when updateOrder method is called', async function() {
        it('should call the update, deleteMany and createMany MongoLib method', async function() {
            await ordersService.updateOrder({ 
                orderId: ordersMock.orders[0]._id, 
                order: ordersMock.orders[0], 
                products: ordersMock.products 
            });
            assert.strictEqual(updateStub.called, true);
            assert.strictEqual(deleteManyStub.called, true);
            assert.strictEqual(createManyStub.called, true);
        });

        it('should return an object with order and its products updated', async function() {
            const result = await ordersService.updateOrder({ 
                orderId: ordersMock.orders[0]._id, 
                order: ordersMock.orders[0], 
                products: ordersMock.products 
            });
            const productsIds = ordersMock.products.map(({_id}) => _id);
            const expected = { 
                updatedOrderId: ordersMock.orders[0]._id, 
                updatedIdsOrderProducts: productsIds, 
                deletedListProducts: productsIds.length 
            };
            assert.deepEqual(result, expected);
        });
    });

    describe('when deleteOrder method is called', async function() {
        it('should call the delete and deleteMany MongoLib method', async function() {
            await ordersService.deleteOrder({ 
                orderId: ordersMock.orders[0]._id,
            });
            assert.strictEqual(deleteStub.called, true);
            assert.strictEqual(deleteManyStub.called, true);
        });

        it('should return an object with orderId and its number of products deleted', async function() {
            const result = await ordersService.deleteOrder({ 
                orderId: ordersMock.orders[0]._id,
            });
            const expected = { 
                deletedOrderId: ordersMock.orders[0]._id, 
                deletedListProducts: ordersMock.products.length 
            };
            assert.deepEqual(result, expected);
        });
    });
});