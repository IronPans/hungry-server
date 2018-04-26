const Router = require('koa-router');
const foodController = require('./controller');

module.exports = () => {
    const food = new Router();

    food.post('/', foodController.getFoodsList);

    return ['/foods', food.routes(), food.allowedMethods()];
};