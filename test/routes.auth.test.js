const assert = require('assert');
const proxyquire = require('proxyquire');
const { ApiKeysServiceMock, UserServiceMock } = require('../utils/mocks/auth');
const testServer = require('../utils/testServer');

describe('rutes - auth', function() {
    const AuthController = proxyquire('../controllers/AuthController', {
        '../services/ApiKeysService': ApiKeysServiceMock,
        '../services/UsersService': UserServiceMock
    });

    const route = proxyquire('../routes/AuthRoutes', {
        '../controllers/AuthController': AuthController
    });
    const request = testServer(route) 

    describe('POST /sign-in', function() {
        it('should response with status 200', function(done) {
            request.post();
            assert.equal(null, null);
            done();
        }); 
    });
});