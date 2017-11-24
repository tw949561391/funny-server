const Router = require('koa-router');
const talksService = require('./service/talks.service');
module.exports = route = new Router().prefix('/server/jokes/talks');
route.use(require('../../core/auth').checkAuthMd());


route.post("/to/:jokeId.json", async (ctx) => {
    let jokeId = ctx.params.jokeId;
    let content = ctx.request.body.content;
    let userId = ctx.user.id;
    let toId = ctx.request.body.toId;
    let talk = await talksService.postTalk({
        jokeId: jokeId,
        form: userId,
        to: toId,
        content: content,
        time: new Date()
    });
    ctx.body = talk;
});

