/*const assert = require('assert');
const proxyquire = require('proxyquire');
const { MongoLibMock, getAllStub, getStub } = require('../utils/mocks/mongoLib');
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
            const expected = ordersMock;
            assert.deepEqual(result, expected);
        });
    });

    describe('when getOrder method is called', async function() {
        it('should call the get MongoLib method', async function() {
            await ordersService.getOrder({ orderId: ordersMock[0]._id });
            assert.strictEqual(getStub.called, true);
        });

        it('should return an object with product', async function() {
            const result = await ordersService.getOrder({ orderId: ordersMock[0]._id });
            const expected = ordersMock[0];
            assert.deepEqual(result, expected);
        });
    });
});*/