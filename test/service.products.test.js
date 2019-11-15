const assert = require('assert');
const proxyquire = require('proxyquire');
const { 
    MongoLibMock, 
    getAllStub, 
    getStub, 
    createStub,
    updateStub,
    deleteStub
} = require('../utils/mocks/mongoLib');
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

    describe('when createProduct method is called', async function() {
        it('should call the create MongoLib method', async function() {
            await productsService.createProduct({ product: productsMock[0] });
            assert.strictEqual(createStub.called, true);
        });

        it('should return an productId', async function() {
            const result = await productsService.createProduct({ product: productsMock[0] });
            const expected = productsMock[0]._id;
            assert.deepEqual(result, expected);
        });
    });

    describe('when updateProduct method is called', async function() {
        it('should call the update MongoLib method', async function() {
            await productsService.updateProduct({ 
                productId: productsMock[0]._id, 
                product: productsMock[0] 
            });
            assert.strictEqual(updateStub.called, true);
        });

        it('should return an productId updated', async function() {
            const result = await productsService.updateProduct({ 
                productId: productsMock[0]._id, 
                product: productsMock[0] 
            });
            const expected = productsMock[0]._id;
            assert.deepEqual(result, expected);
        });
    });

    describe('when deleteProduct method is called', async function() {
        it('should call the update MongoLib method', async function() {
            await productsService.deleteProduct({ 
                productId: productsMock[0]._id
            });
            assert.strictEqual(deleteStub.called, true);
        });

        it('should return an productId deleted', async function() {
            const result = await productsService.deleteProduct({ 
                productId: productsMock[0]._id
            });
            const expected = productsMock[0]._id;
            assert.deepEqual(result, expected);
        });
    });
});