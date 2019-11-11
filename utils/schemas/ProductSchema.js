const joi = require('@hapi/joi');

const productIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createProductSchema = {
    name: joi.string().required(),
    description: joi.string().required(),
    avatar: joi.string(),
    price: joi.number().required(),
    category: productIdSchema,
    unity: joi.string().required(),
}

const updateProductSchema = {
    name: joi.string(),
    description: joi.string(),
    avatar: joi.string(),
    price: joi.number(),
    category: productIdSchema,
    unity: joi.string(),
}

module. exports = { productIdSchema, createProductSchema, updateProductSchema };