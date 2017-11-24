const MiupWho = require('miup-who');
const MiupOauthConf = require('../../conf').miupOauth
const log = require('../log').getLogger();
let who = new MiupWho(MiupOauthConf, log);

module.exports = who;
