const conf = {

    server: {
        port: 3000
    },
    redis: {
        uri: 'miup.cc',
        port: '16379',
        max_pool: 10,
        min_pool: 2
    },

    mongo: {
        uri: 'miup.cc',
        port: '17017',
        dbName: 'joke',
        max_pool: 10,
        min_pool: 2
    }

};

module.exports = conf;