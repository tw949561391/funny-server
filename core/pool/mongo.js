//--import
const GenericPool = require('generic-pool');
const MongoClient = require('mongodb').MongoClient;
const conf_mongo = require('../../conf/index').mongo;
const log = require('../log').getLogger();


const factory = {
    create: function () {
        return new Promise(function (resolve, reject) {
            MongoClient.connect(`mongodb://${conf_mongo.uri}:${conf_mongo.port}/${conf_mongo.dbName}`, (err, db) => {
                if (err) {
                    reject(err);
                    log.error("create mongo connect entity error")
                }
                else {
                    resolve(db);
                    log.debug("create mongo connect entity success")
                }
            })
        })
    },
    destroy: function (db) {
        return new Promise(function (resolve) {
            db.close();
            log.debug("close mongo connect entity success");
            resolve();
        })
    }
};
const opts = {
    max: conf_mongo.max_pool, // maximum size of the pool 
    min: conf_mongo.min_pool // minimum size of the pool 
};
module.exports = GenericPool.createPool(factory, opts)
