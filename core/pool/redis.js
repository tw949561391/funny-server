//--import
const GenericPool = require('generic-pool');
const RedisClient = require('redis');
const conf_redis = require('../../conf/index').redis;
const log = require('../log').getLogger();

const factory = {
    create: function () {
        return new Promise(function (resolve, reject) {
            const db = RedisClient.createClient(conf_redis.port, conf_redis.uri);
            db.on('connect', () => {
                resolve(db);
                log.debug('create redis connect entity success')
            });
            db.on('error', (err) => {
                log.error('create redis connect entity error');
                reject(err);
            })
        })
    },
    destroy: function (db) {
        return new Promise(function (resolve) {
            db.quit();
            db.on('end', () => {
                log.debug('close redis connect entity success');
                resolve();
            });
        })
    }
};

const opts = {
    max: conf_redis.max_pool, // maximum size of the pool 
    min: conf_redis.min_pool // minimum size of the pool 
};

module.exports = GenericPool.createPool(factory, opts)
