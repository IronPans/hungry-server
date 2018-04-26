const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const statics = require('koa-static');
const cors = require('koa-cors');
const db = require('./config/mongoose');
const route = require('./config/route');

const app = new Koa();

// CORS支持跨域
app.use(cors());

// 使用ctx.body解析中间件
app.use(bodyParser());

// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}));

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './public';

app.use(statics(
    path.join(__dirname, staticPath)
));

db.start(() => {
    route.init(app);

    // 插入测试数据
    require('./db/addTestData');

});

// app.use(async(ctx, next) => {
//     try {
//         await next();
//         const status = ctx.status || 404;
//         if (status === 404) {
//             ctx.throw(404)
//         }
//     } catch (err) {
//         ctx.status = err.status || 500;
//         if (ctx.status === 404) {
//             await ctx.render('404')
//         } else {
//             await ctx.render('error')
//         }
//     }
// });

app.listen(3000, () => {
    console.log('starting at port 3000')
});