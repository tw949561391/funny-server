const Router = require('koa-router');
const homeService = require('./home.service');
module.exports = route = new Router().prefix('/server');


route.get('/', async (ctx) => {
    ctx.body = {status:200};
});
