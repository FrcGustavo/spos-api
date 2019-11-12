const assert = require('assert');
const proxyquire = require('proxyquire');
const { productsMock, ProductsServiceMock } = require('../utils/mocks/products');
const testServer = require('../utils/testServer');

describe('routes - products', function() {
    const ProductsController = proxyquire('../controllers/ProductsController', {
        '../services/ProductsService': ProductsServiceMock
    });

    const route = proxyquire('../routes/ProductRoutes', {
        '../controllers/ProductsController': ProductsController,
        '../utils/midlewares/validationSlug': function(req, res, next) {next();}
    });
    const request = testServer(route);
    describe('GET /products', function() {
        it('should respond with status 200', function(done) {
            request.get('/api/products').expect(200, done);
        });

        it('should respond with the list of the products', function(done) {
            request.get('/api/products').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: productsMock,
                    message: 'products listed'
                })
                done();
            })
        });
    });

    describe('GET /products/:id', function() {
        it('should respond with status 200', function(done) {
            request.get(`/api/products/${productsMock[0]._id}`).expect(200, done);
        });

        it('should respond with one product', function(done) {
            request.get(`/api/products/${productsMock[0]._id}`).end((err, res) => {
                assert.deepEqual(res.body, {
                    data: productsMock[0],
                    message: 'product retrieved'
                })
                done();
            });
        });
    });

    describe('POST /products', function() {
        const { name, description, avatar, price, unity } = productsMock[0];

        it('should respond with status 201', function(done) {
            request
                .post('/api/products')
                .set('Content-Type', 'application/json')
                .send({ name, description, avatar, price, unity })
                .expect(201, done);
        });

        it('should respond with new product', function(done) {
            request
                .post('/api/products')
                .set('Content-Type', 'application/json')
                .send({ name, description, avatar, price, unity })
                .end((err, res) => {
                    assert.deepEqual(res.body, {
                        data: productsMock[0]._id,
                        message: 'product created'
                    });
                    done();
                });
        });
    });

    describe('PUT /products/:id', function() {
        const { name, description, avatar, price, unity } = productsMock[0];

        it('should respond with status 200', function(done) {
            request
                .put(`/api/products/${productsMock[0]._id}`)
                .set('Content-Type', 'application/json')
                .send({ name, description, avatar, price, unity })
                .expect(200, done);
        });

        it('should respond with product updated', function(done) {
            request
                .put(`/api/products/${productsMock[0]._id}`)
                .set('Content-Type', 'application/json')
                .send({ name, description, avatar, price, unity })
                .end((err, res) => {
                    assert.deepEqual(res.body, {
                        data: productsMock[0]._id,
                        message: 'product updated'
                    });
                    done();
                });
        });
    });

    describe('DELETE /products/:id', function() {
        it('should respond with status 200', function(done) {
            request
                .delete(`/api/products/${productsMock[0]._id}`)
                .expect(200, done);
        });

        it('should respond with product deleted', function(done) {
            request
                .delete(`/api/products/${productsMock[0]._id}`)
                .end((err, res) => {
                    assert.deepEqual(res.body, {
                        data: productsMock[0]._id,
                        message: 'product deleted'
                    });
                    done();
                });
        });
    });
});