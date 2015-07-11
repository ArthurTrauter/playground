"use strict"

var ctx = require('rabbit.js')
  .createContext('amqp://marad010');

if (process.argv.length < 3) {
  console.log('Parameter fehlt');
  ctx.close();
  process.exit(1);
}
var times = process.argv[2];

ctx.on('ready', function() {
  var exchange = 'event';
  var push = ctx.socket('PUSH');

  push.connect(exchange, function() {
    send(times);
    // push.end(JSON.stringify('{ name: "ich bins" }'), 'utf8');
    function send(times) {
      console.log(times);
      if (times <= 0) return push.close();
      setTimeout(function() {
        push.write(times + '. times', 'utf8');
        console.log(' [x] Data written...');
        send(--times);
      }, 1000);
    };
  });
  // });
  push.on('close', function() {
    ctx.close();
  });
});
