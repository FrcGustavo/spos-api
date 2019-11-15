const sinon = require('sinon');
const { productsMock } = require('./products');
const { ordersMock } = require('./orders');

const getAllStub = sinon.stub();
getAllStub.withArgs('products').resolves(productsMock);
getAllStub.withArgs('orders').resolves(ordersMock.orders);
getAllStub.withArgs('orderProducts').resolves(ordersMock.products);

const getStub = sinon.stub();
getStub.withArgs('orders').resolves(ordersMock.orders[0]);
getStub.withArgs('products').resolves(productsMock[0]);

const createStub = sinon.stub()
createStub.withArgs('products').resolves(productsMock[0]._id);
createStub.withArgs('orders').resolves(ordersMock.orders[0]._id);

const createManyStub = sinon.stub()
createManyStub.withArgs('orderProducts').resolves(ordersMock.products.map(({_id})=> _id));

const updateStub = sinon.stub()
updateStub.withArgs('orders').resolves(ordersMock.orders[0]._id);

const deleteStub = sinon.stub()
deleteStub.withArgs('orders').resolves(ordersMock.orders[0]._id)

const deleteManyStub = sinon.stub()
deleteManyStub.withArgs('orderProducts').resolves(ordersMock.products.length);


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

    createMany(collection, data) {
        return createManyStub(collection, data);
    }

    update(collection, id, data) {
        return updateStub(collection, data);
    }

    delete(collection, id) {
        return deleteStub(collection, id);
    }

    deleteMany(collection, data) {
        return deleteManyStub(collection, data);
    }
}

module.exports = {
    getAllStub,
    getStub,
    createStub,
    createManyStub,
    updateStub,
    deleteStub,
    deleteManyStub,
    MongoLibMock
}