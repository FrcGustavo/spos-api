const express = require('express');
const ProductsController = require('../controllers/ProductsController');
const validationHandler = require('../utils/midlewares/validationHandler');
const validationSlug = require('../utils/midlewares/validationSlug');
const { productIdSchema, createProductSchema, updateProductSchema } = require('../utils/schemas/ProductSchema');

function ProductsRoutes(app) {
    const router = express.Router();
    const controller = new ProductsController();
    app.use('/api/products', router);

    router.route('/')
        .get(controller.index)
        .post(
            validationHandler(createProductSchema),
            validationSlug,
            controller.create
        );

    router.route('/:id')
        .get(validationHandler({ id: productIdSchema }, 'params'), controller.show)
        .put(
            validationHandler({ id: productIdSchema }, 'params'), 
            validationHandler(updateProductSchema),
            validationSlug,
            controller.update
        )
        .delete(validationHandler({ id: productIdSchema }, 'params'), controller.delete);
}

module.exports = ProductsRoutes;