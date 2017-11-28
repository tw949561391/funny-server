const Router = require('koa-router');
const MiupUtils = require('miup-utils');
const Oauth = require('../../core/rpc').Oauth;
module.exports = router = new Router().prefix("/server/user");

router.use(Oauth.validateUserMd());


router.get('/helloword.json', async (ctx) => {
    console.log('ss')
    ctx.body = ctx.user;
});