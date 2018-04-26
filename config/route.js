const Router = require('koa-router');
const utils = require('../common/utils');
const path = require('path');

const routes = [];

exports.init = (app) => {
    // set routes
    const files = utils.getAllFiles('modules');
    files.forEach((v, k) => {
        if (/model.js$/.test(v)) {
            require(path.resolve('./' + v));
        }
        if (/routes.js$/.test(v)) {
            routes.push(require(path.resolve('./' + v))(app));
        }
    });

// 装载所有子路由
    let router = new Router();
    for (const route of routes) {
        router.use(...route);
    }

// 加载路由中间件
    app.use(router.routes()).use(router.allowedMethods());
}