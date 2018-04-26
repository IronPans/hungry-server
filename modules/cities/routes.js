const Router = require('koa-router');
const cityController = require('./controller');

module.exports = () => {
    const city = new Router();

    city.get('/', cityController.getCityList);

    return ['/cities', city.routes(), city.allowedMethods()];
};