const assert = require('assert');
const proxyquire = require('proxyquire');
const { ordersMock, OrdersServiceMock } = require('../utils/mocks/orders');
const testServer = require('../utils/testServer');

describe('routes- orders', function() {
    const OrdersController = proxyquire('../controllers/OrdersController', {
        '../services/OrdersService': OrdersServiceMock
    });

    const route = proxyquire('../routes/OrderRoutes', {
        '../controllers/OrdersController': OrdersController
    });

    const request = testServer(route);

    describe('GET /orders', function() {
        it('should respond with status 200', function(done) {
            request.get('/api/orders').expect(200, done);
        });

        it('should respond with the list of the orders', function(done) {
            request.get('/api/orders').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: ordersMock.orders,
                    message: 'orders listed'
                });
                done();
            });
        });
    });

    describe('POST /orders', function() {
        it('should respond with status 201', function(done) {
            request
                .post('/api/orders')
                .set('Content-Type', 'appication/json')
                .send({ 
                    order: { _client: ordersMock.orders[0]._client },
                    products: ordersMock.products
                })
                .expect(201, done);
        });

        it('should respond with new order', function(done) {
            request
            .post('/api/orders')
            .set('Content-Type', 'application/json')
            .send({ 
                order: { _client: ordersMock.orders[0]._client },
                products: ordersMock.products
            })
            .end((err, res) => {
                const productsIds = ordersMock.products.map(product => product._id);
                assert.deepEqual(res.body, {
                    data: {
                        createdOrderId: ordersMock.orders[0]._id,
                        createdIdsOrderProducts: productsIds
                    },
                    message: 'order created'
                });
                done();
            });
        });
    });

    describe('GET /order/:id', function() {
        it('should respond with status 200', function(done) {
            request.get(`/api/orders/${ordersMock.orders[0]._id}`).expect(200, done);
        });

        it('should respond with one order', function(done) {
            request
                .get(`/api/orders/${ordersMock.orders[0]._id}`)
                .end((err, res) => {
                    assert.deepEqual(res.body, {
                        data: {
                            _id: ordersMock.orders[0]._id,
                            _client: ordersMock.orders[0]._client,
                            products: ordersMock.products
                        },
                        message: 'order retrieved'
                    });
                    done();
                });
        });
    });

    describe('PUT /orders/:id', function() {
        it('should respond with status 200', function(done) {
            request
                .put(`/api/orders/${ordersMock.orders[0]._id}`)
                .set('Content-Type', 'application/json')
                .send({ 
                    order: { _client: ordersMock.orders[0]._client },
                    products: ordersMock.products
                })
                .expect(200, done);
        });

        it('should respond with order updated', function(done) {
            request
                .put(`/api/orders/${ordersMock.orders[0]._id}`)
                .set('Content-Type', 'application/json')
                .send({ 
                    order: { _client: ordersMock.orders[0]._client },
                    products: ordersMock.products
                })
                .end((err, res) => {
                    const productsIds = ordersMock.products.map(product => product._id);
                    assert.deepEqual(res.body, {
                        data: {
                            updatedOrderId: ordersMock.orders[0]._id, 
                            updatedIdsOrderProducts: productsIds, 
                            deletedListProducts: productsIds.length
                        },
                        message: 'order updated'
                    });
                    done()
                });
        });
    });

    describe('DELETE /orders/:id', function() {
        it('should respond with status 200', function(done) {
            request
                .delete(`/api/orders/${ordersMock.orders[0]._id}`)
                .expect(200, done);
        });

        it('should respond with order deleted', function(done) {
            request
                .delete(`/api/orders/${ordersMock.orders[0]._id}`)
                .end((err, res) => {
                    assert.deepEqual(res.body, {
                        data: {
                            deletedOrderId: ordersMock.orders[0]._id,
                            deletedListProducts: ordersMock.products.length
                        },
                        message: 'order deleted'
                    });
                    done();
                });
        });
    });
});
