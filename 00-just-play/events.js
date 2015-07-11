var emitter = new (require('events').EventEmitter)();

var cb = function () {
   console.log('Once Ping Event');
};

emitter.once('ping', cb);
emitter.on('ping', function () { console.log('On Ping Event'); });
console.log(emitter.listeners('ping'));

emitter.removeListener('ping', cb);
console.log(emitter.listeners('ping'));
