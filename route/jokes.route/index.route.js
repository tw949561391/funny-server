const Router = require('koa-router');
const jokesService = require('./service/jokes.service');
const Oauth=require('../../core/rpc').Oauth;
module.exports = route = new Router().prefix('/server/jokes');

route.use(Oauth.fecthUserMd());


route.post('/list.json', async (ctx) => {
    let body = ctx.request.body || {};
    let pagework = body.pagework || {};
    let filter = body.filter || {};
    let sort = body.sort || {};
    let res = await jokesService.getJokers(pagework, filter, sort) || [];
    ctx.body = res;
});


route.post("/talk_to/{jokeId}.json", async (ctx) => {

    ctx.body="ss"

});

