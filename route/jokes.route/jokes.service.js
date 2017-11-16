const Pool_mongo = require('../../core/pool/mongo');
const ObjectId = require('mongodb').ObjectID;
module.exports = {
    /**
     * @param pageAble
     * @returns {Promise.<Cursor>}
     */
    getJokers: async (pageAble, filter, sort) => {
        let db = await Pool_mongo.acquire();
        let collection = db.collection('joke');
        let skip = (pageAble.pageNum - 1) * pageAble.pageSize;
        let jokers;
        let query={};
        if(filter.time_div){
            query.create_time={$lte:new Date(filter.time_div)}
        }
        try {
            jokers = await collection.find(query).sort({create_time:-1}).skip(skip).limit(pageAble.pageSize).toArray();
        } catch (e) {
            console.error(e);
        } finally {
            Pool_mongo.release(db);
            return jokers;
        }
    },

    getJokerTypes: async () => {
        let db = await Pool_mongo.acquire();
        let collection = db.collection('joke-types');
        let jokers = await collection.find({}).toArray();
        Pool_mongo.release(db);
        return jokers;
    },
    praiseJoker: async (_id) => {
        let db = await Pool_mongo.acquire();
        let collection = db.collection('jokes');
        let fileter = {_id: ObjectId(_id)};
        let jokers = await collection.updateOne(fileter, {$inc: {praise: 1}});
        jokers = await collection.findOne(fileter);
        Pool_mongo.release(db);
        return jokers;
    }
};
