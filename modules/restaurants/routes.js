const Router = require('koa-router');
const restaurantController = require('./controller');

module.exports = () => {
    const Restaurant = new Router();

    Restaurant.post('/', restaurantController.getRestaurantLists);

    return ['/restaurants', Restaurant.routes(), Restaurant.allowedMethods()];
};