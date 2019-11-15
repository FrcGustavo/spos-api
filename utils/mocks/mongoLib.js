const sinon = require('sinon');
const { productsMock } = require('./products');
const { ordersMock } = require('./orders');

const getAllStub = sinon.stub();
getAllStub.withArgs('products').resolves(productsMock);
getAllStub.withArgs('orders').resolves(ordersMock.orders);

const getStub = sinon.stub();
getStub.withArgs('orders').resolves(ordersMock.orders[0]);
getStub.withArgs('products').resolves(productsMock[0]);

//const tagQuery = { tags: { $in: ['drama'] }};

const createStub = sinon.stub().resolves(productsMock[0]._id);

class MongoLibMock {
    getAll(collection, query) {
        return getAllStub(collection, query);
    }

    get(collection, id) {
        return getStub(collection, id);
    }

    create(collection, data) {
        return createStub(collection, data);
    }
}

module.exports = {
    getAllStub,
    getStub,
    createStub,
    MongoLibMock
}