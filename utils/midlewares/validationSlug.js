const slugify = require('../plugins/slugify');
const MongoLib = require('../../lib/index');
const mongoDB = new MongoLib();

async function validationSlug(req, res, next) {
    const { body } = req;
    if(req.method === 'PUT' && !body.name) return next();

    let slug = slugify(body.name);
    const count = await mongoDB.count('products', { slug });

    if(count > 0) slug = `${slug}-${count}`;
    req.body = { ...body, slug };
    next();
}

module.exports = validationSlug;