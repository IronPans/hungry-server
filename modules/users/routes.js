const Router = require('koa-router');
const userController = require('./controller');

module.exports = () => {
    const user = new Router();

    user.post('/', userController.checkUser);

    return ['/users', user.routes(), user.allowedMethods()];
};