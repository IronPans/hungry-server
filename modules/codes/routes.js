const Router = require('koa-router');
const codeController = require('./controller');

module.exports = () => {
    const code = new Router();

    code.get('/', codeController.getCode);

    code.post('/isValid', codeController.checkCodeIsValid);

    return ['/codes', code.routes(), code.allowedMethods()];
};