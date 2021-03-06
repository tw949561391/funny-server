module.exports.server = {
    port: 3001,
    dev: true
};
module.exports.redis = {
    uri: 'miup.cc',
    port: '16379',
    max_pool: 2,
    min_pool: 1
};

module.exports.mongo = {
    uri: 'miup.cc',
    port: '17017',
    dbName: 'joke',
    max_pool: 10,
    min_pool: 1
};

module.exports.log4j = {
    replaceConsole: true,
    appenders: {
        console: {
            type: 'console'
        },
        out: {
            type: 'stdout'
        },
        service: {
            type: 'dateFile',
            filename: 'logs/service.log',
            pattern: '.yyyy-MM-dd'
        },
        rpc: {
            type: 'dateFile',
            filename: 'logs/rpc.log',
            pattern: '.yyyy-MM-dd'
        }
    },
    categories: {
        default: {
            appenders: ['console', 'out'], level: 'debug'
        },
        service: {
            appenders: ['service', 'out'], level: 'debug'
        },
        rpc: {
            appenders: ['rpc', 'out'], level: 'debug'
        }
    }
};

module.exports.miupOauth = {
    url: "http://miup.cc:3000/server/oauth/check.json",
    method: "POST"
};


//----rpc
module.exports.rpcOauth = {
    uri: 'ws://miup.cc:3000',
    max_pool: 2,
    min_pool: 1,
    options: {
        path: '/rpc'
    }
};

