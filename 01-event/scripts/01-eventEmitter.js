var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('start-event', function () {
   console.log('hallo welt!');
});

emitter.emit('start-event');
