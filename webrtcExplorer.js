var Explorer = require('webrtc-explorer');

webrtcExplorer = function(cfg) {
	return new Explorer(cfg);
};


/*
console.log('start');

var config = {
    signalingURL: 'http://stage.sl.pt:9000',
    logging: true
};

var peer = new Explorer(config);

p = peer;

peer.events.on('registered', function(data) {
    console.log('registered with Id:', data.peerId);
});

peer.events.on('ready', function() {
    console.log('ready to send messages');
});

peer.events.on('message', function(envelope) {
    console.log(envelope);
});

peer.register();
*/
