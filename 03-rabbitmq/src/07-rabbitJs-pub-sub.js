var context = require('rabbit.js')
  .createContext('amqp://marad010');

context.on('ready', function() {
  var pub = context.socket('PUB');
  var sub = context.socket('SUB');
  sub.connect('events', function() {
    pub.connect('events', function() {
      pub.end(JSON.stringify({
        welcome: 'rabbit.js'
      }), 'utf8');
    });
    sub.setEncoding('utf8');
    sub.on('data', function(note) {
      console.log('Nachricht: %s', note);
      context.close();
    });
  });
});
