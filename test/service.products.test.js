const assert = require('assert');
const proxyquire = require('proxyquire');
const { MongoLibMock, getAllStub, getStub, createStub } = require('../utils/mocks/mongoLib');
const { productsMock } = require('../utils/mocks/products');

describe('service - products', function() {
    const ProductsService = proxyquire('../services/ProductsService', {
        '../lib': MongoLibMock
    });

    const productsService = new ProductsService();

    describe('when getProducts method is called', async function() {
        it('should call the getAll MongoLib method', async function() {
            await productsService.getProducts({});
            assert.strictEqual(getAllStub.called, true);
        });

        it('should return an array of products', async function() {
            const result = await productsService.getProducts({});
            const expected = productsMock;
            assert.deepEqual(result, expected);
        });
    });

    describe('when getProduct method is called', async function() {
        it('should call the get MongoLib method', async function() {
            await productsService.getProduct({ productId: productsMock[0]._id });
            assert.strictEqual(getStub.called, true);
        });

        it('should return an object with product', async function() {
            const result = await productsService.getProduct({ productId: productsMock[0]._id });
            const expected = productsMock[0];
            assert.deepEqual(result, expected);
        });
    });
});