const socket = require('./socket');
const log = require('../../log').getLogger('rpc');
const OauthError = require('miup-errors').BusinessError;

function validateUser(ctx, scopes) {
    log.debug('validate user start with  scopes:' + scopes);
    return new Promise((resolve, reject) => {
        let req = buildRequest(ctx.request);
        let res = buildResponse(ctx.response);
        socket.emit('who', {request: req, response: res, scopes: scopes}, (err, res) => {
            if (err) {
                log.error(err);
                reject(new OauthError(err.message, err));
            } else {
                resolve(res);
            }
        })
    })
}


function buildRequest(request) {
    let req = {
        headers: request.headers || {},
        body: request.body || {},
        query: request.query || {},
        method: request.method
    }
    return req;
}


function buildResponse(response) {
    return {};
}


function validateUserMd(...scopes) {
    return async (ctx, next) => {
        let res = await validateUser(ctx, scopes || []);
        ctx.user = res.user;
        next();
    }
}


function fecthUserMd(...scopes) {
    return async (ctx, next) => {
        let res = await validateUser(ctx, scopes || []);
        ctx.user = res.user;
        next();
    }
}

module.exports = {
    validateUserMd: validateUserMd,
    fecthUserMd: fecthUserMd
};