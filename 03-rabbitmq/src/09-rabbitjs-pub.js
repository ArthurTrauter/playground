var context = require('rabbit.js')
  .createContext('amqp://marad010');

context.on('ready', function() {
  var pub = context.socket('PUB');
  pub.connect('events', function() {

    pub.end(JSON.stringify({
      welcome: 'rabbit.js'
    }), 'utf8');
    pub.on('close', function() {
      context.close();
    });
  });
});
