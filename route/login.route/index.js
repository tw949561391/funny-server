const Router = require('koa-router');
const MiupUtils = require('miup-utils');
module.exports = router = new Router().prefix("/server/user");

router.use(require('../../core/auth').checkAuthMd());


router.get('/helloword.json', async (ctx) => {
    console.log('ss')
    ctx.body = ctx.user;
});