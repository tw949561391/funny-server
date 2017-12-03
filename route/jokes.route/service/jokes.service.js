const Pool_mongo = require('../../../core/pool/index').MongoPool;
const ObjectId = require('mongodb').ObjectID;
const log = require('../../../core/log/index').getLogger();
module.exports = {
    /**
     * @param pageAble
     * @returns {Promise.<Cursor>}
     */
    getJokers: async (pageAble, filter, sort) => {
        let db = await Pool_mongo.acquire();
        let collection = db.collection('joke');
        let limit = pageAble.pageSize || 10;
        let skip = ((pageAble.pageNum || 1) - 1) * limit;
        try {
            return await collection.find(filter,{"_id":1,"title":1,"pics":1,"content":1,"create_time":1,type:1}).sort(sort).skip(skip).limit(limit).toArray();
        } catch (e) {
            log.error(e.message);
            throw e;
        } finally {
            Pool_mongo.release(db);
        }
    }
};
