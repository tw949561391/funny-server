const Router=require('koa-router');
const MiupUtils=require('miup-utils');
module.exports=router=new Router().prefix("server");

router.post('helloword.json',async(ctx)=>{
    let username=ctx.request.body.username;
    let password=ctx.request.body.password;
    if(!MiupUtils.StringUtil.isMobile(username)){



    }


});