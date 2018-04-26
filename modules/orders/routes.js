const Router = require('koa-router');
const orderController = require('./controller');

module.exports = () => {
    const order = new Router();

    order.post('/', orderController.getOrderList);

    return ['/orders', order.routes(), order.allowedMethods()];
};