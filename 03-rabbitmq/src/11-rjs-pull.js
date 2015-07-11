var ctx = require('rabbit.js')
  .createContext('amqp://marad010');

ctx.on('ready', function() {
  process.once('SIGINT', function() {
    ctx.close();
  });

  var exchange = 'event';
  var pull = ctx.socket('PULL');

  pull.connect(exchange, function() {
    console.log('Connect PULL-Listener... Exit with CTRL+C');
    pull.on('data', function(data) {
      console.log(' [x] pull data: %s', data);
    });
  });
});
