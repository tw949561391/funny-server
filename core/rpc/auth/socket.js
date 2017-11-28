const IO = require('socket.io-client');
const socket = IO("ws://miup.cc:3000", {path: "/rpc"});
const log = require('../../log').getLogger();
socket.on('connect', async () => {

    log.info("oauth server rpc connect success");

});


module.exports = socket;