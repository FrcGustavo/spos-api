const express = require('express');
const AuthController = require('../controllers/AuthController');
const { createUserSchema, createProviderUserSchema } = require('../utils/schemas/userSchema');
const validationHandler = require('../utils/midlewares/validationHandler');

// Basic strategy
require('../utils/auth/strategies/basic');

function AuthRoutes(app) {
    const router = express.Router();
    const controller = new AuthController();
    app.use('/api/auth', router);
    
    router.post('/sign-in', controller.signIn);
    router.post('/sign-up', validationHandler(createUserSchema), controller.signUp);
    router.post('/sign-provider', validationHandler(createProviderUserSchema), controller.sigInProvider);

};

module.exports = AuthRoutes;