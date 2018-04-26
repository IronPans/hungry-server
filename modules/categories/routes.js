const Router = require('koa-router');
const categoryController = require('./controller');

module.exports = () => {
    const category = new Router();

    category.get('/', categoryController.getCategories);

    return ['/categories', category.routes(), category.allowedMethods()];
};