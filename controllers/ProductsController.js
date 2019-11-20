const ProductsService = require('../services/ProductsService');

class ProductsController {
    constructor() {
        this.productsService = new ProductsService();
        this.index = this.index.bind(this);
        this.create = this.create.bind(this);
        this.show = this.show.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async index(req, res, next) {
        const { limit, skip, sort } = req.query;
        const query = {};
        const paginate = { limit: Number(limit), skip: Number(skip), sort: Number(sort) };
        try {
            const products = await this.productsService.getProducts({ query, paginate });
            res.status(200).json({
                data: products,
                message: 'products listed'
            });
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        const { body: product } = req;
        try {
            const createdProductId = await this.productsService.createProduct({ product });
            res.status(201).json({
                data: createdProductId,
                message: 'product created',
            });
        } catch (error) {
            next(error);
        }
    }

    async show(req, res, next) {
        const { id: productId } = req.params;
        try {
            const product = await this.productsService.getProduct({ productId });
            res.status(200).json({
                data: product,
                message: 'product retrieved',
            });
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        const { id: productId } = req.params;
        const { body: product } = req;
        try {
            const updatedProductId = await this.productsService.updateProduct({ productId, product });
            res.status(200).json({
                data: updatedProductId,
                message: 'product updated',
            });
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        const { id: productId } = req.params;
        try {
            const deletedProductId = await this.productsService.deleteProduct({ productId });
            res.status(200).json({
                data: deletedProductId,
                message: 'product deleted',
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ProductsController;