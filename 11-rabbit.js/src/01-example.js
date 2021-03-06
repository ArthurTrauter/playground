var context = require('rabbit.js').createContext('amqp://localhost');

context.on('ready', function() {
  var pub = context.socket('PUB');
  var sub = context.socket('SUB');

  sub.pipe(process.stdout);

  sub.connect('events', function() {
    pub.connect('events', function() {
      pub.write(JSON.stringify({
        welcome: 'rabbit.js'
      }), 'utf8');
    });
  });

});
