const Koa = require('koa');
const Koa_logger = require('koa-logger');
const Koa_parser = require('koa-bodyparser');
const Koa_errorHandler = require('miup-handlers').ErrorHandler;
const Koa_cors = require('kcors');
const Logger = require('./core/log');
const LoggerConf = require('./conf').log4j;
const ServerConf = require('./conf').server;
const Notfound = require('miup-errors').Notfound;



module.exports = app = new Koa();
if (ServerConf.dev) {
    app.is_dev = true;
}
Logger.init(LoggerConf);

if (app.is_dev) {
    app.use(Koa_logger());
}
app.use(Koa_parser());
app.use(Koa_errorHandler());
app.use(Koa_cors());




//route list
app.use(require('./route/home.route/index').routes());
app.use(require('./route/jokes.route/index.route').routes());
app.use(require('./route/jokes.route/talk.route').routes());
app.use(require('./route/login.route/index').routes());

app.use(() => {
    throw new Notfound()
});
