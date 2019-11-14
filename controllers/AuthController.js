const passport = require('passport');
const jwt = require('jsonwebtoken');
const ApiKeysService = require('../services/ApiKeysService');
const UsersService = require('../services/UsersService');
const boom = require('@hapi/boom');
const { config } = require('../config');

class AuthController {
    constructor() {
        this.apiKeysService = new ApiKeysService();
        this.usersService = new UsersService();
        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.sigInProvider = this.sigInProvider.bind(this);
    }

    async signIn(req, res, next) {
        const { apiKeyToken } = req.body;
        if(!apiKeyToken) {
            next(boom.unauthorized('apiKeyToken is required'));
        }        
        passport.authenticate('basic', (error, user) => {
            try {                   
                if(error || !user) {                       
                    next(boom.unauthorized());
                }

                req.login(user, { session: false }, async (error) => {
                        if(error) next(error);

                        const apiKey = await this.apiKeysService.getApiKey({ token: apiKeyToken });
                        if(!apiKey) next(boom.unauthorized());

                        const { _id: id, name, email } = user;
                        const payload = {sub: id,
                            name,
                            email,
                            scopes: apiKey.scopes,
                        };
                        const token = jwt.sign(payload, config.authJwtSecret, {
                            expiresIn: '15min'
                        });
                        
                        return res.status(200).json({
                            token, user: { id, name, email }
                        });
                });
            } catch (error) {
                next(error);
            }
        })(req, res, next);
    }

    async signUp(req, res, next) {
        const { body: user } = req;
        try {
            const createdUserId = await this.usersService.createUser({ user });
            res.status(201).json({
                data: createdUserId,
                message: 'user created'
            });
        } catch(error) {
            next(error);
        }
    }

    async sigInProvider(req, res, next) {
        const { body } = req;
        const { apiKeyToken, ...user } = body;

        if(!apiKeyToken) {
            next(boom.unauthorized('apiKeyToken is required'));
        }

        try {
            const querieUser = await this.usersService.getOrCreateUser({ user });
            const apiKey = await this.apiKeysService.getApiKey({ token: apiKeyToken });
            if(!apiKey) {
                return next(boom.unauthorized());
            }

            const { _id: id, name, email } = querieUser;
            const payload = {
               sub: id,
               name,
               email,
               scopes: apiKey.scopes, 
            };

            const token = jwt.sign(payload, config.authJwtSecret, {
                expiresIn: '15min',
            });
            return res.status(200).json({
                token, user: { id, name, email }
            });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = AuthController;