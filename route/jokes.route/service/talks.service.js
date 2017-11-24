const Pool_mongo = require('../../../core/pool/index').mongo;
const ObjectId = require('mongodb').ObjectID;
const log = require('../../../core/log/index').getLogger();
const BusinessError = require('miup-errors').BusinessError;
module.exports = {


    postTalk: async (talkData) => {
        let db = await Pool_mongo.acquire();
        let colTalk = db.collection('joke-talk');
        let colJoke = db.collection('joke');
        try {
            let joke = await colJoke.findOne({_id: new ObjectId(talkData.jokeId)}, {_id: 1});
            if (joke == null) {
                throw new BusinessError("no such joke", {code: 554, name: 'no_joke'})
            }
            let talk = await colTalk.insertOne(talkData);
            return talk;
        } catch (e) {
            log.error(e.message);
            Pool_mongo.release(db);
            throw e;
        }

    }

};
