module.exports.server = {
    port: 3001
};
module.exports.redis = {
    uri: 'localhost',
    port: '16379',
    max_pool: 10,
    min_pool: 2
};
module.exports.mongo = {
    uri: 'localhost',
    port: '17017',
    dbName: 'joke',
    max_pool: 10,
    min_pool: 2
};

module.exports.log4j = {
    appenders: {
        console: {
            type: 'console'
        },
        service: {
            type: 'dateFile',
            filename: '/var/log/node/funny-server/service.log',
            pattern: '.yyyy-MM-dd'
        }
    },
    categories: {
        default:
            {
                appenders: ['console'], level: 'info'
            },
        service:
            {
                appenders: ['service'], level: 'info'
            }
    },
    replaceConsole: true
};



module.exports.miupOauth = {
    url: "http://localhost:3000/server/oauth/check.json",
    method: "POST"
};


