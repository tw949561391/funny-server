const Router = require('koa-router');
const jokesService = require('./jokes.service');
module.exports = route = new Router().prefix('/server/jokes');


route.post('/list.json', async (ctx) => {
    let body = ctx.request.body || {};
    let pagework = body.pagework || {};
    let filter = body.filter || {};
    let sort = body.sort || {};
    let res = await jokesService.getJokers(pagework, filter, sort) || [];
    ctx.body = res;
});

